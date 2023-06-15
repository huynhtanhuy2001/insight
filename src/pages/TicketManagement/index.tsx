import React from "react";
import SiderMenu from "../../components/common/Menu";
import SearchComponent from "../../components/control/search/search";
import AccNotiMail from "../../components/control/header/Accnotimail/AccNotiMail";

const TicketManagementPage = () => {


 
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

       <div  style={{
            backgroundColor: "white",
            borderRadius: "24px",
            padding: "24px 63px 0px 24px",
          }}>
        htong ke
       </div>
      </div>
    </div>
  );
};

export default TicketManagementPage;
