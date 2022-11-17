import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <p>Je suis la page About.</p>
      <StaticImage alt="You" src="../images/ulys.png"></StaticImage>
    </Layout>
  );
};

export const Head = () => <title>About</title>;

export default AboutPage;
