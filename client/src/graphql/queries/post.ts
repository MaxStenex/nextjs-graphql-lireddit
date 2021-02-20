import { gql } from "@apollo/client";

export const postQuery = gql`
  query Post($postId: Float!) {
    post(postId: $postId) {
      id
      title
      text
      createdAt
      currentUserVoteType
      votesCount
      commentsCount
      creator {
        id
        username
      }
      comments {
        id
        text
        createdAt
        creator {
          username
        }
      }
    }
  }
`;
