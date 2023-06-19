import React, { useEffect, useState } from "react";
import SiderMenu from "../../components/common/Menu";
import SearchComponent from "../../components/control/search/search";
import AccNotiMail from "../../components/control/header/Accnotimail/AccNotiMail";
import { Button, Input, Table } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import Popup from "../../components/control/btnLocVe";
import axios from "axios";

interface DataType {
  idTicket: number;
  BookingCode: string;
  SoVe: string;
  TenSuKien: string;
  TinhTrangSuDung: string;
  NgaySuDung: string;
  NgayXuatVe: string;
  CongCheckIn: string;
}

const columns = [
  {
    title: "STT",
    dataIndex: "idTicket",
    key: "idTicket",
  },
  {
    title: "Booking code",
    dataIndex: "BookingCode",
    key: "BookingCode",
  },
  {
    title: "Số vé",
    dataIndex: "SoVe",
    key: "SoVe",
  },
  {
    title: "Tên sự kiện",
    dataIndex: "TenSuKien",
    key: "TenSuKien",
  },
  {
    title: "Tình trạng sử dụng",
    dataIndex: "TinhTrangSuDung",
    key: "TinhTrangSuDung",
  },
  {
    title: "Ngày Sử dụng",
    dataIndex: "NgaySuDung",
    key: "NgaySuDung",
  },
  {
    title: "Ngày xuất vé",
    dataIndex: "NgayXuatVe",
    key: "NgayXuatVe",
  },
  {
    title: "Cổng check in",
    dataIndex: "CongCheckIn",
    key: "CongCheckIn",
  },
];

const TicketManagementPage = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const [tickets, setTickets] = useState<DataType[]>([]);

  useEffect(() => {
    // Gọi API bằng Axios và lấy dữ liệu
    axios
      .get("http://localhost:8000/api/ticket")
      .then(response => {
        // Xử lý dữ liệu nhận được từ API
        const responseData = response.data;
        // Cập nhật state tickets với dữ liệu từ API
        setTickets(responseData);
      })
      .catch(error => {
        // Xử lý lỗi nếu có
        console.log(error);
      });
  }, []);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const paginationConfig = {
    pageSize: 12,
  };
  return (
    <div className="MainApp">
      <SiderMenu selectedKey={"2"} />
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SearchComponent />
          <AccNotiMail />
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "24px",
            padding: "24px 63px 0px 24px",
          }}
        >
          <h2>Danh sách vé</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Input.Search
              style={{ width: "300px" }}
              placeholder="Tìm bằng số vé"
              enterButton={<SearchOutlined />}
            ></Input.Search>
            <div>
              <Button onClick={showPopup}>
                <FilterOutlined />
                Lọc vé
              </Button>
              <Popup visible={popupVisible} onClose={closePopup} />
              <Button>Xuất file</Button>
            </div>
          </div>
          <div className="table">
            <Table
              columns={columns}
              dataSource={tickets}
              pagination={paginationConfig}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketManagementPage;
