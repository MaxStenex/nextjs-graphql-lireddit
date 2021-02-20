import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const CommentsList = styled.ul``;

export const Comment = styled.li`
  display: flex;
  padding-bottom: 25px;
`;

export const CommentMain = styled.div`
  margin-left: 7px;
`;

export const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
`;

export const Username = styled.span`
  cursor: pointer;
  margin-right: 5px;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  font-size: 12px;
`;

export const CommentText = styled.div`
  font-size: 15px;
  line-height: 1.3;
`;
