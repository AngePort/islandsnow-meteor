import React from 'react';
import { Image } from 'react-bootstrap';

const CenterPicture = () => (
  <Image
    style={{ width: '85%', float: 'right' }}
    className="py-4"
    src="https://enjoico.com/cdn/shop/files/Enjoi_Feb-24-promo_web-banner_2000x.jpg?v=1708116520"
    alt="Center Picture"
    fluid
  />
);

export default CenterPicture;
