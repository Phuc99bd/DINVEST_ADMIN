import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formatNumber } from "helpers/formatNumber";

const TransactionLatest = () => {
  const [dataSource, setDataSource] = useState({ data: [] }),
    [page, setPage] = useState(1);
  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => formatNumber(text),
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "CreatedAt",
      dataIndex: "created_at",
      key: "created_at",
    },
  ];

  const customPagination = {
    current: page,
    pageSize: 10,
    size: dataSource?.lastPage || 1,
    total: dataSource?.total || 0,
    onChange: (page) => {
      setPage(page);
    },
  };

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <Table
      dataSource={dataSource.data}
      columns={columns}
      pagination={customPagination}
    />
  );
};

export default TransactionLatest;
