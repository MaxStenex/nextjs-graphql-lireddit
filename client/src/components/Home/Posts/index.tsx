import React from "react";
import { Wrapper } from "./styled";
import { Post } from "../Post";

export const Posts = () => {
  return (
    <Wrapper>
      <Post
        creator="Maxim"
        title="Ant Design Library GONE!?"
        shortText="Does anyone know what happend to ant design? Their entire site and github repo
            are gone. 404. Im freaking out"
      />
    </Wrapper>
  );
};
