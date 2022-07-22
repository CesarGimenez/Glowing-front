import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  background-color: #${(props) => props.bg};
`;
const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
const ItemContainer = styled.div``;
const ItemEstadistics = styled.span`
  font-weight: bold;
`;

export const Widgets = () => {
  return (
    <Container>
      <Item bg={"f29a86"}>
        <Title>Mis productos</Title>
        <ItemContainer>
          <ItemEstadistics>20</ItemEstadistics>
        </ItemContainer>
      </Item>
      <Item bg={"fce4ca"}>
        <Title>Mis clientes</Title>
        <ItemContainer>
          <ItemEstadistics>20</ItemEstadistics>
        </ItemContainer>
      </Item>
      <Item bg={"f8e469"}>
        <Title>Mis categorias</Title>
        <ItemContainer>
          <ItemEstadistics>20</ItemEstadistics>
        </ItemContainer>
      </Item>
      <Item bg={"58c3bb"}>
        <Title>Mis pedidos</Title>
        <ItemContainer>
          <ItemEstadistics>20</ItemEstadistics>
        </ItemContainer>
      </Item>
    </Container>
  );
};
