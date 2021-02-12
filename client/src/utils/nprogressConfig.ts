import NProgress from "nprogress";
import Router from "next/router";

export const configurateNProgress = () => {
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());
  NProgress.configure({ showSpinner: false });
};
