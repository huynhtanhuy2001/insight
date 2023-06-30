import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import vi from "antd/es/date-picker/locale/vi_VN";
import { DatePicker, Space, Radio } from "antd";
import type { DatePickerProps, RadioChangeEvent } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

import "./styles.css";
const BtnDatePicker: React.FC = () => {
  const [pickerType, setPickerType] = useState<"date" | "week">("date");
  const getPopupContainer = (node: HTMLElement) => node;
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const handlePickerTypeChange = (e: RadioChangeEvent) => {
    setPickerType(e.target.value);
  };

  useEffect(() => {
    const defaultDateElement = document.querySelector(
      ".ant-picker-cell-inner"
    ) as HTMLElement;

    if (defaultDateElement) {
      defaultDateElement.style.backgroundColor = "orange";
      defaultDateElement.style.color = "white";
    }
  }, []);
  const renderExtraFooter = () => (
    <div className="date-picker-radio-group">
      <Radio.Group
        className="radio-group"
        value={pickerType}
        onChange={handlePickerTypeChange}
      >
        <Radio value="date">Theo ngày</Radio>
        <Radio value="week">Theo tuần</Radio>
      </Radio.Group>
    </div>
  );

  return (
    <Space style={{ width: "137px",}} direction="vertical">
      <div className="date-picker-wrapper">
        <DatePicker
        getPopupContainer={getPopupContainer}
          picker={pickerType === "date" ? "date" : "week"}
          locale={vi}
          format={pickerType === "date" ? "MMMM, YYYY" : "wo"}
          renderExtraFooter={renderExtraFooter}
          onChange={onChange}
          suffixIcon={<CalendarOutlined className="custom-icon" />}
          showToday={pickerType === "date" ? false : true}
          defaultValue={dayjs()}
        />
      </div>
    </Space>
  );
};

export default BtnDatePicker;
