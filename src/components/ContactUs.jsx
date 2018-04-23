import React, { Component } from 'react';

import styled, { keyframes } from 'styled-components';

import Ribbon from './Ribbon.jsx';
import Profile from './Profile.jsx';

import { OutboundLink } from 'react-ga';

import etsy from './../images/etsy.svg';
import instagram from './../images/instagram.svg';
import facebook from './../images/facebook.svg';
import email from './../images/email.svg';

import clouds from './../images/clouds.svg';

import quyen from './../images/quyen.jpg';
import rachel from './../images/rachel.jpg';

const cloudSlide = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10vw);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(10vw);
  }
`;

const Clouds = styled.img`
  position: absolute;
  top: 0;
  height: 100%;
  animation: ${cloudSlide} linear infinite 60s;
  z-index: -1;
`;
const ContactBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;
const ContactBox = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-around;
  max-width: 32rem;
`;
const ContactBoxLink = styled(OutboundLink)`
  width: 5rem;
  height: 5rem;
  margin: 1rem;

  transition: transform 100ms, box-shadow 100ms;
  transform: translateY(0);

  border: 2px solid #444;
  border-radius: 22px;
  box-shadow: 1px 1px 2px #444;
  &:hover {
    transition: transform 250ms, box-shadow 250ms;
    transform: translateY(-2px);

    box-shadow: 2px 2px 8px #444;

    will-change: contents;
  }
  &:active {
    transition: transform 250ms, box-shadow 250ms;
    transform: translateY(-1px);

    box-shadow: 1px 1px 4px #444;
  }
  box-sizing: border-box;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = { mailto: '' };

    this.handleEmail = this.handleEmail.bind(this);
  }

  handleEmail() {
    this.setState(
      {
        mailto: 'minaandmargot@gmail.com'
      },
      () => {
        window.setTimeout(() => {
          this.setState({ mailto: '' });
        }, 2000);
      }
    );
  }

  render() {
    return (
      <ContactBody>
        <Clouds id="clouds" src={clouds} alt="clouds" />
        <Ribbon title="Contact Us" startOffset="12%" />
        <Profile
          image={quyen}
          name="Quyen"
          roles="Librarian, Crafter, Auntie."
          description="Quyen lives with her husband, Brandon, their two mischievous Chihuahuas, and a fluffy rescue cat."
        />
        <Profile
          image={rachel}
          name="Rachel"
          roles="Lover of flowers, farms, and fun vintage finds."
          description="Mother of Margot and two furry doggies. Wonderful wife to Mitchell."
        />
        <ContactBox className="contact-box">
          <ContactBoxLink
            eventLabel="Clicked Etsy link"
            to="https://www.etsy.com/shop/MINAandMARGOT"
            className="contact-box__link"
            style={{ backgroundColor: '#eee', boxSizing: 'border-box', padding: '1rem' }}>
            <img src={etsy} alt="etsy" />
          </ContactBoxLink>
          <ContactBoxLink
            eventLabel="Clicked Facebook link"
            to="https://www.facebook.com/minaandmargot/"
            className="contact-box__link">
            <img src={facebook} alt="facebook" />
          </ContactBoxLink>
          <ContactBoxLink
            eventLabel="Clicked Instagram link"
            to="https://www.instagram.com/minaandmargot/"
            className="contact-box__link">
            <img src={instagram} alt="instagram" />
          </ContactBoxLink>
          <ContactBoxLink
            eventLabel="Clicked Email link"
            className="contact-box__link"
            href={`mailto:${this.state.mailto}`}
            onClick={this.handleEmail}>
            <img src={email} alt="email" />
          </ContactBoxLink>
        </ContactBox>
      </ContactBody>
    );
  }
}
