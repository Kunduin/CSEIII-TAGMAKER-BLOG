import React from "react";
import BlogCard from "../../components/BlogCard";
import Link from "gatsby-link";

export default ({ data }) => (
  <div>
    <h1
      style={{
        textAlign: "center",
        fontSize: "100px",
        padding: "0 30px",
        width: "400px",
        margin: "40px auto",
        border: "14px solid black"
      }}
    >
      BLOG
    </h1>
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto"
      }}
    >
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div
          key={node.id}
          style={{
            marginTop: "10px"
          }}
        >
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
            <BlogCard
              author={node.frontmatter.author}
              title={node.frontmatter.title}
              excerpt={node.excerpt}
              date={node.frontmatter.date}
            />
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author {
              id
              frontmatter {
                name
                email
                id
                avatar
              }
            }
            date(formatString: " MMMM DD,YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
