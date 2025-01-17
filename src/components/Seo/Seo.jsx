import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title }) => {
  return (
    <Helmet>
      <title>Codespere - IT Solution &#38; Software Solutions - {title}</title>
    </Helmet>
  );
};

export default SEO;
