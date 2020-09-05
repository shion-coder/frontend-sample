import React, { FC } from 'react';

import { ReturnGetUserProps } from 'types';
import { useGetPosts } from 'hooks';
import Post from './post';
import EmptyPost from './empty-post';
import { PostsLoading, Loading } from './posts.loading';

import { Container, LoadMore } from './posts.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  profile: ReturnGetUserProps;
};

const Posts: FC<Props> = ({
  profile: {
    user: { fullName, username },
    isCurrentUser,
  },
}) => {
  const { ref, data, isLoading, canFetchMore } = useGetPosts(username);

  /**
   * Render posts
   */

  const renderPosts = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (data) {
      if (data[0].posts?.length === 0) {
        return <EmptyPost isCurrentUser={isCurrentUser} fullName={fullName} />;
      }

      return data.map((page, i) => (
        <React.Fragment key={i}>
          {page.posts && page.posts.map((post) => <Post key={post._id} post={post} />)}
        </React.Fragment>
      ));
    }
  };

  return (
    <>
      <Container>{renderPosts()}</Container>

      {canFetchMore && (
        <LoadMore ref={ref}>
          <PostsLoading />
        </LoadMore>
      )}
    </>
  );
};

export default Posts;
