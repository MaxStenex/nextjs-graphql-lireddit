import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#DAE0E6",
  bg: {
    primary: "#0079D3",
    secondary: "#fff",
  },
  color: {
    primary: "#fff",
    secondary: "#0079D3",
  },
};

export type MyTheme = typeof lightTheme;

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    box-sizing: border-box;
    line-height:1;
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
  a {
    &:focus,
    &:active {
      outline: none;
    }
    &:visited {
      text-decoration: none;
    }
    &:hover {
      text-decoration: none;
      cursor: pointer;
    }
  }
  button {
    cursor: pointer;
  }
  input {
    border:none;
    &:focus {
      outline: none;
    }
  }
`;
