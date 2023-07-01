import React, { useEffect, useState } from "react";
import SiderMenu from "../../components/common/Menu";
import SearchComponent from "../../components/control/search/search";
import AccNotiMail from "../../components/control/header/Accnotimail/AccNotiMail";
import {
  Button,
  Input,
  Table,
  Dropdown,
  Menu,
  Modal,
  Radio,
  DatePicker,
} from "antd";

import {
  SearchOutlined,
  FilterOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import PopupLocVe from "../../components/control/btnLocVe/index";
import axios from "axios";
import moment from "moment";
import PopupDoiNgay from "../../components/control/btnDoiNgay/index";
import BtnDatePicker from "../../components/control/btnDate";
import { fetchTickets } from '../../redux/action/actionApiTicket';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
 import { RootState } from "../../redux/store";
interface DataType {
  id: number;
  BookingCode: string;
  SoVe: string;
  TenSuKien: string;
  TinhTrangSuDung: string;
  NgaySuDung: string;
  NgayXuatVe: string;
  CongCheckIn: string;
  DoiSoat: string;
}
interface FilterValues {
  fromDate: Date;
  toDate: Date;
  status: string;
  gate: string[];
}

const TicketCheckPage = () => {
  const [filteredTickets, setFilteredTickets] = useState<DataType[]>([]);
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const tickets = useSelector((state: RootState) => state.reducerApiTicket.tickets);
  useEffect(() => {
    dispatch(fetchTickets());
    setFilteredTickets(tickets);
  }, [dispatch, tickets]);
  
  const paginationConfig = {
    pageSize: 12,
    total: 240,
    current: 1,
    showSizeChanger: false, // hide size changer
  };

  const handleFilter = (values: FilterValues) => {
    const { fromDate, toDate, status, gate } = values;

    let filteredData = tickets;

    if (fromDate) {
      const formattedFromDate = moment(fromDate).format("YYYY-MM-DD");

      filteredData = filteredData.filter(
        (ticket: DataType) =>
          moment(ticket.NgaySuDung).format("YYYY-MM-DD") >= formattedFromDate
      );
    }

    if (toDate) {
      const formattedToDate = moment(toDate).format("YYYY-MM-DD");

      filteredData = filteredData.filter(
        (ticket: DataType) =>
          moment(ticket.NgaySuDung).format("YYYY-MM-DD") <= formattedToDate
      );
    }

    if (status) {
      filteredData = filteredData.filter(
        (ticket: DataType) => ticket.TinhTrangSuDung === status
      );
    }

    if (gate && gate.includes("all")) {
      filteredData = filteredData.filter((ticket: DataType) => ticket.CongCheckIn !== "");
    } else if (gate && gate.length > 0) {
      filteredData = filteredData.filter((ticket: DataType) =>
        gate.includes(ticket.CongCheckIn)
      );
    }

    // Cập nhật dữ liệu đã lọc vào state
    setFilteredTickets(filteredData);
  };

  //cột
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
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
      title: "Ngày Sử dụng",
      dataIndex: "NgaySuDung",
      key: "NgaySuDung",
    },

    {
      title: "Cổng check in",
      dataIndex: "CongCheckIn",
      key: "CongCheckIn",
    },
    {
      title: "",
      dataIndex: "DoiSoat",
      key: "DoiSoat",
    },
  ];

  return (
    <div className="MainApp">
      <SiderMenu />

      <div>
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
            display: "flex",
          }}
        >
          <div
            style={{
              width: "1097px",
              backgroundColor: "white",
              borderRadius: "24px",
              padding: "24px 10px 0px 10px",
            }}
          >
            <h2>Danh sách vé</h2>
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
                Chốt đối soát
              </Button>
            </div>
            <div className="table">
              <Table
                columns={columns}
                dataSource={
                  filteredTickets.length > 0 ? filteredTickets : tickets
                }
                pagination={paginationConfig}
              />
            </div>
          </div>
          <div
            style={{
              width: "max-content",
              background: "white",
              borderRadius: "24px",
              marginLeft: "10px",
              padding: "20px",
            }}
          >
            <h2>Lọc vé</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <h4>Tình trạng đối soát</h4>
              <Radio.Group style={{ display: "grid", paddingLeft: "20px" }}>
                <Radio>Tất cả</Radio>
                <Radio>Đã đối soát</Radio>
                <Radio>Chưa đối soát</Radio>
              </Radio.Group>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: "55px",
              }}
            >
              <h4>Loại vé</h4>
              <h4>Vé cổng</h4>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4>Từ ngày</h4>
              <BtnDatePicker />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4>Đến ngày</h4>
              <BtnDatePicker />
            </div>
            <div style={{ textAlign: "center" }}>
            <Button
          style={{
            textAlign: "center",
            marginTop: "20px",
            width: "160px",
            height: "48px",
            border: "1px solid orange",
            color: "orange",
            gap: "10px",
          }}
       
        >
          Lọc
        </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCheckPage;
