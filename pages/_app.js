import React from "react";
import App from "next/app";
import Layout from "../components/layout/Layout";

import globalStyles from "../styles/global.js";

class SrieApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Component {...pageProps} />
        <style jsx global>
          {globalStyles}
        </style>
      </Layout>
    );
  }
}

export default SrieApp;
