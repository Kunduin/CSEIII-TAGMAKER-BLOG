import DocText from "./DocText";
import DocIndex from "./DocIndex";
import React from "react";

export default class DocBody extends React.Component {
  render = () => {
    return (
      <div>
        <div
          style={{
            position: "fixed",
            backgroundColor: "#F4F5F7",
            width: "32%",
            overflow: "auto",
            height: "100%"
          }}
        >
          <div
            style={{
              marginTop: "30%",
              float: "right",
            }}
          >
            <DocIndex
              allMarkdownRemark={this.props.allMarkdownRemark}
              location={this.props.location}
            />
          </div>
        </div>

        <div
          style={{
            marginLeft: "34%"
          }}
        >
        <div style={{marginLeft:"20px"}}>
          <DocText markdownRemark={this.props.markdownRemark} />
        </div>
        </div>
      </div>
    );
  };
}
