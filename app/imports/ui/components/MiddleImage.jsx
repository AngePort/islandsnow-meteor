import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const MiddleImage = () => (
  <Row id="center-image" className="align-items-center">
    <Col md={3} />
    <Col md={3}>
      <h1 className="display-1">Aloha</h1>
      <h4>Morning Brew Hawai'i</h4>
      <h4 style={{ color: 'red' }}>Kailua and Kaka'ako, O'ahu</h4>
      <Row>
        <Col><Button variant="danger" size="md"><i>ORDER ONLINE</i></Button></Col>
        <Col><Button variant="danger" size="md"><i>OUR MENUS</i></Button></Col>
      </Row>
    </Col>
  </Row>
);
export default MiddleImage;
