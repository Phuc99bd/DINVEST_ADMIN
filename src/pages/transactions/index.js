import { Col, Row } from "antd";
import BreadcumbComponent from "commons/components/breadcumb";
import React, { useEffect } from "react";
import "./index.scss";
import MUIDataTable from "mui-datatables";
import { fetchListTransaction } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

const BreadCumbArr = [
  {
    href: "/",
    name: "Dashboard",
  },
  {
    href: "/transactions",
    name: "Transactions",
  },
];

const TransactionPage = () => {
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

  const dispatch = useDispatch();

  const fetchTransactions = () => {
    dispatch(fetchListTransaction({ pageSize: 1000 }));
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const { data } = useSelector((state) => state.transaction);

  const options = {
    filterType: "checkbox",
  };
  return (
    <Row>
      <Col xs={24}>
        <BreadcumbComponent items={BreadCumbArr} />
      </Col>
      <Col xs={24} className="transactions">
        <MUIDataTable
          title={"List transaction"}
          data={data?.data || []}
          columns={columns}
          options={options}
        />
      </Col>
    </Row>
  );
};

export default TransactionPage;
