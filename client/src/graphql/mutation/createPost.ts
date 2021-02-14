import { gql } from "@apollo/client";

export const createPostMutation = gql`
  mutation CreatePost($title: String!, $text: String!) {
    createPost(title: $title, text: $text) {
      id
      title
      text
    }
  }
`;
