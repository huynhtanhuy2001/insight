import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import TicketManagementPage from "./pages/TicketManagement";
import TicketCheckPage from "./pages/Ticketcheck";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={<HomePage />} />
          <Route path="/ticketmanagement" element={<TicketManagementPage />} />
          <Route path="/ticketcheck" element={<TicketCheckPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
