import React, { useState } from "react";
import { Wrapper, LoadMoreButton } from "./styled";

import { Posts } from "../Posts";
import { CreatePost } from "../CreatePost";
import { PostsQuery, usePostsQuery } from "../../../generated/apollo";

type Props = {
  postsQuery: PostsQuery;
};

export const Main: React.FC<Props> = ({ postsQuery }) => {
  const { fetchMore } = usePostsQuery({ variables: { cursor: null, limit: 5 } });
  const [posts, setPosts] = useState(postsQuery.posts);
  const [cursor, setCursor] = useState(postsQuery.posts[postsQuery.posts.length - 1].id);

  const loadMorePosts = async () => {
    try {
      const { data } = await fetchMore({
        variables: { cursor, limit: 5 },
      });

      if (data) {
        setPosts([...posts, ...data.posts]);
        setCursor(data.posts[data.posts.length - 1].id);
      }
    } catch (error) {
      console.log("No more posts");
    }
  };

  return (
    <Wrapper>
      <CreatePost />
      <Posts posts={posts} />
      <LoadMoreButton onClick={loadMorePosts}>Load more</LoadMoreButton>
    </Wrapper>
  );
};
