import { gql } from "@apollo/client";

export const createCommentMutation = gql`
  mutation CreateComment($text: String!, $postId: Float!) {
    createComment(text: $text, postId: $postId) {
      id
      text
      createdAt
    }
  }
`;
