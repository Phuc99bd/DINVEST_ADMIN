import React from "react";
const { Card } = antd;

const CardComponent = ({ content, className, title }) => {
  return (
    <Card title={title} className={className} bordered={false}>
      {content}
    </Card>
  );
};

export default CardComponent;
