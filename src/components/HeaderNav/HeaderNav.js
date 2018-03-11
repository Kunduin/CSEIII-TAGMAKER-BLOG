import React from "react";
import { Menu } from "antd";
import Link from "gatsby-link";

class HeaderNav extends React.Component {
  state = {
    current: ""
  };

  url = {
    Blog: "blog",
    Docs: "docs"
  };

  componentDidMount = () => {
    this.setKeyValue(this.props);
  };

  componentWillReceiveProps = (nextProps) =>{
    this.setKeyValue(nextProps);
    console.log("click~~"+nextProps.location.pathname);
  }

  setKeyValue = (newProps) => {
    if (newProps.location.pathname.includes("/" + this.url.Blog)) {
      this.setState({ current: this.url.Blog });
    } else if (newProps.location.pathname.includes("/" + this.url.Docs)) {
      this.setState({ current: this.url.Docs });
    } else {
      this.setState({ current: "" });
    }
  };

  render() {
    const children = this.props.children;
    return (
      <div style={{width:"100%"}}>
        <Link to={`/`}>
          <div
            style={{
              width: "160px",
              height: "31px",
              fontSize: "16px",
              margin: "16px 24px 16px 50px",
              float: "left",
              color: "white",
              lineHeight: "31px",
              fontWeight: "bold"
            }}
          >
            {children}
          </div>
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[this.state.current]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key={this.url.Docs}>
            <Link to={`/`+this.url.Docs}>Docs</Link>
          </Menu.Item>
          <Menu.Item key={this.url.Blog}>
            <Link to={`/`+this.url.Blog}>Blog</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default HeaderNav;
