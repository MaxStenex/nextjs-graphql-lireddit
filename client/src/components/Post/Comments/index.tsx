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

export const Comments = () => {
  return (
    <Wrapper>
      <CommentsList>
        <Comment>
          <UserAvatar alt="#" src={require("../../../images/user.svg")} />
          <CommentMain>
            <CommentHeader>
              <Username>MaximRozinkevich</Username> 7 hours ago
            </CommentHeader>
            <CommentText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam aut nemo
              esse excepturi dolore sed!
            </CommentText>
          </CommentMain>
        </Comment>
        <Comment>
          <UserAvatar alt="#" src={require("../../../images/user.svg")} />
          <CommentMain>
            <CommentHeader>
              <Username>MaximRozinkevich</Username> 7 hours ago
            </CommentHeader>
            <CommentText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam aut nemo
              esse excepturi dolore sed!
            </CommentText>
          </CommentMain>
        </Comment>
      </CommentsList>
    </Wrapper>
  );
};
