import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";
import { parseCookies } from "nookies";
import Router from "next/router";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>DTravel website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

function redirectUser(ctx: any, location: any) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  let pageProps = {};
  const jwt = parseCookies(ctx).jwt;

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (!jwt) {
    if (ctx.pathname === "/profile") {
      redirectUser(ctx, "/login");
    }
  }

  return {
    pageProps,
  };
};

export default MyApp;
