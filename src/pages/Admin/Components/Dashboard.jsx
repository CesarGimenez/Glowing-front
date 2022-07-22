import React from "react";
import styled from "styled-components";
import { Widgets } from "./Widgets";

const Container = styled.div`
  padding: 20px;
`;

export const Dashboard = () => {
  return <Widgets></Widgets>;
};
