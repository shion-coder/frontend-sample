import React, { FC, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Grid } from '@material-ui/core';

import { QUERY } from 'types';
import { requestGetPost } from 'services';
import NotFound from 'pages/not-found';
import InfoHeader from 'components/post/info-header';
import Comments from 'components/post/comments';
import Action from 'components/post/action';
import Field from 'components/post/field';
import { PostLoading } from './post-loading';

import { StyledContainer as Container, Wrapper, ImageContainer, Image, ImageSkeleton } from './post.styles';

/* -------------------------------------------------------------------------- */

type ParamProps = {
  id: string;
};

type Props = {
  postId?: string;
};

const Post: FC<Props> = ({ postId }) => {
  const ref = useRef<HTMLInputElement | null>(null);

  const { id }: ParamProps = useParams();

  /**
   * Focus comment input function to use when click comment icon
   */

  const focusInput = () => ref.current?.focus();

  /**
   * If postId passed from upper container then use it, otherwise use id in params
   */

  const idQuery = postId ? postId : id;

  const { data, isLoading } = useQuery([QUERY.GET_POST, idQuery], () => requestGetPost(idQuery));

  if (isLoading) return <PostLoading />;

  if (!data) return <NotFound />;

  const {
    post: { image, filter },
  } = data;

  return (
    <Container maxWidth="md">
      <Wrapper item xs={12} container>
        <ImageContainer item xs={12} sm={7}>
          <Image src={image} filter={filter} effect="blur" width="100%" height="100%" placeholder={<ImageSkeleton />} />
        </ImageContainer>

        <Grid item xs={12} sm={5} container direction="column">
          <InfoHeader data={data} />

          <Comments data={data} />

          <Action data={data} focus={focusInput} />

          <Field data={data} inputRef={ref} />
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Post;
