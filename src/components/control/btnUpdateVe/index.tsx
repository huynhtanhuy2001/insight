import React, { useState, useEffect } from "react";
import { Button, DatePicker, Table } from "antd";

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

const PopupUpdate: React.FC<BtnUpdateProps> = ({

record,
  onClose,
}) => {
  const handleFilter = () => {
    onClose();
  };
  return (
    <div>
      {record ? (
        <div>
      <p>{record?.PackageCode}</p>
          <p>
          
            <DatePicker />
          </p>
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
