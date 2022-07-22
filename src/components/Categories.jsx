import React from "react";
import styled from "styled-components";
import { categories } from "../assets/data";
import { CategoryItem } from "./CategoryItem";
import { mobile } from "./Responsive/Responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 10px;
  ${mobile({ margin: "10px" })}
`;
export const Categories = () => {
  return (
    <>
      <Title>CATEGORIAS</Title>
      <Container>
        {categories.map((category) => (
          <CategoryItem
            category={category}
            key={category.id}
            className="animate__animated animate__fadeInUp"
          />
        ))}
      </Container>
    </>
  );
};
