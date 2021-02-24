import React from "react";
import { Wrapper, Logo, OptionsWrapper, LoginButton, SignupButton } from "./styled";
import NextLink from "next/link";
import { Options } from "./Options";
import { useMeQuery } from "../../../generated/apollo";

export const Header = () => {
  const { data } = useMeQuery();
  const username = data?.me.username || null;

  return (
    <Wrapper>
      <NextLink href="/">
        <Logo src={require("../../../images/Header/logo.png")} alt="LiReddit" />
      </NextLink>
      <OptionsWrapper>
        {!data?.me && (
          <>
            <NextLink href="/login">
              <LoginButton role="a">Log In</LoginButton>
            </NextLink>
            <NextLink href="/register">
              <SignupButton role="a"> Sign Up</SignupButton>
            </NextLink>
          </>
        )}
        <Options username={username} />
      </OptionsWrapper>
    </Wrapper>
  );
};
