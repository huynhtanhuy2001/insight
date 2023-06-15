import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import TicketManagementPage from "./pages/TicketManagement";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
    
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/ticketmanagement" element={<TicketManagementPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
