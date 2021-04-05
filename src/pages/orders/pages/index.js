import BreadcumbComponent from "commons/components/breadcumb";
import React from "react";
import "./styles.scss";
import MUIDataTable from "mui-datatables";
import { Col, Row } from "antd";

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
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "company",
      label: "Company",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    {
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
    },
  ];

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
            data={data}
            columns={columns}
            options={options}
          />
        </Col>
      </Row>
    </div>
  );
};

export default OrderPage;
