import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "antd";

interface BtnDoiNgayProps {
  ticketId: number;
  selectedTicket: DataType | null;
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
  selectedTicket,
  ticketId,
}) => {
  return (
    <div>
      {ticketId ? (
        <div>
          <p>Số vé: {selectedTicket?.SoVe}</p>
          <p>Số vé: {selectedTicket?.TenLoaiVe}</p>
          <p>Tên sự kiện: {selectedTicket?.TenSuKien}</p>
          <p>Ngày sử dụng: {selectedTicket?.NgaySuDung}</p>
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
