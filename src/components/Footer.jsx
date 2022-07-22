import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Room,
  WhatsApp,
  LocalShipping,
  Mail,
  MonetizationOn,
  Info,
  Help,
} from "@material-ui/icons";
import { mobile } from "./Responsive/Responsive";

const Container = styled.div`
  display: flex;
  background-color: gray;
  padding: 10px;
  color: white;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    color: coral;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
`;
const Description = styled.p`
  margin: 20px 0px;
  text-align: center;
`;
const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIcon = styled.div`
  margin: 5px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    color: coral;
    transform: scale(1.1);
  }
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <img
            src="https://res.cloudinary.com/dl57f2zr5/image/upload/v1645327161/Glowing/logoglowing_lw4qjc.png"
            style={{ maxHeight: 60 }}
          />
        </Logo>
        <Description>Dale brillo a tu belleza</Description>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>
          <Help /> Que buscas?
        </Title>
        <List>
          <ListItem>Make Up</ListItem>
          <ListItem>Skincare</ListItem>
          <ListItem>Accesorios</ListItem>
          <ListItem>Ir al carrito</ListItem>
          <ListItem>Mi lista de deseos</ListItem>
          <ListItem>Como pedir?</ListItem>
        </List>
      </Center>
      <Right>
        <Title>
          <Info /> Info de contacto, entregas y metodos de pago
        </Title>
        <ContactItem>
          <Room style={{ marginRight: 10 }} />
          C.C. Sambil, C.C Churun Meru, C.C Llanero, C.C Parragon, Farmatodo de
          la calle 8
        </ContactItem>
        <ContactItem>
          <LocalShipping style={{ marginRight: 10 }} /> Envios a nivel nacional
        </ContactItem>
        <ContactItem>
          <WhatsApp style={{ marginRight: 10 }} /> +584120589236
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: 10 }} /> glowingshop.2@gmail.com
        </ContactItem>
        <ContactItem>
          <MonetizationOn style={{ marginRight: 10 }} /> Efectivo,
          Transferencia, Pago Movil, Zelle, Reserve
        </ContactItem>
      </Right>
    </Container>
  );
};
