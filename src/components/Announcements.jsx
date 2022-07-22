import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #eb636b;
  color: white;
  text-align: center;
  padding-top: 5px;
  font-weight: bold;
`;

export const Announcements = () => {
  return <Container>Productos nuevos disponibles todas las semanas</Container>;
};
