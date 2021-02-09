import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apollo";
import { Normalize } from "styled-normalize";

import { GlobalStyle } from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ThemeProvider theme={lightTheme}>
      <Normalize />
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}
