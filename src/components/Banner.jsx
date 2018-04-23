import React, { Component } from 'react';

import styled from 'styled-components';

import bgImage from './../images/bgImage.jpg';

const BannerBody = styled.div`
  position: relative;
  z-index: 15;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  box-shadow: 0 2px 8px #222;
`;
const BannerBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.opacity};
  transition: opacity 1s;
  transition-delay: 500ms;
`;
const BannerLogo = styled.img`
  width: 80vmin;
  filter: drop-shadow(2px 2px 4px #444);
  opacity: ${props => props.opacity};
  transition: opacity 500ms;
`;

export default class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = { backgroundOpacity: 0, logoOpacity: 0 };
  }

  render() {
    const { logo } = this.props;
    const { backgroundOpacity, logoOpacity } = this.state;

    return (
      <BannerBody>
        <BannerBackground
          src={bgImage}
          alt="background"
          onLoad={() => this.setState({ backgroundOpacity: 1 })}
          opacity={backgroundOpacity}
        />
        <BannerLogo src={logo} alt="logo" onLoad={() => this.setState({ logoOpacity: 1 })} opacity={logoOpacity} />
      </BannerBody>
    );
  }
}
