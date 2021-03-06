import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

import { ReturnGetUserProps } from 'types';
import { useGetTagged } from 'hooks';
import Post from '../posts/post';
import { PostsLoading, Loading } from '../posts/posts.loading';
import EmptyTagged from './empty-tagged';

import { Content, Load } from './tagged.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  profile: ReturnGetUserProps;
};

const Tagged: FC<Props> = ({
  profile: {
    user: { fullName, username },
    isCurrentUser,
  },
}) => {
  const { ref, data, isLoading, canFetchMore } = useGetTagged(username);

  /**
   * Render posts
   */

  const renderPosts = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (data) {
      if (data[0].posts?.length === 0) {
        return <EmptyTagged isCurrentUser={isCurrentUser} fullName={fullName} />;
      }

      return data.map((page, i) => (
        <React.Fragment key={i}>
          {page.posts && page.posts.map((post) => <Post key={post._id} post={post} />)}
        </React.Fragment>
      ));
    }
  };

  return (
    <Content>
      <Grid container spacing={2}>
        {renderPosts()}
      </Grid>

      {canFetchMore && (
        <Load container spacing={2} ref={ref}>
          <PostsLoading />
        </Load>
      )}
    </Content>
  );
};

export default Tagged;
