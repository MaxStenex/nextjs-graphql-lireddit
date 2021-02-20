import React from "react";
import {
  Wrapper,
  CommentsList,
  Comment,
  CommentHeader,
  CommentText,
  UserAvatar,
  CommentMain,
  Username,
} from "./styled";

type CommentType = {
  id: number;
  text: string;
  createdAt: number;
  creatorUsername: string;
};

type Props = {
  comments: Array<CommentType>;
};

export const Comments: React.FC<Props> = ({ comments }) => {
  return (
    <Wrapper>
      {comments.length > 0 && (
        <CommentsList>
          {comments.map((comment) => (
            <Comment key={comment.id}>
              <UserAvatar alt="#" src={require("../../../images/user.svg")} />
              <CommentMain>
                <CommentHeader>
                  <Username>{comment.creatorUsername}</Username> 7 hours ago
                </CommentHeader>
                <CommentText>{comment.text}</CommentText>
              </CommentMain>
            </Comment>
          ))}
        </CommentsList>
      )}
    </Wrapper>
  );
};
