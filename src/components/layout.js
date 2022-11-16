import React from "react";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
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
