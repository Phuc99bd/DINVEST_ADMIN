import BreadcumbComponent from "commons/components/breadcumb";
import React from "react";
import { AllOrder } from "../components/all";
import { NewestOrder } from "../components/newest";
import "./styles.scss";
const BreadCumbArr = [
  {
    href: "/orders",
    name: "Order",
  },
  // {
  //   href: "/orders/details",
  //   name: "Details",
  // },
];
const OrderPage = () => {
  return (
    <div>
      <BreadcumbComponent items={BreadCumbArr} />
      {/* Order */}
      <div className="order-content">
        <NewestOrder />
        <AllOrder />
      </div>
    </div>
  );
};

export default OrderPage;
