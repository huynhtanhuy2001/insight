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

const renderStatus = (status: string) => {
  let color, icon;

  switch (status) {
    case "Đã sử dụng":
      return (
        <Button
          style={{
            backgroundColor: "rgb(234, 241, 248)",
            border: "1px solid rgb(145, 157, 186)",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", color: "green" }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "green",
                marginRight: "6px",
              }}
            />
            {status}
          </div>
        </Button>
      );
    case "Chưa sử dụng":
      return (
        <Button
          style={{
            backgroundColor: "rgb(222, 246, 224)",
            border: "1px solid green",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "rgb(3, 172, 0)",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "rgb(3, 172, 0)",
                marginRight: "6px",
              }}
            />
            {status}
          </div>
        </Button>
      );
    case "Ngưng sử dụng":
      return (
        <Button
          style={{
            backgroundColor: "rgb(248, 235, 232)",
            border: "1px solid red",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", color: "red" }}>
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "red",
                marginRight: "6px",
              }}
            />
            {/* {status} */}
            {"Hết hạn"}
          </div>
        </Button>
      );
    default:
      color = "";
      icon = null;
  }

  return (
    <Button>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: color,
            marginRight: "6px",
          }}
        />
        {icon}
      </div>
    </Button>
  );
};
const columns = [
  {
    title: "STT",
    dataIndex: "id",
    key: "id",
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
    render: (status: string) => renderStatus(status),
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
  const [filteredTickets, setFilteredTickets] = useState<DataType[]>([]);
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


  const handleFilter = (values) => {
    const { fromDate, toDate, status, gate } = values;
  
    // Lọc dữ liệu theo các điều kiện lọc
    let filteredData = tickets;
  
    if (fromDate) {
      filteredData = filteredData.filter(
        (ticket) => ticket.NgaySuDung >= fromDate.format("YYYY-MM-DD")
      );
    }
  
    if (toDate) {
      filteredData = filteredData.filter(
        (ticket) => ticket.NgaySuDung <= toDate.format("YYYY-MM-DD")
      );
    }
  
    if (status) {
      filteredData = filteredData.filter(
        (ticket) => ticket.TinhTrangSuDung === status
      );
    }
  
    if (gate && gate.includes("all")) {
      filteredData = filteredData.filter(
        (ticket) => ticket.CongCheckIn !== ""
      );
    } else if (gate && gate.length > 0) {
      filteredData = filteredData.filter((ticket) =>
        gate.includes(ticket.CongCheckIn)
      );
    }
  
    // Cập nhật dữ liệu đã lọc vào state
    setFilteredTickets(filteredData);
  
    // Đóng popup
    closePopup();
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
              <Popup visible={popupVisible} onClose={closePopup} onFilter={handleFilter} />

              <Button>Xuất file</Button>
            </div>
          </div>
          <div className="table">
            <Table
              columns={columns}
              dataSource={filteredTickets.length > 0 ? filteredTickets : tickets}
              pagination={paginationConfig}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketManagementPage;
