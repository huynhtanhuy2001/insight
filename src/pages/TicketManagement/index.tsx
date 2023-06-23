import React, { useEffect, useState } from "react";
import SiderMenu from "../../components/common/Menu";
import SearchComponent from "../../components/control/search/search";
import AccNotiMail from "../../components/control/header/Accnotimail/AccNotiMail";
import { Button, Input, Table, Dropdown, Menu, Modal } from "antd";

import {
  SearchOutlined,
  FilterOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import PopupLocVe from "../../components/control/btnLocVe/index";
import axios from "axios";
import moment from "moment";
import PopupDoiNgay from "../../components/control/btnDoiNgay/index";
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
interface FilterValues {
  fromDate: Date;
  toDate: Date;
  status: string;
  gate: string[];
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

const TicketManagementPage = () => {
  const [locVePopupVisible, setLocVePopupVisible] = useState(false);
  const [doiNgayPopupVisible, setDoiNgayPopupVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState<DataType[]>([]);
  const [tickets, setTickets] = useState<DataType[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<DataType | null>(null);
  const [isPopupDoiNgayVisible, setIsPopupDoiNgayVisible] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/ticket")
      .then(response => {
        const responseData = response.data;

        setTickets(responseData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const closePopup = () => {
    setPopupVisible(false);

  };

  const paginationConfig = {
    pageSize: 12,
  };

  const handleFilter = (values: FilterValues) => {
    const { fromDate, toDate, status, gate } = values;

    let filteredData = tickets;

    if (fromDate) {
      const formattedFromDate = moment(fromDate).format("YYYY-MM-DD");

      filteredData = filteredData.filter(
        ticket =>
          moment(ticket.NgaySuDung).format("YYYY-MM-DD") >= formattedFromDate
      );
    }

    if (toDate) {
      const formattedToDate = moment(toDate).format("YYYY-MM-DD");

      filteredData = filteredData.filter(
        ticket =>
          moment(ticket.NgaySuDung).format("YYYY-MM-DD") <= formattedToDate
      );
    }

    if (status) {
      filteredData = filteredData.filter(
        ticket => ticket.TinhTrangSuDung === status
      );
    }

    if (gate && gate.includes("all")) {
      filteredData = filteredData.filter(ticket => ticket.CongCheckIn !== "");
    } else if (gate && gate.length > 0) {
      filteredData = filteredData.filter(ticket =>
        gate.includes(ticket.CongCheckIn)
      );
    }

    // Cập nhật dữ liệu đã lọc vào state
    setFilteredTickets(filteredData);

    // Đóng popup
    closePopup();
  };
  const showPopupDoiNgay = (record: DataType) => {
    setSelectedTicket(record);
    setIsPopupDoiNgayVisible(true);
  };
  const showPopupLocVe = () => {
    setLocVePopupVisible(true);
  };
  const closePopupDoiNgay = () => {
    setIsPopupDoiNgayVisible(false);
  };

  //render

  const renderActionIcon = (record: DataType) => {
    if (!record.NgaySuDung) {
      const menu = (
        <Menu style={{ backgroundColor: "orange", textAlign: "center" }}>
          <Menu.Item style={{ backgroundColor: "orange" }}>
            <Button
              style={{
                border: "none",
                padding: 0,
                display: "block",
                backgroundColor: "orange",
                color: "black",
              }}
            >
              Sử dụng vé
            </Button>
            <Button
              onClick={() => {
                showPopupDoiNgay(record);
                setDoiNgayPopupVisible(true);
              }}
              style={{
                border: "none",
                padding: 0,
                backgroundColor: "orange",
                color: "black",
              }}
            >
              Đổi ngày sử dụng
            </Button>
          </Menu.Item>
        </Menu>
      );

      return (
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button style={{ border: "none", padding: 0 }}>
            <EllipsisOutlined style={{ transform: "rotate(90deg)" }} />
          </Button>
        </Dropdown>
      );
    }

    return null;
  };
  const actionColumn = {
    title: "",
    dataIndex: "actions",
    key: "action",

    render: (_: any, record: DataType) => renderActionIcon(record),
  };

  //cột
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

    actionColumn,
  ];
  console.log(selectedTicket);

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
              <Button onClick={showPopupLocVe}>
                <FilterOutlined />
                Lọc vé
              </Button>
              <PopupLocVe
                visible={locVePopupVisible}
                onClose={closePopup}
                onFilter={handleFilter}
              />

              <Button>Xuất file</Button>
            </div>
          </div>
          <div className="table">
            <Table
              columns={columns}
              dataSource={
                filteredTickets.length > 0 ? filteredTickets : tickets
              }
              pagination={paginationConfig}
            />
            <Modal
              title="Đổi ngày sử dụng"
              visible={doiNgayPopupVisible}
            
              footer={null}
            >
              {doiNgayPopupVisible && selectedTicket && (
                <PopupDoiNgay
                onClose={closePopupDoiNgay}
                  selectedTicket={selectedTicket}
                  ticketId={selectedTicket?.id}
                />
              )}
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketManagementPage;
