import { Col, Row } from "antd";
import BreadcumbComponent from "commons/components/breadcumb";
import moment from "moment";
import MUIDataTable from "mui-datatables";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListProduct } from "./redux/actions";
import "./styles.scss";

const BreadCumbArr = [
  {
    href: "/",
    name: "Dashboard",
  },
  {
    href: "/products",
    name: "Products",
  },
];
const ProductPage = () => {
  const columns = [
    {
      name: "title",
      label: "Title",
    },
    {
      name: "category",
      label: "Category name",
      options: {
        customBodyRender: (data) => {
          return data.title;
        },
      },
    },
    {
      name: "price",
      label: "Price",
      options: {
        customBodyRender: (data) => {
          return `$${data}`;
        },
      },
    },
    {
      name: "rate",
      label: "Rate",
    },
    {
      name: "stock_rate",
      label: "Stock rate",
    },
    {
      name: "max_rate",
      label: "Max rate",
      options: {
        customBodyRender: (data) => {
          return `${data}%`;
        },
      },
    },
    {
      name: "created_at",
      label: "Created at",
      options: {
        customBodyRender: (data) => {
          return moment(data).format("YYYY-MM-DD HH:mm:ss");
        },
      },
    },
  ];

  const dispatch = useDispatch();

  const fetchProducts = () => {
    dispatch(fetchListProduct({ limit: 1000 }));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const { data } = useSelector((state) => state.product);

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
            title={"List Product"}
            data={data || []}
            columns={columns}
            options={options}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;
