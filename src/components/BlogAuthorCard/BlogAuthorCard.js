import { Avatar } from "antd";
import React from "react";
import "./style.css";

class BlogAuthorCard extends React.Component {
  render() {
    return (
      <div>
        {this.props.author.map(author => (
          <div>
            <div class="avatar">
              <Avatar
                style={{
                  boxShadow: "0 0 10px #6b7ae061"
                }}
                size="large"
                src={author.frontmatter.avatar}
              />
            </div>
            <div
              style={{
                marginLeft:"25px",
                marginTop:"10px",
                display:"inline-block"
              }}
             >
              <div
                style={{
                  fontSize: "23px",
                  color: "#001529",
                  lineHeight: "40px",
                  letterSpacing: "2px"
                }}
               >
                {author.frontmatter.name}
                <div
                  style={{
                    marginLeft: "20px",
                    display: "inline-block",
                    fontSize: "18px",
                    color: "white",
                    backgroundColor: "#1890ff",
                    lineHeight: "30px",
                    letterSpacing: "0px",
                    padding: "0 10px",
                    borderRadius: "4px"
                  }}
                >
                  <span style={{ color: "white", backgroundColor: "#1890ff" }}>
                    {author.frontmatter.id}
                  </span>
                </div>

              </div>
              <div
                  style={{
                    color: "rgba(0, 0, 0, 0.38)",
                    lineHeight: "40px",
                    textTransform: "uppercase",
                    // padding: "0 10px"
                  }}
                >
                  {author.frontmatter.email}
                </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default BlogAuthorCard;
