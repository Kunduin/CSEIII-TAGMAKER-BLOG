import { Avatar } from "antd";
import React from "react";

class Author extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            float: "left",
            marginRight: "10px"
          }}
        >
          <Avatar style={{
            border:"1px solid #2618ff33"
          }} size="default" src={this.props.avatorPath} />
        </div>
        <div>
          <div
            style={{
              fontSize: "17px",
              color: "#001529",
              lineHeight: "40px",
              letterSpacing: "2px"
            }}
          >
            {this.props.name}
            <div
              style={{
                marginLeft: "20px",
                display: "inline-block",
                fontSize: "13px",
                color: "white",
                backgroundColor: "#1890ff",
                lineHeight: "25px",
                letterSpacing: "0px",
                padding: "0 10px",
                borderRadius: "4px"
              }}
            >
              <span style={{ color: "white", backgroundColor: "#1890ff" }}>
                {this.props.id}
              </span>

            </div>
            <div
                style={{
                  float:"right",
                  color: "rgba(0, 0, 0, 0.38)",
                  lineHeight:"40px",
                  textTransform:"uppercase",
                  padding:"0 10px"
                }}
              >
                {this.props.date}
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Author;
