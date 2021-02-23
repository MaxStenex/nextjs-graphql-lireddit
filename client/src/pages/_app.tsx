import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apollo";

import { Normalize } from "styled-normalize";
import { GlobalStyle } from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import "nprogress/nprogress.css";

import { AppProps } from "next/app";
import Head from "next/head";
import { configurateNProgress } from "../utils/nprogressConfig";
import useDarkMode from "use-dark-mode";
import { useEffect, useState } from "react";

configurateNProgress();

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);
  const apolloClient = useApollo(pageProps.initialApolloState);
  const darkMode = useDarkMode();
  const theme = darkMode.value ? darkTheme : lightTheme;
  useEffect(() => {
    setIsMounted(true);
    const isDarkModeEnabled = localStorage.getItem("isDarkModeEnabled");
    if (isDarkModeEnabled) {
      darkMode.enable();
    }
  }, []);

  return (
    <>
      <Head>
        <title>LiReddit</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <ApolloProvider client={apolloClient}>
          {isMounted && <Component {...pageProps} />}
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}
