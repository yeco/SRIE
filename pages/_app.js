import React from "react";
import App from "next/app";
import Layout from "../components/layout/Layout";
<<<<<<< HEAD
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
=======
import { appWithTranslation } from "../i18n";
>>>>>>> a5bc678bba29d64d69351fddcbbceb2316dc144f

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

export default appWithTranslation(SrieApp);
