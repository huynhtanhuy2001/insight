import React, { useState, useEffect } from "react";
import { Button, DatePicker, Table } from "antd";

interface BtnDoiNgayProps {
  visibles: boolean;
  ticketId: number;
  selectedTicket: DataType | null;
  onClose: () => void;

}

interface DataType {
  id: number;
  BookingCode: string;
  SoVe: string;
  TenSuKien: string;
  TinhTrangSuDung: string;
  NgaySuDung: string;
  NgayXuatVe: string;
  CongCheckIn: string;
  TenLoaiVe: string;
}

const PopupDoiNgay: React.FC<BtnDoiNgayProps> = ({
  visibles,
  selectedTicket,
  ticketId,
  onClose,

}) => {
  const handleFilter = () => {
 
    onClose();
  };
  return (
    <div>
      {ticketId ? (  
        <div>
          <p>Số vé: {selectedTicket?.SoVe}</p>
          <p>Số vé: {selectedTicket?.TenLoaiVe}</p>
          <p>Tên sự kiện: {selectedTicket?.TenSuKien}</p>
          <p>
            Ngày sử dụng: {selectedTicket?.NgaySuDung}
            <DatePicker />
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button  style={{
                  textAlign: "center",
                  height: "48px",
                  width: "127px",

                  border: "1px solid orange",
                  color: "orange",
                  gap: "10px",
                }} onClick={handleFilter}>Hủy</Button>
            <Button  style={{
                  textAlign: "center",
                  height: "48px",
                  width: "127px",
                  backgroundColor:"orange",
                  border: "1px solid orange",
                  color: "white",
                  gap: "10px",
                }}>Lưu</Button>
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

export default PopupDoiNgay;
