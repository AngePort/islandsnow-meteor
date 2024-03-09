import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const CenterMerch = () => (
  <Container style={{ float: 'right', paddingLeft: '10%' }}>
    <Row>
      <Col>
        <div>
          <Image src="https://enjoico.com/cdn/shop/products/enjoiFaderDenimPantsS1_1024x1024.jpg?v=1606506785" fluid className="px-2" />
          <p style={{ textAlign: 'center' }}>fader denim black pants</p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a style={{ paddingLeft: '30%' }}>$69.95</a>
        </div>
      </Col>

      <Col>
        <div>
          <Image src="https://enjoico.com/cdn/shop/products/30117040_charcoal_1_1024x1024.jpg?v=1659727545" fluid className="px-2" />
          <p style={{ textAlign: 'center' }}>fader denim charcoal pants</p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a style={{ paddingLeft: '30%' }}>$69.95</a>
        </div>
      </Col>

      <Col>
        <div>
          <Image src="https://enjoico.com/cdn/shop/products/enjoifaderbluejeanshopifyfront_1024x1024.jpg?v=1628049532" fluid className="px-2" />
          <p style={{ textAlign: 'center' }}>fader denim light blue pants</p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a style={{ paddingLeft: '30%' }}>$69.95</a>
        </div>
      </Col>

      <Col>
        <div>
          <Image src="https://enjoico.com/cdn/shop/products/PulizziTweaker_1024x1024.jpg?v=1659035939" fluid className="px-2" />
          <p style={{ textAlign: 'center' }}>pulizzi tweaker r7 8.375 & 9.0 skateboard deck</p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a style={{ paddingLeft: '30%' }}>$71.95</a>
        </div>
      </Col>

      <Col>
        <div>
          <Image src="https://enjoico.com/cdn/shop/products/10017995_samarria_1_1024x1024.jpg?v=1654217775" fluid className="px-4" />
          <p style={{ textAlign: 'center' }}>enjoi samarria peekaboo pro panda super sap r7 8.0 & 8.5 skateboard deck</p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a style={{ paddingLeft: '30%' }}>$74.95</a>
        </div>
      </Col>
    </Row>
  </Container>
);

export default CenterMerch;
