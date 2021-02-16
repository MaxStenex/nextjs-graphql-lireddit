import { useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from "@apollo/client";
import { isBrowser } from "./isBrowser";
import { IncomingMessage, ServerResponse } from "http";
import cookie from "cookie";

type ContextType = {
  req: IncomingMessage;
  res: ServerResponse;
};

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

if (!isBrowser) {
  global.fetch = fetch;
}

function createApolloClient(context?: ContextType) {
  const authCookie = cookie.parse(context?.req.headers.cookie || "").sid;
  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include",
    headers: {
      cookie: authCookie ? `sid=${authCookie}` : "",
    },
  });

  return new ApolloClient({
    ssrMode: !isBrowser,
    link: httpLink,
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: any = null, context?: ContextType) {
  const _apolloClient = apolloClient ?? createApolloClient(context);

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
