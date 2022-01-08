import React, { useEffect } from "react";
import Router from "next/router";
import ErrorPage from "next/error";

const withAuth = (Component: any) => {
  let user: any = null;

  if (typeof window !== "undefined") {
    // Perform localStorage action
    user = localStorage.getItem("user");
  }

  const Auth = () => {
    if (!user || user.length === 0) {
      return <ErrorPage statusCode={"404"} />;
    }

    return <Component {...user} />;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
