import React from 'react';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';

const Logo = () => (
  <Navbar expand="lg" bg="light">
    <Container className="py-2">
      <Nav className="mx-auto">
        <Nav.Link>
          <Image
            src="https://static.wixstatic.com/media/099475_c2c8d91a0359407fa3966db2a7f0b84f~mv2.png/v1/fill/w_530,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Morning%20Brew%20Hawaii%20Logo%20Black.png"
            fluid
            className="d-block mx-auto"
            style={{ width: '50%', height: 'auto' }}
          />
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Logo;
