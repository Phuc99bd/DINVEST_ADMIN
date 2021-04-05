import React from "react";
import { Card, Col, Row } from "antd";
import {
  DollarCircleOutlined,
  FallOutlined,
  PropertySafetyOutlined,
  RiseOutlined,
  TransactionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./index.scss";
import BreadcumbComponent from "commons/components/breadcumb";
import TransactionLatest from "./components/transactions";

const BreadCumbArr = [
  {
    href: "/",
    name: "Dashboard",
  },
];

const Dashboard = () => {
  return (
    <div className="main-page">
      <Row gutter={16} style={{ padding: 8 }}>
        <Col span={24}>
          <BreadcumbComponent items={BreadCumbArr} />
        </Col>
        <Col span={8}>
          <Card className="card-main">
            <div className="main-dashboard">
              <div className="icon-dashboard">
                <UserOutlined />
              </div>
              <div className="value-by">Number of Users 23</div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="card-main">
            <div className="main-dashboard">
              <div className="icon-dashboard">
                <TransactionOutlined />
              </div>
              <div className="value-by">Number of transactions 23</div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="card-main">
            <div className="main-dashboard">
              <div className="icon-dashboard">
                <PropertySafetyOutlined />
              </div>
              <div className="value-by">Number of invest 23</div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="card-main">
            <div className="main-dashboard">
              <div className="icon-dashboard">
                <RiseOutlined />
              </div>
              <div className="value-by">Number of Data 23</div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="card-main">
            <div className="main-dashboard">
              <div className="icon-dashboard">
                <FallOutlined />
              </div>
              <div className="value-by">In: $23</div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="card-main">
            <div className="main-dashboard">
              <div className="icon-dashboard">
                <DollarCircleOutlined />
              </div>
              <div className="value-by">Out: $24</div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={24} className="transactions">
          <h2>Transaction latest</h2>
          <TransactionLatest />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
