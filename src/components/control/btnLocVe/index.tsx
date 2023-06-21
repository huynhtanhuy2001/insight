import React, { useState } from "react";
import { Button, Checkbox, DatePicker, Radio } from "antd";

interface PopupProps {
  visible: boolean;
  onClose: () => void;
  onFilter: (values: any) => void;
}
const options = [
  { label: "Tất cả", value: 1 },
  { label: "Đã sử dụng", value: 2 },
  { label: "Chưa sử dụng", value: 3 },
  { label: "Hết hạn", value: 4 },
];
const PopupLocVe: React.FC<PopupProps> = ({ visible, onClose, onFilter }) => {
  const getPopupContainer = (node: HTMLElement) => node;
  const [filterValues, setFilterValues] = useState({
    fromDate: null,
    toDate: null,
    status: "",
    gate: [],
  });
  const handleFilter = () => {
    onFilter(filterValues);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: visible ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "24px 29px 20px 32px",
          width: "634px",
          height: "454px",
          borderRadius: "16px",
          alignItems: "center",
          textAlign: "center",
        }}
        id="popup-container"
      >
        <h3>Lọc vé</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h4>Từ ngày</h4>
            <DatePicker getPopupContainer={getPopupContainer} />
          </div>
          <div>
            <h4>Đến ngày</h4>
            <DatePicker getPopupContainer={getPopupContainer} />
          </div>
        </div>
        <div>
          <h4 style={{ textAlign: "left" }}>Tình trạng sử dụng</h4>
          <div>
            <Radio.Group
              options={options}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Radio value={1}>Tất cả</Radio>
              <Radio value={2}>Đã sử dụng</Radio>
              <Radio value={3}>Chưa sử dụng</Radio>
              <Radio value={4}>Hết hạn</Radio>
            </Radio.Group>
          </div>
        </div>
        <div style={{ textAlign: "center", alignItems: "center" }}>
          <h4 style={{ textAlign: "left" }}>Cổng check-in</h4>
          <div>
            <Checkbox.Group
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <Checkbox style={{ flexBasis: "25%" }}>Tất cả</Checkbox>
              <Checkbox style={{ flexBasis: "25%" }}>Cổng 1</Checkbox>
              <Checkbox style={{ flexBasis: "25%" }}>Cổng 2</Checkbox>
              <Checkbox style={{ flexBasis: "25%" }}>Cổng 3</Checkbox>
              <Checkbox style={{ flexBasis: "25%" }}>Cổng 4</Checkbox>
              <Checkbox style={{ flexBasis: "25%" }}>Cổng 5</Checkbox>
            </Checkbox.Group>
          </div>
        </div>
        <Button style={{ textAlign: "center" }} onClick={handleFilter}>
          Lọc
        </Button>
      </div>
    </div>
  );
};

export default PopupLocVe;
