import React from "react";
import { Wrapper, MainContentWrapper } from "./styled";
import { Post } from "../../shared/Post";
import { PostQuery } from "../../../generated/apollo";
import { Comments } from "../Comments";
import { CommentForm } from "../CommentForm";

type Props = {
  postQuery: PostQuery | undefined;
};

export const Main: React.FC<Props> = ({ postQuery }) => {
  return (
    <Wrapper>
      <MainContentWrapper>
        {postQuery && postQuery.post ? (
          <>
            <Post
              id={postQuery.post.id}
              creatorUsername={postQuery.post.creator.username}
              title={postQuery.post.title}
              text={postQuery.post.text}
              votesCount={postQuery.post.votesCount}
              voteType={postQuery.post.currentUserVoteType}
              isPostPage={true}
              commentsCount={postQuery.post.commentsCount}
            />
            <CommentForm postId={postQuery.post.id} />
            <Comments
              comments={postQuery.post.comments.map((comment) => ({
                id: comment.id,
                createdAt: parseInt(comment.createdAt),
                creatorUsername: comment.creator.username,
                text: comment.text,
              }))}
            />
          </>
        ) : (
          <div>Post with that id post found :(</div>
        )}
      </MainContentWrapper>
    </Wrapper>
  );
};
