import React from "react";
import { Nav, NavBrand, NavItems, NavItem, NavItemButton } from "./Navbar";

export default function NavbarStyledComponents() {
  return (
    <Nav>
      <NavBrand to="/">Cool Product</NavBrand>
      <NavItems>
        <NavItem to="/pricing">Pricing</NavItem>
        <NavItem>Docs</NavItem>
        <NavItemButton>Log in</NavItemButton>
        <NavItemButton primary>Get Started For Free</NavItemButton>
      </NavItems>
    </Nav>
  );
}
