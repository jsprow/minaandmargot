import React, { Component } from 'react';

import { OutboundLink } from 'react-ga';

import OurStory from './OurStory.jsx';
import Banner from './Banner.jsx';
import ContactUs from './ContactUs.jsx';
import Gallery from './Gallery.jsx';
import Section from './Section.jsx';

import styled from 'styled-components';

import logo from './../images/logo.svg';

const Main = styled.main`
  font-family: 'Inconsolata', serif;
  font-size: 14px;

  width: 100vw;
`;
const Message = styled.h1`
  width: 100%;
  text-align: center;
`;
const MessageLink = styled(OutboundLink)`
  display: inline-block;

  transition: transform 100ms, filter 100ms;
  transform: translateY(0);
  text-decoration: underline;

  color: #000;
  border-radius: 22px;
  &:hover {
    transition: transform 250ms, filter 250ms;
    transform: translateY(-2px);

    will-change: transform;
  }
  &:active {
    transition: transform 250ms, filter 250ms;
    transform: translateY(-1px);
  }
  &:visited {
    color: #888;
  }
`;

export default class App extends Component {
  render() {
    return (
      <Main>
        <Banner logo={logo} />
        <Message>
          Find us on{' '}
          <MessageLink
            className="app-alert"
            eventLabel="Clicked Etsy Link in alert"
            to="https://www.etsy.com/shop/MINAandMARGOT">
            Etsy
          </MessageLink>{' '}
          to make a purchase!
        </Message>
        <Section component={<OurStory />} />
        <Section component={<Gallery />} />
        <Section component={<ContactUs />} />
      </Main>
    );
  }
}
