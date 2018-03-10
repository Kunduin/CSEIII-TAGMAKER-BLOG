import React from "react";
import AuthorCard from "../AuthorCard";
import "./style.css";

class BlogCard extends React.Component {
  render() {
    return (
      <div className="blog-card">
        <div>
          <h1
            style={{
              marginTop:"10px",
              marginBottom:"13px",
              clear: "both",
              fontSize: "40px",
              fontWeight:"bold",
            }}
          >
            {this.props.title}
          </h1>
          <div
            style={{
              fontSize: "20px",
              marginBottom: "40px",
              textOverflow:"ellipsis",
              whiteSpace:"nowrap",
              overflow:"hidden",
              marginLeft:"2px",
              color:"#6d6d6d"
            }}
          >
            {this.props.excerpt}
          </div>
          {this.props.author.map(author => (
            <AuthorCard
              name={author.frontmatter.name}
              email={author.frontmatter.email}
              id={author.frontmatter.id}
              avatorPath={author.frontmatter.avatar}
              date={this.props.date}
            />
          ))}
          {/* <div style={{
              float:"left"
          }}>{this.props.date}</div> */}
        </div>
      </div>
    );
  }
}

export default BlogCard;
