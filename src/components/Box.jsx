import React from 'react';

import styled from 'styled-components';

const BoxBody = styled.div`
  max-width: 28rem;
  box-shadow: 2px 2px 8px #444;
  padding: 1rem;
  background-color: #eee;
  border: 4px solid #444;
  border-radius: 1rem;
`;
const BoxTitle = styled.h1`
  width: 100%;
  text-align: center;
`;
const BoxText = styled.div`
  line-height: 1.2;
`;

const Box = ({ children, style }) => (
  <BoxBody className="box" style={style}>
    {children}
  </BoxBody>
);

export const Title = ({ text }) => <BoxTitle className="box-title">{text}</BoxTitle>;

export const Text = ({ children: text }) => <BoxText className="box-text">{text}</BoxText>;

export default Box;
