import React, { useState, useEffect } from "react";
import * as Cookies from "js-cookie";
import "./private.scss";
import Sidebar from "commons/components/sidebar";
import { Layout } from "antd";
import { Route } from "react-router";
import { ROUTE } from "commons/constants";
import Dashboard from "pages/dashboard";
import Header from "commons/components/header";
import FooterComponent from "commons/components/footer";

const PrivateLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  const { Content } = Layout;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar collapsed={collapsed} onCollapse={onCollapse} />
      <Layout>
        <Header collapsed={collapsed} onCollapse={onCollapse} />
        <Content className="content-main">
          <Route exact path={ROUTE.DASHBOARD} component={Dashboard} />
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;
