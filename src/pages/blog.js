import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Ma Blog Posts">
      <p>Je suis la page Blog.</p>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};
export const data = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;
export const Head = () => <Seo title="Blog" />;

export default BlogPage;
