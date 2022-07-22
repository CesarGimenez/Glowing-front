import React from "react";
import styled from "styled-components";
import { useLocation, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Sidebar } from "./Components/Sidebar";
import { Categories } from "./Categories";
import { Products } from "./Products";
import { Clients } from "./Clients";
import { Orders } from "./Orders";
import { Error404 } from "../Error404";
import { Dashboard } from "./Components/Dashboard";

const Content = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Pages = styled.div`
  flex: 4;
`;

export const HomeAdmin = () => {
  return (
    <div>
      <Navbar />
      <Content>
        <Sidebar />
        <Pages>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="categories" element={<Categories />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="clients" element={<Clients />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Pages>
      </Content>
    </div>
  );
};
