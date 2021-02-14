import React from "react";
import { Wrapper, Avatar, CreatePostInput } from "./styled";
import NextLink from "next/link";
import { useRouter } from "next/router";

export const CreatePost = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Avatar src={require("../../../images/user.svg")} />
      <NextLink href="/create_post">
        <CreatePostInput
          type="text"
          placeholder="Create post"
          readOnly
          onClick={() => router.push("/create_post")}
          onKeyPress={() => router.push("/create_post")}
        />
      </NextLink>
    </Wrapper>
  );
};
