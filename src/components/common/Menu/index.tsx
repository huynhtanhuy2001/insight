import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import {
  SettingOutlined,
  HomeOutlined,
  BarsOutlined,
  ContainerOutlined,
  LaptopOutlined,
  BoxPlotOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Logo from "../../../assets/image/logo.svg";

import "./styles.css";

const { SubMenu } = Menu;

const SiderMenu = () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setSelectedKeys([currentPath]);
  }, []);

  const handleMenuClick = (e: any) => {
    setSelectedKeys([e.key]);
  };

  return (
    <div className="MainMenu">
      <img src={Logo} alt="Logo" />
      <div style={{ width: 252, marginTop: "59px" }}>
        <Menu
          mode="inline"
          selectedKeys={selectedKeys}
          onClick={handleMenuClick}
        >
          <Menu.Item key="/home" icon={<HomeOutlined />}>
            <Link to="/home">Trang chủ</Link>
          </Menu.Item>
          <Menu.Item key="/ticketmanagement" icon={<BoxPlotOutlined />}>
            <Link to="/ticketmanagement">Quản lý vé</Link>
          </Menu.Item>
          <Menu.Item key="/ticketcheck" icon={<ContainerOutlined />}>
            <Link to="/ticketcheck">Đối soát vé</Link>
          </Menu.Item>
          <Menu.Item key="/events" icon={<BarsOutlined />}>
            <Link to="/events">Danh sách sự kiện</Link>
          </Menu.Item>
          <Menu.Item key="/equipment" icon={<LaptopOutlined />}>
            <Link to="/equipment">Quản lý thiết bị</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<SettingOutlined />} title="Cài đặt">
            <Menu.Item key="/servicepack">
              <Link to="/servicepack">Gói dịch vụ</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>

      <p
        style={{
          position: "absolute",
          bottom: "0",
          fontSize: "14px",
          lineHeight: "22px",
          fontWeight: "400",
          fontStyle: "normal",
          marginTop: "auto",
          marginBottom: "0px",
        }}
      >
        Copyright &copy; 2020 Alta Software{" "}
      </p>
    </div>
  );
};

export default SiderMenu;
