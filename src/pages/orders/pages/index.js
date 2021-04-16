import BreadcumbComponent from "commons/components/breadcumb";
import React, { useEffect } from "react";
import "./styles.scss";
import MUIDataTable from "mui-datatables";
import { Col, Row } from "antd";
import { fetchListOrder } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const BreadCumbArr = [
  {
    href: "/",
    name: "Dashboard",
  },
  {
    href: "/orders",
    name: "Orders",
  },
];
const OrderPage = () => {
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
      name: "order_code",
      label: "Code",
    },
    {
      name: "total_pay",
      label: "Total pay",
    },
    {
      name: "detailOrders",
      label: "Name invest",
      options: {
        customBodyRender: (data) => {
          return data[0]?.name;
        },
      },
    },
    {
      name: "created_at",
      label: "Created at",
    },
  ];

  const dispatch = useDispatch();

  const fetchOrders = () => {
    dispatch(fetchListOrder({ limit: 1000 }));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const { data } = useSelector((state) => state.order);

  const options = {
    filterType: "checkbox",
  };
  return (
    <div>
      <BreadcumbComponent items={BreadCumbArr} />
      {/* Order */}
      <Row>
        <Col xs={24} className="customers">
          <MUIDataTable
            title={"List order"}
            data={data?.data || []}
            columns={columns}
            options={options}
          />
        </Col>
      </Row>
    </div>
  );
};

export default OrderPage;
