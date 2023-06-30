import React, { useEffect, useState } from "react";
import SiderMenu from "../../components/common/Menu";
import SearchComponent from "../../components/control/search/search";
import AccNotiMail from "../../components/control/header/Accnotimail/AccNotiMail";
import { Button, Input, Table, Dropdown, Menu, Modal } from "antd";
import PopupUpdate from "../../components/control/btnUpdateVe/index";

import {
  SearchOutlined,
  FilterOutlined,
  FormOutlined,
} from "@ant-design/icons";
import axios from "axios";
import moment from "moment";
interface DataType {
  id: number;
  PackageCode: string;
  PackageName: string;
  ApplicableDate: string;
  ExpirationDate: string;
  Fare: string;
  TinhTrang: string;
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
    case "Đang áp dụng":
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
    case "Tắt":
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

const ServicePackPage = () => {
  const [filteredTickets, setFilteredTickets] = useState<DataType[]>([]);
  const [tickets, setTickets] = useState<DataType[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<DataType | null>(null);
  const [showPopupUpdate, setShowPopupUpdate] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/ticketpakage")
      .then(response => {
        const responseData = response.data;

        setTickets(responseData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const handleShowPopupUpdate = (record: DataType) => {
    setSelectedTicket(record);
    setShowPopupUpdate(true);
  };

  const paginationConfig = {
    pageSize: 12,
    total: 240,
    current: 1,
    showSizeChanger: false, // hide size changer
  };
  const renderActionIcon = (record: DataType) => {
    return (
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          border: "none",
          color: "orange",
        }}
        onClick={() => handleShowPopupUpdate(record)}
      >
        <FormOutlined style={{ marginRight: "5px" }} />
        <p style={{ margin: "0" }}>Cập nhật</p>
      </Button>
    );
  };
  const handleFilter = (values: FilterValues) => {
    const { fromDate, toDate, status, gate } = values;

    let filteredData = tickets;

    if (fromDate) {
      const formattedFromDate = moment(fromDate).format("YYYY-MM-DD");

      filteredData = filteredData.filter(
        ticket =>
          moment(ticket.ApplicableDate).format("YYYY-MM-DD") >=
          formattedFromDate
      );
    }

    if (toDate) {
      const formattedToDate = moment(toDate).format("YYYY-MM-DD");

      filteredData = filteredData.filter(
        ticket =>
          moment(ticket.ExpirationDate).format("YYYY-MM-DD") <= formattedToDate
      );
    }

    if (status) {
      filteredData = filteredData.filter(ticket => ticket.TinhTrang === status);
    }

    // Cập nhật dữ liệu đã lọc vào state
    setFilteredTickets(filteredData);
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
      title: "Mã gói",
      dataIndex: "PackageCode",
      key: "PackageCode",
    },
    {
      title: "Tên gói vé",
      dataIndex: "PackageName",
      key: "PackageName",
    },
    {
      title: "Ngày áp dụng",
      dataIndex: "ApplicableDate",
      key: "ApplicableDate",
    },
    {
      title: "Ngày hết hạn",
      dataIndex: "ExpirationDate",
      key: "ExpirationDate",
    },
    {
      title: "Giá vé",
      dataIndex: "Fare",
      key: "Fare",
    },
    {
      title: "Giá Combo",
      dataIndex: "ComboPrice",
      key: "ComboPrice",
    },
    {
      title: "Tình trạng ",
      dataIndex: "TinhTrang",
      key: "TinhTrang",
      render: (status: string) => renderStatus(status),
    },
    actionColumn,
  ];
  console.log(selectedTicket);

  return (
    <div className="MainApp">
      <SiderMenu />
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
          <h2>Danh sách gói vé</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "20px",
            }}
          >
            <Input.Search
              style={{ width: "300px" }}
              placeholder="Tìm bằng số vé"
              enterButton={<SearchOutlined />}
            ></Input.Search>
            <div>
              <Button
                style={{
                  textAlign: "center",
                  height: "48px",
                  width: "127px",
                  border: "1px solid orange",
                  color: "orange",
                  gap: "10px",
                  marginLeft: "10px",
                }}
              >
                Xuất file (.CSV)
              </Button>
              <Button
                style={{
                  textAlign: "center",
                  height: "48px",
                  width: "127px",
                  border: "1px solid orange",
                  color: "white",
                  backgroundColor: "orange",
                  gap: "10px",
                  marginLeft: "10px",
                }}
              >
                Thêm gói vé
              </Button>
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
            {showPopupUpdate && selectedTicket && (
              <PopupUpdate
                record={selectedTicket}
                onClose={() => setShowPopupUpdate(false)}
                selectedTicket={selectedTicket}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePackPage;
