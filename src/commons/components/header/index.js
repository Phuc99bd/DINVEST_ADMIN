import React from "react";
import { Layout } from "antd";
const { Header } = Layout;
/* eslint-disable import/first */
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./styles.scss";

const HeaderComponent = ({ collapsed, onCollapse }) => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div className="header-collapsed">
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: onCollapse,
          }
        )}
      </div>
    </Header>
  );
};

export default HeaderComponent;
