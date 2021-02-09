import React from "react";
import {
  Wrapper,
  Logo,
  SearchInput,
  OptionsWrapper,
  LoginButton,
  SignupButton,
} from "./styled";
import NextLink from "next/link";

export const Header = () => {
  return (
    <Wrapper>
      <NextLink href="/">
        <Logo src={require("../../../images/Header/logo.png")} alt="LiReddit" />
      </NextLink>
      <SearchInput type="text" placeholder="Search..." />
      <OptionsWrapper>
        <NextLink href="/login">
          <LoginButton role="a">Log In</LoginButton>
        </NextLink>
        <NextLink href="/register">
          <SignupButton role="a"> Sign Up</SignupButton>
        </NextLink>
      </OptionsWrapper>
    </Wrapper>
  );
};
