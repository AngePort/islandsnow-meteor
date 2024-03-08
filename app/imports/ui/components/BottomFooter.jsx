import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Instagram } from 'react-bootstrap-icons';

const BottomFooter = () => (
  <footer className="py-3 bg-light">
    <Container>
      <Row className="justify-content-center py-2">
        <Col md={4} className="text-center">
          <h4>MORNING BREW KAILUA</h4>
          <p>600 Kailua Rd, Kailua, HI 96734<br />(808) 262-7770<br />mb.crew22@gmail.com</p>
          <Instagram size={40} />
        </Col>
        <Col md={4} className="text-center">
          <h4>MORNING BREW KAKA'AKO</h4>
          <p>685 Auahi St #113 Honolulu, HI 96813<br />(808) 369-3444<br />mbkakaako@gmail.com</p>
          <Instagram size={40} />
        </Col>
      </Row>
    </Container>
  </footer>
);
export default BottomFooter;
