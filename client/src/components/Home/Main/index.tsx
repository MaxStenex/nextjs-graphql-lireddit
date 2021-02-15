import React from "react";
import { Wrapper } from "./styled";

import { Posts } from "../Posts";
import { CreatePost } from "../CreatePost";
import { PostsQuery } from "../../../generated/apollo";

type Props = {
  postsQuery: PostsQuery;
};

export const Main: React.FC<Props> = ({ postsQuery }) => {
  return (
    <Wrapper>
      <CreatePost />
      <Posts postsQuery={postsQuery} />
    </Wrapper>
  );
};
