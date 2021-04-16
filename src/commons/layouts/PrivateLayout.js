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
import OrderPage from "pages/orders/pages";
import ProductPage from "pages/products";
import WalletPage from "pages/wallets";
import TransactionPage from "pages/transactions";
import SettingPage from "pages/settings";
import CustomerPage from "pages/customers";

const PrivateLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

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
          <Route exact path={ROUTE.ORDER} component={OrderPage} />
          <Route exact path={ROUTE.PRODUCT} component={ProductPage} />
          <Route exact path={ROUTE.WALLETS} component={WalletPage} />
          <Route exact path={ROUTE.TRANSACTION} component={TransactionPage} />
          <Route exact path={ROUTE.SETTING} component={SettingPage} />
          <Route exact path={ROUTE.CUSTOMER} component={CustomerPage} />
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;
