import React from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';

const MiddleMenu = () => (
  <Nav className="justify-content-md-center py-3">
    <NavDropdown title="MEN" />
    <NavDropdown title="WOMEN" />
    <NavDropdown title="KIDS" />
    <NavDropdown title="BRANDS" />
    <Nav.Link>SEARCH</Nav.Link>
  </Nav>
);

export default MiddleMenu;
