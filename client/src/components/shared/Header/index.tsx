import React from "react";
import {
  Wrapper,
  Logo,
  SearchInput,
  OptionsWrapper,
  LoginLink,
  SignupLink,
} from "./styled";
import NextLink from "next/link";

const Header = () => {
  return (
    <Wrapper>
      <NextLink href="/">
        <Logo src={require("../../../images/Header/logo.png")} alt="LiReddit" />
      </NextLink>
      <SearchInput type="text" placeholder="Search..." />
      <OptionsWrapper>
        <NextLink href="/">
          <LoginLink>Log In</LoginLink>
        </NextLink>
        <NextLink href="/">
          <SignupLink> Sign Up</SignupLink>
        </NextLink>
      </OptionsWrapper>
    </Wrapper>
  );
};

export default Header;
