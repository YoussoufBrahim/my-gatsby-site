import React from "react";
import Layout from "../components/layout";

const HomePage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Je suis la page Home.</p>
    </Layout>
  );
};

export const Head = () => <title>Home</title>;

export default HomePage;
