import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const HomePage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Je suis la page Home.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
      />
    </Layout>
  );
};

export const Head = () => <title>Home</title>;

export default HomePage;
