import React from "react";
import { Menu } from "antd";
import Link from "gatsby-link";
const SubMenu = Menu.SubMenu;

class DocIndex extends React.Component {
  //props.allMarkdownRemark

  rootSubmenuKeys = ["iteration_I", "iteration_II", "iteration_III"];

  constructor(props) {
    super(props);

    let keys = this.props.location.pathname.split("/");

    if (keys.length <= 2) {
      this.state = {
        openKeys: [""]
      };
    } else {
      let theKey = keys[2];
      console.log(keys[2]);
      this.state = {
        openKeys: [theKey]
      };
    }
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  createListItem = keys => {
    const docs = this.props.allMarkdownRemark.edges;
    return docs
      .filter(e => e.node.fields.slug.includes(keys + "/"))
      .map(e => (
        <Menu.Item key={e.node.fields.slug}>
          <Link to={e.node.fields.slug}>{e.node.frontmatter.title}</Link>
        </Menu.Item>
      ));
  };

  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 256 }}
        selectedKeys={[this.props.location.pathname]}
      >
        <Menu.Item key={"/docs"}>
          <Link to="/docs">Get Start</Link>
        </Menu.Item>
        <SubMenu key="iteration_I" title={"Iteration I"}>
          {this.createListItem("iteration_I")}
        </SubMenu>
        <SubMenu key="iteration_II" title={"Iteration II"}>
          {this.createListItem("iteration_II")}
        </SubMenu>
        <SubMenu key="iteration_III" title={"Iteration III"}>
          {this.createListItem("iteration_III")}
        </SubMenu>
      </Menu>
    );
  }
}

export default DocIndex;
