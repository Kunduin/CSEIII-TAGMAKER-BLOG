import React from "react";
import "./github-markdown.css";
import BlogAuthorCard from "../components/BlogAuthorCard";
// import "./tmp.css";
// import "./typo.css"

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div
      style={{
        fontSize: "1.4em",
        padding: "30px 40px",

        maxWidth: "900px",
        margin: "0 auto"
      }}
    >
      <BlogAuthorCard author={data.markdownRemark.frontmatter.author} />
      <h1
        style={{
          fontSize: "80px",
          fontWeight: "bold",
          lineHeight:"90px",
          // margin: "30px -20px",
          padding: "60px 0 0",
          // textAlign: "center"
        }}
      >
        {post.frontmatter.title}
      </h1>
      <div style={{marginBottom:"50px"}}>
        on 
        <span
        style={{
          color:"#6b7ae0",
          textTransform:"uppercase",
          fontWeight:"bold"
        }}
        >{post.frontmatter.date}</span>
      </div>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author {
          id
          frontmatter {
            id
            name
            email
            avatar
          }
        }
        date(formatString: " MMMM DD,YYYY")
      }
    }
  }
`;
