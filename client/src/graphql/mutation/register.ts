import { gql } from "@apollo/client";

export const registerMutation = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      id
      email
      username
    }
  }
`;
