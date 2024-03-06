import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const FooterMenu = () => (
  <footer className="py-3">
    <Container>
      <Row>
        <Col>
          NAVIGATION
          <hr />
          <p>About Us</p>
          <p>Employment</p>
          <p>Videos</p>
        </Col>
        <Col>
          MAIN MENU
          <hr />
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
        </Col>
        <Col>
          CONNECT
          <hr />
          <p>Sign up for the latest updates</p>
          <input type="text" placeholder="Enter Email Address" />
          <Button variant="dark">Join</Button>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterMenu;
