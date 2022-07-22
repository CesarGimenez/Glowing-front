import React from "react";
import styled from "styled-components";
import { Search, ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "./Responsive/Responsive";

const Container = styled.div`
  height: 70px;
  background-color: black;
  ${mobile({ height: "50px", width: "100%" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  width: 170px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background-color: white;
  margin-top: 10px;
  ${mobile({
    width: "100px",
    marginTop: "0px",
    marginLeft: "10px",
    marginRight: "10px",
    borderRadius: "20px",
  })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "80px" })}
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  ${mobile({ height: "35px" })}
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Center = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  color: white;
`;

export const Navbar = ({ cart }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <img
              src="https://res.cloudinary.com/dl57f2zr5/image/upload/v1645327161/Glowing/logoglowing_lw4qjc.png"
              style={{ maxHeight: 60 }}
            />
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Badge badgeContent={cart} color="primary">
              <ShoppingCart />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
