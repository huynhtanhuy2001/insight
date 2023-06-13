import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchComponent = () => {
  const handleSearch = (value: string) => {
    console.log("Search value:", value);
    // Xử lý tìm kiếm
  };

  return (
    <Input.Search
      style={{ width: "300px" }}
      placeholder="Nhập từ khóa tìm kiếm"
      enterButton={<SearchOutlined />}
      onSearch={handleSearch}
    />
  );
};

export default SearchComponent;
