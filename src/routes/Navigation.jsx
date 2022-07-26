import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Client/Home";
import { HomeAdmin } from "../pages/Admin/HomeAdmin";
import { Error404 } from "../pages/Error404";

export const Navigation = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin/*" element={<HomeAdmin />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
};
