import RootLayout from "@/components/layout/rootLayout";
import "@/styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { Router } from "next/router";
import React from "react";

interface OwnProp {
  query: any
}

export default function App({ Component, pageProps, query }: AppProps & OwnProp) {

  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  pageProps = { ...pageProps, query }

  return (<>
    {
      loading ?
        <div style={{ padding: "5rem", fontSize: "2rem" }}>
          Loading...
        </div> :
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
    }
  </>
  );
}

App.getInitialProps = (appContext: AppContext) => {
  return { query: appContext.ctx.query };
}