import React from "react";
import styled from "styled-components";
import { Product } from "./Product";
import { PopularProducts } from "../assets/data";
import { mobile } from "./Responsive/Responsive";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ padding: "0px" })}
`;

const Title = styled.h1`
  text-align: center;
  ${mobile({ margin: "10px" })}
`;
export const Products = ({ IncrementCart }) => {
  return (
    <>
      <Title>PRODUCTOS</Title>
      <Container>
        {PopularProducts.map((product) => (
          <Product
            product={product}
            key={product.id}
            IncrementCart={IncrementCart}
            className="animate__animated animate__fadeInUp"
          />
        ))}
      </Container>
    </>
  );
};
