import React, { useState } from "react";
import { Menu } from "antd";
import {
  SettingOutlined,
  HomeOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import Logo from "../../../assets/image/logo.svg";

import "./styles.css";
import SvgVector from "../../../assets/icon/Vector";
import SvgDoisoatve from "../../../assets/icon/Doisoatve";
import SvgQuanlythietbi from "../../../assets/icon/Quanlythietbi";

const { SubMenu } = Menu;
const SiderMenu = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const handleMenuClick = (e: any) => {
    setSelectedKeys([e.key]);
    setIsClicked(!isClicked);
  };
  return (
    <div className="MainMenu">
      <img src={Logo} alt="Logo" />
      <div style={{ width: 252, marginTop: "59px" }}>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          selectedKeys={selectedKeys}
          onClick={handleMenuClick}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Trang chủ
          </Menu.Item>
          <Menu.Item key="2" icon={<SvgVector />}>
            Quản lý vé
          </Menu.Item>
          <Menu.Item key="3" icon={<SvgDoisoatve />}>
            Đối soát vé
          </Menu.Item>
          <Menu.Item key="4" icon={<BarsOutlined />}>
            Danh sách sự kiện
          </Menu.Item>
          <Menu.Item key="5" icon={<SvgQuanlythietbi />}>
            Quản lý thiết bị
          </Menu.Item>
          <SubMenu key="sub1" icon={<SettingOutlined />} title="Cài đặt">
            <Menu.Item
              key="6"
              style={{
                backgroundColor: selectedKeys.includes("6") ? "#e5e5e5" : "",
                fontWeight: selectedKeys.includes("6") ? 900 : "normal",
                color: selectedKeys.includes("6") ? "black" : "",
              }}
            >
              Gói dịch vụ
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <p style={{ position: "absolute", bottom: "0" }}>
        Copyright &copy; 2020 Alta Software{" "}
      </p>
    </div>
  );
};

export default SiderMenu;
