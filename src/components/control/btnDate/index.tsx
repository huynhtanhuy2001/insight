import React, { useState } from "react";
import dayjs from "dayjs";
import vi from "antd/es/date-picker/locale/vi_VN";
import { DatePicker, Space, Radio } from "antd";
import type { DatePickerProps, RadioChangeEvent } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

import "./styles.css";
const BtnDatePicker: React.FC = () => {
  const [pickerType, setPickerType] = useState("date");

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const handlePickerTypeChange = (e: RadioChangeEvent) => {
    setPickerType(e.target.value);
  };

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
    <Space direction="vertical">
      <div className="date-picker-wrapper">
        <DatePicker
          picker="date"
          locale={vi}
          format={"MMMM, YYYY"}
          renderExtraFooter={renderExtraFooter}
          onChange={onChange}
          suffixIcon={<CalendarOutlined className="custom-icon" />}
          showToday={false}
          defaultValue={dayjs()}
        />
      </div>
    </Space>
  );
};

export default BtnDatePicker;
