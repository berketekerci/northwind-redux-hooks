import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";
import { Link } from "react-router-dom";

function Navi() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
  
      <Navbar  expand >
        <NavbarBrand href="/">Northwind Store</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="d-flex justify-content-end w-100 ">
          <Nav className="d-flex justify-content-end gap-2" navbar>
            <NavItem className="bg-success rounded align-content-center justify-content-center d-flex">
              <NavLink tag={Link} to="/saveproduct/" className="text-white align-content-center justify-content-center fw-semibold " style={{fontSize:"14px"}} >
                Add Product
              </NavLink>
            </NavItem>
            <CartSummary />
          </Nav>
        </Collapse>
      </Navbar>
    
  );
}

export default Navi;
