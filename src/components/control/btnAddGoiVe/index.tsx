import React,{useState} from "react";
import { Button, Checkbox, Dropdown, Input, Space, TimePicker } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

import BtnDatePicker from "../btnDate";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
interface BtnAddProps {
  selectedTicket: DataType | null;
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
    label: "Đang áp dụng",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "Tắt",
    key: "2",
    icon: <UserOutlined />,
  }

];
const menuProps = {
  items,
};
const PopupAddVe: React.FC<BtnAddProps> = ({selectedTicket, onClose }) => {
  const [selectedTinhTrang, setSelectedTinhTrang] = useState<string | null>('1');

  const handleFilter = () => {
    onClose();
  };
  // const menuItems = selectedTicket?.TinhTrang
  //   ? selectedTicket.TinhTrang.split(",").map((item, index) => ({
  //       label: item,
  //       key: index.toString(),
  //       icon: <UserOutlined />,
  //     }))
  //   : [];

  // const menuProps: MenuProps = {
  //   items: menuItems,
  // };
  return (
    <div>
      <h2>Thêm gói vé</h2>
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
          <Dropdown menu={menuProps} >
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
  );
};

export default PopupAddVe;
