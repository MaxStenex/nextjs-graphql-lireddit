import React from "react";
import { Wrapper } from "./styled";
import { Post } from "../../shared/Post";

type Props = {
  posts: Array<any>;
};

export const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <Wrapper>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          creatorUsername={post.creator.username}
          title={post.title}
          shortText={post.shortText}
          votesCount={post.votesCount}
          voteType={post.currentUserVoteType}
          commentsCount={post.commentsCount}
        />
      ))}
    </Wrapper>
  );
};
