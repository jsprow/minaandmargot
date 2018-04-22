import React, { Component } from 'react';

import './css/ContactUs.css';

import Ribbon from './Ribbon.jsx';
import Profile from './Profile.jsx'

import etsy from './../images/etsy.svg';
import instagram from './../images/instagram.svg';
import facebook from './../images/facebook.svg';
import email from './../images/email.svg';

import quyen from './../images/quyen.jpg'
import rachel from './../images/rachel.jpg'

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
      <div className="contact">
        <Ribbon title="Contact Us" startOffset="5%" />
        <Profile  image={quyen} name="Quyen" roles="Librarian, Crafter, Auntie." description="Quyen lives with her husband, Brandon, their two mischievous Chihuahuas, and a fluffy rescue cat."/>
        <Profile  image={rachel} name="Rachel" roles="Lover of flowers, farms, and fun vintage finds." description="Mother of Margot and two furry doggies. Wonderful wife to Mitchell. 
"/>
        <div className="contact-box">
          <a className="contact-box__link" href="https://www.etsy.com/shop/MINAandMARGOT" style={{ backgroundColor: '#eee', boxSizing: 'border-box', padding: '1rem'}}>
            <img src={etsy} alt="etsy" />
          </a>
          <a className="contact-box__link" href="https://www.facebook.com/minaandmargot/">
            <img src={facebook} alt="facebook" />
          </a>
          <a className="contact-box__link" href="https://www.instagram.com/minaandmargot/">
            <img src={instagram} alt="instagram" />
          </a>
          <a className="contact-box__link" href={`mailto:${this.state.mailto}`} onClick={this.handleEmail}>
            <img src={email} alt="email" />
          </a>
        </div>
      </div>
    );
  }
}
