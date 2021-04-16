import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "./redux/actions";
import { fetchListTransaction } from "pages/transactions/redux/actions";
import MUIDataTable from "mui-datatables";

const BreadCumbArr = [
  {
    href: "/",
    name: "Dashboard",
  },
];

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getDashboard();
  }, []);

  const getDashboard = () => {
    dispatch(fetchDashboard());
  };

  const columns = [
    {
      name: "customer",
      label: "Full name",
      options: {
        customBodyRender: (data) => {
          return data.full_name;
        },
      },
    },
    {
      name: "code",
      label: "Hash",
    },
    {
      name: "amount",
      label: "Amount",
    },
    {
      name: "type",
      label: "Type",
    },
    {
      name: "status",
      label: "Status",
    },
    {
      name: "created_at",
      label: "Create at",
    },
  ];

  const fetchTransactions = () => {
    dispatch(fetchListTransaction({ pageSize: 1000 }));
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const transaction = useSelector((state) => state.transaction);

  const options = {
    filterType: "checkbox",
  };
  const { data } = useSelector((state) => state.dashboard);

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
              <div className="value-by">
                Number of Users {data?.countCustomer}
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="card-main">
            <div className="main-dashboard">
              <div className="icon-dashboard">
                <TransactionOutlined />
              </div>
              <div className="value-by">
                Number of transactions {data?.countTrans}
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="card-main">
            <div className="main-dashboard">
              <div className="icon-dashboard">
                <PropertySafetyOutlined />
              </div>
              <div className="value-by">Total sale {data?.totalSale}</div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="card-main">
            <div className="main-dashboard">
              <div className="icon-dashboard">
                <RiseOutlined />
              </div>
              <div className="value-by">
                Total commission ${data?.totalCommission?.toFixed(2)}{" "}
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="card-main">
            <div className="main-dashboard">
              <div className="icon-dashboard">
                <FallOutlined />
              </div>
              <div className="value-by">
                Total Deposit: ${data?.totalDeposit}
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="card-main">
            <div className="main-dashboard">
              <div className="icon-dashboard">
                <DollarCircleOutlined />
              </div>
              <div className="value-by">
                Total Withdraw: ${data?.totalWithdraw}
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={24} className="transactions">
          <h2>Transaction latest</h2>
          <MUIDataTable
            title={""}
            data={transaction?.data?.data || []}
            columns={columns}
            options={options}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
