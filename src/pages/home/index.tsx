import React from "react";
import SiderMenu from "../../components/common/Menu";
import SearchComponent from "../../components/control/search/search";
import AccNotiMail from "../../components/control/header/Accnotimail/AccNotiMail";
import { Button, Tag } from "antd";
import LineChart from "../../components/control/linechart";
import PieChart from "../../components/control/piechart";
import BtnDatePicker from "../../components/control/btnDate";
const HomePage = () => {
  // Dữ liệu biểu đồ 1
  const data1 = {
    datasets: [
      {
        data: [100, 200],
        backgroundColor: ["blue", "orange"],
      },
    ],
  };

  // Dữ liệu biểu đồ 2
  const data2 = {
    datasets: [
      {
        data: [56024, 13568],
        backgroundColor: ["blue", "orange"],
      },
    ],
  };
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
          <h1>Thống kê</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h4>Doanh thu</h4>
            <BtnDatePicker />
          </div>
          <div className="horizontalchart">
            <LineChart />
            <p>Tổng doanh thu theo tuần</p>
            <h3>5000000</h3>
          </div>
          <div
            className="piechart"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <BtnDatePicker />
            <PieChart data={data1} label="Gói gia đình" />
            <PieChart data={data2} label="Gói doanh nghiệp" />
            <div>
              <div className="detail">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Tag
                    style={{
                      width: "44px",
                      height: "20px",
                      borderRadius: "4px",
                      backgroundColor: "blue",
                    }}
                  />
                  <p>Vé đã sử dụng</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Tag
                    style={{
                      width: "44px",
                      height: "20px",
                      borderRadius: "4px",
                      backgroundColor: "orange",
                    }}
                  />
                  <p>Vé chưa sử dụng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
