import React from "react";
import { MailOutlined, BellOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const AccNotiMail = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "144px",
        height: "48px",
        justifyContent: "flex-end",
      }}
    >
      <MailOutlined style={{ fontSize: "24px", marginRight: "16px" }} />
      <BellOutlined style={{ fontSize: "24px", marginRight: "16px" }} />
      <Avatar src="path/to/avatar.jpg" />
    </div>
  );
};

export default AccNotiMail;
