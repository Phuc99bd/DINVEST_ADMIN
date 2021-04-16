import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
/* eslint-disable import/first */
import {
  PieChartOutlined,
  TeamOutlined,
  ToolOutlined,
  WalletOutlined,
  MoneyCollectOutlined,
  LoginOutlined,
  PropertySafetyOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ROUTE } from "commons/constants";

const SideBar = ({ collapsed, onCollapse }) => {
  const [defaultSelectedKey, setDefault] = useState();
  const { pathname } = window.location;
  useEffect(() => {
    setDefault([pathname]);
  }, []);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" selectedKeys={defaultSelectedKey} mode="inline">
        <Menu.Item key={ROUTE.DASHBOARD} icon={<PieChartOutlined />}>
          <Link to={ROUTE.DASHBOARD}> Dashboard </Link>
        </Menu.Item>
        <Menu.Item key={ROUTE.CUSTOMER} icon={<TeamOutlined />}>
          <Link to={ROUTE.CUSTOMER}> Manage customers </Link>
        </Menu.Item>
        <Menu.Item key={ROUTE.TRANSACTION} icon={<MoneyCollectOutlined />}>
          <Link to={ROUTE.TRANSACTION}> Manage transactions </Link>
        </Menu.Item>
        <Menu.Item key={ROUTE.ORDER} icon={<CarryOutOutlined />}>
          <Link to={ROUTE.ORDER}> Manage orders </Link>
        </Menu.Item>
        <Menu.Item key={ROUTE.PRODUCT} icon={<PropertySafetyOutlined />}>
          <Link to={ROUTE.PRODUCT}> Manage products </Link>
        </Menu.Item>
        <Menu.Item key={ROUTE.WALLETS} icon={<WalletOutlined />}>
          <Link to={ROUTE.WALLETS}> Manage wallets </Link>
        </Menu.Item>
        <Menu.Item key={ROUTE.SETTING} icon={<ToolOutlined />}>
          <Link to={ROUTE.SETTING}> Settings </Link>
        </Menu.Item>
        <Menu.Item key={ROUTE.LOGOUT} icon={<LoginOutlined />}>
          {/* <Link to={ROUTE.LOGOUT}>  */}
          Logout
          {/* </Link>  */}
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
