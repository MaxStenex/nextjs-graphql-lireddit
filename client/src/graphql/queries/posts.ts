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
      creator {
        username
      }
    }
  }
`;
