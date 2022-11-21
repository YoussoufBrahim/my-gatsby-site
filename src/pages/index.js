import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const HomePage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Je suis la page Home.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/image-attractive.jpg"
      />
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default HomePage;
