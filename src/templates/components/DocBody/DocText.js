import React from "react";
import "../../github-markdown.css";


class DocText extends React.Component{


    render=()=>{
        //data.markdownRemark
        const post = this.props.markdownRemark;
        return (
          <div
            style={{
              fontSize: "1.4em",
              padding: "30px 40px",
              maxWidth: "900px",
            }}
          >
            <h1
              style={{
                fontSize: "80px",
                fontWeight: "bold",
                lineHeight: "90px",
                // margin: "30px -20px",
                padding: "60px 0 0"
                // textAlign: "center"
              }}
            >
              {post.frontmatter.title}
            </h1>
            <div
              className="markdown-body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        );
    }
}

export default DocText;