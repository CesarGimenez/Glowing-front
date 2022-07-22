import React from "react";
import styled from "styled-components";
import { ExitToApp } from "@material-ui/icons";

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
`;

const NavbarWraper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavbarLeft = styled.div``;
const NavbarRight = styled.div``;

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: darkyellow;
  cursor: pointer;
`;

const NavbarIcons = styled.div``;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWraper>
        <NavbarLeft>
          <Logo>Glowing Admin System</Logo>
        </NavbarLeft>
        <NavbarRight>
          <ExitToApp />
        </NavbarRight>
      </NavbarWraper>
    </NavbarContainer>
  );
};
