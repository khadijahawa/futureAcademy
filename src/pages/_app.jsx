import React from "react";
import { useRouter } from "next/router";

import { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps, router }) => {
  const { locale } = useRouter();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
