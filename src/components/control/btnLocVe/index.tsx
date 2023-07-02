import React, { useState } from "react";
import { Button, Checkbox, Col, Row, Radio } from "antd";
import BtnDatePicker from "../btnDate";

interface PopupProps {
  visible: boolean;
  onClose: () => void;
  onFilter: (values: any) => void;
  tableData: any[];
}
interface FilterValues {
  fromDate: Date | null;
  toDate: Date | null;
  status: string[];
  gate: string[];
}

const PopupLocVe: React.FC<PopupProps> = ({
  visible,
  onClose,
  onFilter,
  tableData,
}) => {
  const [filterValues, setFilterValues] = useState<FilterValues>({
    fromDate: null,
    toDate: null,
    status: [],
    gate: [],
  });

  const handleStatusChangeCheckbox = (checkedValues: any) => {
    const updatedStatus = checkedValues as string[];
  
    // Kiểm tra nếu checkbox "Tất cả" được chọn
    if (updatedStatus.includes("1")) {
      // Nếu có, sẽ cập nhật lại trạng thái của status thành chỉ chứa giá trị "1"
      setFilterValues(prevValues => ({
        ...prevValues,
        status: ["1"],
      }));

    } else {
      // Nếu không, cập nhật lại trạng thái của status theo các giá trị đã chọn
      setFilterValues(prevValues => ({
        ...prevValues,
        status: updatedStatus,
      }));
    }

    console.log(updatedStatus)
  };
  const handleFilter = () => {
    const filteredData = tableData.filter(item => {
      if (
        filterValues.fromDate &&
        filterValues.toDate &&
        (item.date < filterValues.fromDate || item.date > filterValues.toDate)
      ) {
        return false;
      }

      if (
        filterValues.status.length > 0 &&
        !filterValues.status.includes(item.status.toString())
      ) {
        return false;
      }

      if (
        filterValues.gate.length > 0 &&
        !filterValues.gate.includes(item.gate.toString())
      ) {
        return false;
      }

      return true;
    });

    onFilter(filteredData);
    onClose();
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
