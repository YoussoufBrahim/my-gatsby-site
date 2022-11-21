import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Ma Blog Posts">
      <p>Je suis la page Blog.</p>

      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>date : {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <ul>
            <li>Name file : {node.parent.name}</li>
          </ul>
        </article>
      ))}
    </Layout>
  );
};
export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          date(formatString: "MMM D, YYYY")
          title
          slug
        }
        id
        excerpt
        parent {
          ... on File {
            name
            id
          }
        }
      }
    }
  }
`;
export const Head = () => <Seo title="Blog" />;

export default BlogPage;
