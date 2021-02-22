import { gql } from "@apollo/client";

export const postsQuery = gql`
  query Posts($cursor: Float, $limit: Float!) {
    posts(cursor: $cursor, limit: $limit) {
      id
      title
      text
      shortText
      createdAt
      votesCount
      currentUserVoteType
      commentsCount
      creator {
        id
        email
        username
      }
    }
  }
`;
