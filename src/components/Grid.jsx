import React from 'react';

import styled from 'styled-components';

const RowBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 70rem;
  max-width: 95vw;
`;
const ColumnBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = ({ children, style }) => <RowBody className="grid-row">{children}</RowBody>;
export const Column = ({ children }) => <ColumnBody className="grid-column">{this.props.children}</ColumnBody>;
