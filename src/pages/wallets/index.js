import { Col, Row } from "antd";
import BreadcumbComponent from "commons/components/breadcumb";
import React, { useEffect } from "react";
import "./index.scss";
import MUIDataTable from "mui-datatables";
import { fetchListWallet } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const BreadCumbArr = [
  {
    href: "/",
    name: "Dashboard",
  },
  {
    href: "/wallets",
    name: "Wallets",
  },
];

const WalletPage = () => {
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
      name: "address",
      label: "Address network",
    },
    {
      name: "label",
      label: "name",
    },
    {
      name: "network",
      label: "Network",
    },
    {
      name: "amount",
      label: "Amount",
      options: {
        customBodyRender: (data) => {
          return `$${data}`;
        },
      },
    },
    {
      name: "created_at",
      label: "Create at",
      options: {
        customBodyRender: (data) => {
          return moment(data).format("YYYY-MM-DD HH:mm:ss");
        },
      },
    },
  ];

  const dispatch = useDispatch();

  const fetWallets = () => {
    dispatch(fetchListWallet({ limit: 1000 }));
  };

  useEffect(() => {
    fetWallets();
  }, []);

  const { data } = useSelector((state) => state.wallet);
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
          title={"List Wallet"}
          data={data?.data || []}
          columns={columns}
          options={options}
        />
      </Col>
    </Row>
  );
};

export default WalletPage;
