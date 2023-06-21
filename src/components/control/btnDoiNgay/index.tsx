import React, { useState, useEffect } from "react";
import axios from "axios";

interface BtnDoiNgayProps {
  ticketId: number;
}

interface TicketData {
  SoVe: string;
  TenSuKien: string;
  NgaySuDung: string;
}

const BtnDoiNgay: React.FC<BtnDoiNgayProps> = ({ ticketId }) => {
  const [ticketData, setTicketData] = useState<TicketData | null>(null);

  useEffect(() => {
    // Gọi API để lấy dữ liệu của vé từ MySQL
    axios
      .get(`http://localhost:8000/api/ticket/${ticketId}`)
      .then((response) => {
        // Xử lý dữ liệu nhận được từ API
        const responseData = response.data;
        // Cập nhật state ticketData với dữ liệu từ API
        setTicketData(responseData);
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.log(error);
      });
  }, [ticketId]);

  return (
    <div>
      {ticketData ? (
        <div>
          <p>Số vé: {ticketData.SoVe}</p>
          <p>Tên sự kiện: {ticketData.TenSuKien}</p>
          <p>Ngày sử dụng: {ticketData.NgaySuDung}</p>
          {/* Các phần tử UI khác */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BtnDoiNgay;
