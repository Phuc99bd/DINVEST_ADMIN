import React from "react";
import { Breadcrumb } from "antd";

const BreadcumbComponent = ({ items }) => {
  return (
    <Breadcrumb>
      {items.map((i) => {
        return (
          <Breadcrumb.Item>
            {" "}
            <a href={i.href}> {i.name} </a>{" "}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadcumbComponent;
