import React, { useState } from "react";
import { Button, Checkbox, DatePicker, Radio } from "antd";



interface PopupProps {
  visible: boolean;
  onClose: () => void;
  onFilter: (values: any) => void;
}

const Popup: React.FC<PopupProps> = ({ visible, onClose,onFilter  }) => {

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
        }}
        id="popup-container"
      >
        <h3>Lọc vé</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h4>Từ ngày</h4>
            <DatePicker
              getPopupContainer={getPopupContainer}
           
            />
          </div>
          <div>
            <h4>Đến ngày</h4>
            <DatePicker
              getPopupContainer={getPopupContainer}
           
            />
          </div>
        </div>
        <div>
          <h4>Tình trạng sử dụng</h4>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Radio.Group>
              <Radio>Tất cả</Radio>
              <Radio>Đã sử dụng</Radio>
              <Radio>Chưa sử dụng</Radio>
              <Radio>Hết hạn</Radio>
            </Radio.Group>
          </div>
        </div>
        <div style={{ textAlign: "center", alignItems: "center" }}>
          <h4>Cổng check-in</h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
        <Checkbox.Group  >
        <Checkbox style={{ flexBasis: "33%" }}>Tất cả</Checkbox>
            <Checkbox style={{ flexBasis: "33%" }}>Cổng 1</Checkbox>
            <Checkbox style={{ flexBasis: "33%" }}>Cổng 2</Checkbox>
            <Checkbox style={{ flexBasis: "33%" }}>Cổng 3</Checkbox>
            <Checkbox style={{ flexBasis: "33%" }}>Cổng 4</Checkbox>
            <Checkbox style={{ flexBasis: "33%" }}>Cổng 5</Checkbox>
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

export default Popup;
