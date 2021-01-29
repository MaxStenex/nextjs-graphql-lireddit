import { gql } from "@apollo/client";

export const helloQuery = gql`
  query Hello {
    helloWorld
  }
`;
