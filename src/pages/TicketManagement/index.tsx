import React, { useEffect, useState } from "react";
import SiderMenu from "../../components/common/Menu";
import SearchComponent from "../../components/control/search/search";
import AccNotiMail from "../../components/control/header/Accnotimail/AccNotiMail";
import { Button, Input, Table, Dropdown, Menu, Modal } from "antd";
import { fetchTickets } from "../../redux/action/actionApiTicket";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../redux/store";
import {
  SearchOutlined,
  FilterOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import PopupLocVe from "../../components/control/btnLocVe/index";
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
  const [filteredTickets, setFilteredTickets] = useState<DataType[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<DataType | null>(null);
  const [isPopupDoiNgayVisible, setIsPopupDoiNgayVisible] = useState(false);
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const tickets = useSelector(
    (state: RootState) => state.reducerApiTicket.tickets
  );

  const [tableData, setTableData] = useState<any[]>([]);
  useEffect(() => {
    dispatch(fetchTickets());
    setFilteredTickets(tickets);
  }, [dispatch, tickets]);

  
  const closePopup = () => {
    // setPopupVisible(false);
    setLocVePopupVisible(false);
    setIsPopupDoiNgayVisible(false);
  };

  const paginationConfig = {
    pageSize: 12,
    total: 240,
    current: 1,
    showSizeChanger: false,
  };

  const handleFilter = (values: FilterValues) => {
    const { fromDate, toDate, status, gate } = values;

    if (fromDate) {
      const formattedFromDate = moment(fromDate).format("DD/MM/YYYY");

      tickets.filter(
        (ticket: DataType) =>
          moment(ticket.NgaySuDung).format("DD/MM/YYYY") >= formattedFromDate
      );
    }

    if (toDate) {
      const formattedToDate = moment(toDate).format("DD/MM/YYYY");

      tickets.filter(
        (ticket: DataType) =>
          moment(ticket.NgaySuDung).format("DD/MM/YYYY") <= formattedToDate
      );
    }

    if (status) {
      tickets.filter(
        (ticket: DataType) => ticket.TinhTrangSuDung === status
      );
    }

    if (gate && gate.includes("all")) {
      tickets.filter(
        (ticket: DataType) => ticket.CongCheckIn !== ""
      );
    } else if (gate && gate.length > 0) {
      tickets.filter(
        (ticket: DataType) =>
          gate.includes(ticket.CongCheckIn) || ticket.CongCheckIn === ""
      );
    }

    // Cập nhật dữ liệu đã lọc vào state
    setFilteredTickets(tickets);
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
            <div style={{ display: "flex" }}>
              <Button
                style={{
                  textAlign: "center",
                  height: "48px",
                  width: "127px",

                  border: "1px solid orange",
                  color: "orange",
                  gap: "10px",
                }}
                onClick={showPopupLocVe}
              >
                <FilterOutlined />
                Lọc vé
              </Button>
              <PopupLocVe
                visible={locVePopupVisible}
                onClose={closePopup}
                onFilter={handleFilter}
                tableData={tableData}
              />

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
              visible={isPopupDoiNgayVisible}
              footer={null}
            >
              {doiNgayPopupVisible && selectedTicket && (
                <PopupDoiNgay
                  visibles={isPopupDoiNgayVisible}
                  onClose={closePopup}
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
