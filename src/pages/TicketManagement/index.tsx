import React, { useEffect, useState } from "react";
import SiderMenu from "../../components/common/Menu";
import SearchComponent from "../../components/control/search/search";
import AccNotiMail from "../../components/control/header/Accnotimail/AccNotiMail";
import { Button, Input, Table } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import Popup from "../../components/control/btnLocVe";

interface DataType {
  key: React.Key;
  stt: number;
  bookingCode: string;
  soVe: string;
  tenSuKien: string;
  tinhTrangSuDung: string;
  ngaySuDung: string;
  ngayXuatVe: string;
  congCheckIn: string;
}

const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "Booking code",
    dataIndex: "bookingCode",
    key: "bookingCode",
  },
  {
    title: "Số vé",
    dataIndex: "soVe",
    key: "soVe",
  },
  {
    title: "Tên sự kiện",
    dataIndex: "tenSuKien",
    key: "tenSuKien",
  },
  {
    title: "Tình trạng sử dụng",
    dataIndex: "tinhTrangSuDung",
    key: "tinhTrangSuDung",
  },
  {
    title: "Ngày Sử dụng",
    dataIndex: "ngaySuDung",
    key: "ngaySuDung",
  },
  {
    title: "Ngày xuất vé",
    dataIndex: "ngayXuatVe",
    key: "ngayXuatVe",
  },
  {
    title: "Cổng check in",
    dataIndex: "congCheckIn",
    key: "congCheckIn",
  },
];

const data = [
  {
    key: "1",
    stt: 1,
    bookingCode: "BK001",
    soVe: "VE001",
    tenSuKien: "Sự kiện 1",
    tinhTrangSuDung: "Đã sử dụng",
    ngaySuDung: "01/01/2023",
    ngayXuatVe: "01/12/2022",
    congCheckIn: "Cổng A",
  },
];

const TicketManagementPage = () => {
  const [popupVisible, setPopupVisible] = useState(false);

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
              // dataSource={tickets}
              dataSource={data}
              pagination={paginationConfig}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketManagementPage;
