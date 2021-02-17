import React from "react";
import { Wrapper } from "./styled";
import { Post } from "../../shared/Post";
import { PostsQuery } from "../../../generated/apollo";

type Props = {
  postsQuery: PostsQuery;
};

export const Posts: React.FC<Props> = ({ postsQuery }) => {
  return (
    <Wrapper>
      {postsQuery &&
        postsQuery.posts &&
        postsQuery.posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            creatorUsername={post.creator.username}
            title={post.title}
            shortText={post.shortText}
            votesCount={post.votesCount}
            voteType={post.currentUserVoteType}
          />
        ))}
    </Wrapper>
  );
};
