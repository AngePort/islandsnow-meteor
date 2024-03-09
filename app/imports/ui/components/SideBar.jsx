import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BiFacebook, BiInstagram, BiYoutube } from 'react-icons/bi';

const SideBar = () => (
  <div className="column py-5 px-2" style={{ height: '200px' }}>
    <Row>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>new stuff</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>all stuff</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>decks</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>wheels</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>components</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>apparel</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>shirts</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>bottoms</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>sweatshirts</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>outwear</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>accessories</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>completes</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>gift card</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a style={{ color: 'red' }}>sale</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>shitake</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>about</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>return & shipping</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>find a dealer</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>sustainability</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>govx</a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>sitemap</a>
    </Row>

    <div className="line-container">
      <div className="line" />
    </div>

    <Row className="py-2 px-2">
      <Col>
        <BiFacebook className="p-1" />
        <BiInstagram className="p-1" />
        <BiYoutube className="p-1" />
      </Col>
    </Row>
  </div>
);

export default SideBar;
