import React from "react";
import { Wrapper } from "./styled";

import { Posts } from "../Posts";
import { CreatePost } from "../CreatePost";

export const Main = () => {
  return (
    <Wrapper>
      <CreatePost />
      <Posts />
    </Wrapper>
  );
};
