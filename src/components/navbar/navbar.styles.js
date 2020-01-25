import styled from "styled-components";

import { Container as MaterialContainer } from "@material-ui/core";
import { Link } from "react-router-dom";

export const AppBar = styled.nav`
   background: #000;
   color: #fff;
`;

const LinkStyle = `
    color: #fff;
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;

`;

export const Container = styled(MaterialContainer)`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   justify-content: space-between;
`;

export const NavLogo = styled(Link)`
   ${LinkStyle}
`;

export const NavList = styled.div`
   display: flex;
   padding: 15px 0;
   align-items: center;
`;

export const NavItem = styled(Link)`
   ${LinkStyle},
   font-size: 16px;
   padding: 10px 15px;
   margin: 0 2px;
   transition: all 0.5s ease-in-out;
   background: ${({ active }) => (active ? "#fff" : "transparent")};
   color: ${({ active }) => (active ? "#000" : "#fff")};

   &:hover,
   &.selected {
      background: #fff;
      color: #000;
   }
`;

export const NavMenu = styled.div`
   margin-left: 10px;
   cursor: pointer;
   display: flex;
   align-items: center;
`;

export const MenuItems = styled.div``;
