import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const TopNav = () => (
  <Navbar bg="light" sticky="top" expand="lg">
    <Container className="justify-content-center">
      <Nav className="mx-auto">
        <Nav.Item className="active border-3 border-top border-dark">Home</Nav.Item>
        <Nav.Item className="border-1 border-top border-dark">Order Online</Nav.Item>
        <Nav.Item className="border-1 border-top border-dark">Menus</Nav.Item>
        <Nav.Item className="border-1 border-top border-dark">Locations</Nav.Item>
        <Nav.Item className="border-1 border-top border-dark">About</Nav.Item>
        <Nav.Item className="border-1 border-top border-dark">Shop</Nav.Item>
        <Nav.Item className="border-1 border-top border-dark">Contact</Nav.Item>
      </Nav>
    </Container>
  </Navbar>
);

export default TopNav;
