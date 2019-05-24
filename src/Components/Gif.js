import React from 'react';

const Gif = ({ url, title}) => (
  <li className="gif-wrap">
    <img src={ url } alt={ title } />
  </li>
);

export default Gif;