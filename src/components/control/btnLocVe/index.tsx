import React, { useState } from "react";
import { Button, Checkbox, Col, Row, Radio } from "antd";
import BtnDatePicker from "../btnDate";


interface PopupProps {
  visible: boolean;
  onClose: () => void;
  onFilter: (values: any) => void;
}
interface FilterValues {
  fromDate: Date | null;
  toDate: Date | null;
  status: string[];
  gate: string[];
}

const PopupLocVe: React.FC<PopupProps> = ({ visible, onClose, onFilter }) => {
  const [filterValues, setFilterValues] = useState<FilterValues>({
    fromDate: null,
    toDate: null,
    status: [],
    gate: [],
  });
  const handleFilter = () => {
    onFilter(filterValues);
    onClose();
  };
  const handleStatusChangeCheckbox = (checkedValues: any) => {
    const updatedStatus = checkedValues as string[];

    // Nếu checkbox có giá trị là 1 được chọn
    if (updatedStatus.includes("1")) {
      // Tắt (disable) các checkbox còn lại
      setFilterValues(prevValues => ({
        ...prevValues,
        status: updatedStatus,
      }));
    } else {
      // Nếu không, cập nhật giá trị của checkbox
      setFilterValues(prevValues => ({
        ...prevValues,
        status: updatedStatus,
      }));
    }
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
            <BtnDatePicker />
          </div>
          <div>
            <h4>Đến ngày</h4>
            <BtnDatePicker />
          </div>
        </div>
        <div>
          <h4 style={{ textAlign: "left" }}>Tình trạng sử dụng</h4>
          <div>
            <Radio.Group
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
          <div id="checkboxgroup">
            <Checkbox.Group
              style={{ width: "100%" }}
              onChange={handleStatusChangeCheckbox}
              value={filterValues.status}
            >
              <Row>
                <Col span={8}>
                  <Checkbox value="1">Tất cả</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="2"
                    disabled={filterValues.status.includes("1")}
                  >
                    Cổng 1
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="3"
                    disabled={filterValues.status.includes("1")}
                  >
                    Cổng 2
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="4"
                    disabled={filterValues.status.includes("1")}
                  >
                    Cổng 3
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="5"
                    disabled={filterValues.status.includes("1")}
                  >
                    Cổng 4
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox
                    value="6"
                    disabled={filterValues.status.includes("1")}
                  >
                    Cổng 5
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </div>
        </div>
        <Button
          style={{
            textAlign: "center",
            marginTop: "20px",
            width: "160px",
            height: "48px",
            border: "1px solid orange",
            color: "orange",
            gap: "10px",
          }}
          onClick={handleFilter}
        >
          Lọc
        </Button>
      </div>
    </div>
  );
};

export default PopupLocVe;
