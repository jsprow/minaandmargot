import React from 'react';

import './css/Box.css';

const Box = ({ children, style }) => (
  <div className="box" style={style}>
    {children}
  </div>
);

export const Title = ({ text }) => <h1 className="box-title">{text}</h1>;

export const Text = ({ children: text }) => <p className="box-text">{text}</p>;

export default Box;
