import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Timeline,
  TrendingUp,
  ShoppingCart,
  LocalMall,
  Comment,
  Announcement,
  Person,
} from "@material-ui/icons";

const Container = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  padding-left: 20px;
`;
const Menu = styled.div``;
const Title = styled.h3`
  font-size: 23px;
`;
const List = styled.ul`
  list-style: none;
  padding: 5px;
`;

const Item = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-size: 1.5em;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: rgb(228, 228, 250);
  }
`;

export const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Mi tienda</Title>
          <List>
            <Item as={Link} to="" active={pathname === "/admin"}>
              <Home /> Inicio
            </Item>
            <Item
              as={Link}
              to="products"
              active={pathname === "/admin/products"}
            >
              <ShoppingCart /> Productos
            </Item>
            <Item
              as={Link}
              to="categories"
              active={pathname === "/admin/categories"}
            >
              <LocalMall /> Categorias
            </Item>
            <Item as={Link} to="clients" active={pathname === "/admin/clients"}>
              <Person /> Clientes
            </Item>
            <Item as={Link} to="orders" active={pathname === "/admin/orders"}>
              <Timeline /> Ventas
            </Item>
            <Item as={Link} to="reports" active={pathname === "/admin/reports"}>
              <TrendingUp /> Reportes
            </Item>
            <Item
              as={Link}
              to="announcement"
              active={pathname === "/admin/announcement"}
            >
              <Announcement /> Anuncios
            </Item>
            <Item
              as={Link}
              to="comments"
              active={pathname === "/admin/comments"}
            >
              <Comment /> Comentarios
            </Item>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
};
