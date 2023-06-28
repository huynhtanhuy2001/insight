import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import HomePage from "./pages/Home";
import TicketManagementPage from "./pages/TicketManagement";
import TicketCheckPage from "./pages/Ticketcheck";
import ServicePackPage from "./pages/ServicePack";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
          <Route path="/ticketmanagement" element={<TicketManagementPage />} />
          <Route path="/ticketcheck" element={<TicketCheckPage />} />
          <Route path="/servicepack" element={<ServicePackPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
