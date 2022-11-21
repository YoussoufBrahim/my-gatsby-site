import React from "react";
import { siteTitle } from "./layout.module.css";
const Header = ({ data }) => {
  return (
    <header className={siteTitle}>
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  );
};

export default Header;
