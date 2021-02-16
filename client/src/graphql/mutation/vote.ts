import { gql } from "@apollo/client";

export const voteMutation = gql`
  mutation Vote($postId: Float!, $voteType: VoteTypes!) {
    vote(postId: $postId, voteType: $voteType)
  }
`;
