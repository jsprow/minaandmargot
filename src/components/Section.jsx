import React, { Component } from 'react';

import styled from 'styled-components';

const SectionBody = styled.section`
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: center;
  max-width: 100%;
  min-height: 100vh;
  padding: 2em;
  background-color: #ccc;
  overflow: hidden;
`;

export default class Section extends Component {
  render() {
    return <SectionBody>{this.props.component}</SectionBody>;
  }
}
