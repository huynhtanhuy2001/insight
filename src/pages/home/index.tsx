import React from "react";
import SiderMenu from "../../components/common/Menu";
import SearchComponent from "../../components/control/search/search";
import AccNotiMail from "../../components/control/header/Accnotimail/AccNotiMail";
import { Button } from "antd";
import LineChart from "../../components/control/linechart";
import PieChart from "../../components/control/piechart";

const HomePage = () => {
  return (
    <div className="MainApp">
      <SiderMenu />
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
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
            <Button>Ngày</Button>
          </div>
          <div className="horizontalchart">
            <LineChart />
            <p>Tổng doanh thu theo tuần</p>
            <h3>5000000</h3>
          </div>
          <div className="piechart" style={{ display: "flex" }}>
            <Button>tháng</Button>
            <PieChart />
            <PieChart />
            <div style={{ display: "grid" }}>
              <label>
                {" "}
                <Button></Button>
                vé đã sử dụng
              </label>
              <label>
                {" "}
                <Button></Button>
                vé đã sử dụng
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
