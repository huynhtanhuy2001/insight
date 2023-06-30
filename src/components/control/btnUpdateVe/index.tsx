import React from "react";
import { Button, Checkbox, Dropdown, Input, Space, TimePicker } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

import BtnDatePicker from "../btnDate";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
interface BtnUpdateProps {
  selectedTicket: DataType | null;
  record: DataType | null;
  onClose: () => void;

}

interface DataType {
  id: number;
  PackageCode: string;
  PackageName: string;
  ApplicableDate: string;
  ExpirationDate: string;
  Fare: string;
  TinhTrang: string;
}

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items,
};
const PopupUpdate: React.FC<BtnUpdateProps> = ({ record, onClose }) => {
  const handleFilter = () => {
    onClose();
  };
  return (
    <div>
      {record ? (
        <div>
          <h2>Cập nhật gói vé</h2>
          <h4>Tên gói vé *</h4>
          <Input
            style={{ width: "367px" }}
            placeholder="Nhập tên gói vé"
            // value={record.PackageName}
          />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ display: "block", width: "100%" }}>
              <h4>Ngày áp dụng</h4>
              <BtnDatePicker />
              <TimePicker
                style={{
                  border: "1px solid orange",
                  marginLeft: "10px",
                  width: "137px",
                }}
                defaultValue={dayjs("", "HH:mm:ss")}
              />
            </div>
            <div style={{ display: "block", width: "100%" }}>
              <h4>Ngày hết hạn</h4>
              <BtnDatePicker />
              <TimePicker
                style={{
                  border: "1px solid orange",
                  marginLeft: "10px",
                  width: "137px",
                }}
                defaultValue={dayjs("", "HH:mm:ss")}
              />
            </div>
          </div>
          <div>
            <h3>Giá vé áp dụng</h3>
            <div style={{ display: "flex" }}>
              <Checkbox>Vé lẻ(vnđ/vé) với giá</Checkbox>
              <Input disabled style={{ width: "148px" }} placeholder="Giá vé" />
              /vé
            </div>
            <div style={{ display: "flex", paddingTop: "20px" }}>
              <Checkbox>Combo vé với giá</Checkbox>
              <Input disabled style={{ width: "148px" }} placeholder="Giá vé" />
              /
              <Input disabled style={{ width: "72px" }} placeholder="Giá vé" />
              vé
            </div>
            <div>
              <h4>Tình trạng</h4>
              <Dropdown menu={menuProps}>
                <Button>
                  <Space>
                    Button
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </div>
          </div>

          <p>* là thông tin bắt buộc</p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button
              style={{
                textAlign: "center",
                height: "48px",
                width: "127px",

                border: "1px solid orange",
                color: "orange",
                gap: "10px",
              }}
              onClick={handleFilter}
            >
              Hủy
            </Button>
            <Button
              style={{
                textAlign: "center",
                height: "48px",
                width: "127px",
                backgroundColor: "orange",
                border: "1px solid orange",
                color: "white",
                gap: "10px",
              }}
            >
              Lưu
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default PopupUpdate;
