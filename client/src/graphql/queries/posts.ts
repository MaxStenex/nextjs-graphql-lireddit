import { gql } from "@apollo/client";

export const postsQuery = gql`
  query Posts {
    posts {
      id
      title
      shortText
      createdAt
      votesCount
      currentUserVoteType
      commentsCount
      creator {
        username
      }
    }
  }
`;
