import { Col, Row } from "antd";
import BreadcumbComponent from "commons/components/breadcumb";
import React, { useEffect } from "react";
import "./index.scss";
import MUIDataTable from "mui-datatables";
import { useDispatch, useSelector } from "react-redux";
import { fetchListCustomer } from "./redux/actions";

const BreadCumbArr = [
  {
    href: "/",
    name: "Dashboard",
  },
  {
    href: "/customers",
    name: "Customers",
  },
];

const CustomerPage = () => {
  const dispatch = useDispatch();
  const fetchCustomers = () => {
    dispatch(fetchListCustomer({ limit: 1000 }));
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const columns = [
    {
      name: "first_name",
      label: "First Name",
    },
    {
      name: "last_name",
      label: "Last name",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "revenue_investment",
      label: "Revenue",
      options: {
        customBodyRender: (data) => {
          return `$${data}`;
        },
      },
    },
    {
      name: "gender",
      label: "Gender",
    },
    {
      name: "created_at",
      label: "Created at",
    },
    {
      name: "address",
      label: "Address",
    },
  ];

  const options = {
    filterType: "checkbox",
  };

  const { data } = useSelector((state) => state.customer);

  return (
    <Row>
      <Col xs={24}>
        <BreadcumbComponent items={BreadCumbArr} />
      </Col>
      <Col xs={24} className="customers">
        <MUIDataTable
          title={"List Customer"}
          data={data?.data || []}
          columns={columns}
          options={options}
        />
      </Col>
    </Row>
  );
};

export default CustomerPage;
