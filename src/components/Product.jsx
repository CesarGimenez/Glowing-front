import React from "react";
import styled from "styled-components";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";
import { mobile } from "./Responsive/Responsive";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  max-width: 340px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${mobile({ height: "30vh", marginRight: "0px", maxWidth: "400px" })}

  &:hover ${Info} {
    opacity: 1;
    cursor: pointer;
  }
`;

const BadgeNew = styled.div`
  background-color: #069e9e;
  color: white;
  border-radius: 20px;
  padding: 10px;
  position: absolute;
  top: 3px;
  right: 3px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

export const Product = ({ product, IncrementCart }) => {
  return (
    <Container>
      {product.is_new && <BadgeNew>NUEVO</BadgeNew>}

      <Image src={product.img} />
      <Info>
        <Icon onClick={() => IncrementCart()}>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};
