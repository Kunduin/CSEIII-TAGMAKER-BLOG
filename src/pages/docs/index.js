import React from "react";
import DocBody from "../../templates/components/DocBody";

export default ({ data,location }) => {
  const post = data.markdownRemark;
  return (
    <DocBody
      markdownRemark={data.markdownRemark}
      allMarkdownRemark={data.allMarkdownRemark}
      location={location}
    />
    //   <div
    //     style={{
    //       fontSize: "1.4em",
    //       padding: "30px 40px",
    //       maxWidth: "900px",
    //       margin: "0 auto"
    //     }}
    //   >
    //     <h1
    //       style={{
    //         fontSize: "80px",
    //         fontWeight: "bold",
    //         lineHeight: "90px",
    //         // margin: "30px -20px",
    //         padding: "60px 0 0"
    //         // textAlign: "center"
    //       }}
    //     >
    //       {post.frontmatter.title}
    //     </h1>
    //     <div
    //       className="markdown-body"
    //       dangerouslySetInnerHTML={{ __html: post.html }}
    //     />
    //   </div>
  );
};

export const query = graphql`
  query MainDocsQuery {
    markdownRemark(id: { regex: "/get_start/" }) {
      html
      id
      frontmatter {
        title
      }
    }
    allMarkdownRemark(filter: { id: { regex: "/docs/" } }) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
