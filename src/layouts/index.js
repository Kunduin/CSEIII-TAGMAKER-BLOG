import React from "react";
import Link from "gatsby-link";
import "./style.css";
import { Layout } from "antd";
import { BackTop } from 'antd';
const { Header, Content, Footer } = Layout;

import HeaderNav from '../components/HeaderNav'


export default ({ children, data, location }) => (
  <Layout className="layout">

    <Content style={{ padding: "0 50px", marginTop: 64, marginRight: 0 }}>
      <div style={{ padding: 24, minHeight: 280 }}>
        {children()}
      </div>
      <BackTop />
    </Content>
    <Header style={{ position: "fixed", width: "100%" }}>
      <HeaderNav location={location}>
        {data.site.siteMetadata.title}
      </HeaderNav>
    </Header>
    <Footer style={{ textAlign: "center" }}>@Kunduin</Footer>
  </Layout>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
