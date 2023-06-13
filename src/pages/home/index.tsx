import React from "react";
import SiderMenu from "../../components/common/Menu";
import SearchComponent from "../../components/control/search/search";
import AccNotiMail from "../../components/control/header/Accnotimail/AccNotiMail";

const HomePage = () => {
  return (
    <div className="MainApp">
      <SiderMenu />
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <SearchComponent />
          <AccNotiMail />
        </div>

        <div style={{ backgroundColor: "white", borderRadius: "24px" }}>
          <h1>ádasd</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
