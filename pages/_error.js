<<<<<<< HEAD
import Header from "./../components/layout/Header";
import Link from "next/link";

function Error({ statusCode }) {
    return (
    <div className="container">
        <Header/>
        <h3>Contenido no encontrado.</h3>
        <p>Volver al 
            <Link href="/">
                <a> inicio</a>
            </Link>
            .
        </p>
        <p className="small">
            {statusCode
            ? `Error: ${statusCode}`
            : 'An error occurred on client'}
        </p> 
    </div>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error
=======
import React from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";

const Error = ({ statusCode, t }) => (
  <p>
    {statusCode
      ? t("error.with-status", { statusCode })
      : t("error.without-status")}
  </p>
);

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null;
  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }
  return {
    namespacesRequired: ["common"],
    statusCode
  };
};

Error.defaultProps = {
  statusCode: null
};

Error.propTypes = {
  statusCode: PropTypes.number,
  t: PropTypes.func.isRequired
};

export default withTranslation("common")(Error);
>>>>>>> a5bc678bba29d64d69351fddcbbceb2316dc144f
