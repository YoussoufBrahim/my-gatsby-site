import React from "react";
import { Link } from "gatsby";
import { container } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        <p>{children}</p>
      </main>
    </div>
  );
};

export default Layout;
