import styled from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  box-shadow: rgba(0, 0, 0, 0.27) 0px 18px 20px -15px;

  > nav {
    display: flex;
  }
`;

export const StyledLink = styled(NavLink)`
  margin-right: 20px;
  padding: 4px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  text-transform: uppercase;

  &.active {
    color: white;
    background-color: #ff6c00;
  }
`;

export const Logo = styled.img`
  height: 38px;
  margin-left: 40px;
`;

export const Nav = styled.nav`
  margin-right: 40px;
`;

export const HeaderText = styled.p`
  text-align: center;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
`;

export const Footer = styled.footer`
  text-align: center;
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 30px;
  width: 100%;
  background: #ffffff;
  margin-top: 5px;
  padding-top: 5px;
  z-index: 9;
  color: black;
  font-family: "Montserrat";
  font-style: normal;
  font-size: 16px;
  line-height: 1.2;
   box-shadow: rgba(0, 0, 0, 0.27) 0px 18px 20px 15px;
`;
export const GoBackButton = styled(Link)`
  padding: 2px 0 18px;
  margin: 0 auto 0 20px;
`;
