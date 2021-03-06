import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  #nprogress .bar{
    height:4px;
  }

  html * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  body {
    background: ${({ theme }) => theme.body};
    line-height:1;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration:none;
    color:initial;

    &:focus,
    &:active {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
  }

  button {
    border:none;
    cursor: pointer;
    &:focus{
      outline:none;
    }
  }

  input {
    border:none;
    &:focus {
      outline: none;
    }
  }

  textarea{
    &:focus {
      outline: none;
    }
  }
`;
