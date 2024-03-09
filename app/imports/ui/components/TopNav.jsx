import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { BiSearch, BiPerson, BiHeart, BiCart } from 'react-icons/bi';

const TopNav = () => (
  <Navbar bg="primary" variant="dark" className="p-3">
    <Container>
      <Row className="m-0">
        <Col>
          <Navbar.Brand>
            <img src="https://enjoico.com/cdn/shop/files/logo.png?v=1614335450" alt="Logo" />
          </Navbar.Brand>
        </Col>
        <Col>
          <Nav className="justify-content-center">
            <Nav.Link className="p-3" style={{ fontSize: '25px' }}>Shop</Nav.Link>
            <Nav.Link className="p-3" style={{ fontSize: '25px' }}>Video</Nav.Link>
            <Nav.Link className="p-3" style={{ fontSize: '25px' }}>Archive</Nav.Link>
          </Nav>
        </Col>
        <Col>
          <Nav className="justify-content-end" style={{ paddingTop: '3%' }}>
            <BiSearch className="p-2" style={{ transform: 'scale(1)' }} />
            <BiPerson className="p-2" style={{ transform: 'scale(1)' }} />
            <BiHeart className="p-2" style={{ transform: 'scale(1)' }}>
              <sub className="cartCounter counter" style={{ background: '#fff' }}>0</sub>
            </BiHeart>
            <BiCart className="p-2" style={{ transform: 'scale(1)' }}>
              <sub className="cartCount counter" style={{ background: '#fff' }}>0</sub>
            </BiCart>
          </Nav>
        </Col>
      </Row>
    </Container>
  </Navbar>
);

export default TopNav;
