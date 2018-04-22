import React, { Component } from 'react';

import { OutboundLink } from 'react-ga';

import OurStory from './OurStory.jsx';
import Banner from './Banner.jsx';
import ContactUs from './ContactUs.jsx';
import Gallery from './Gallery.jsx';
import Reveal from './Reveal.jsx';
import Section from './Section.jsx';

import './css/App.css';

import logo from './../images/logo.svg';

const https = require('https');
const token = '6214262912.1677ed0.dd37f40e52b64c77ac787c09f29d764a';
const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reveal: 'hidden'
    };
  }
  componentWillMount() {
    https.get(url, res => {
      let body = '';

      res.on('data', chunk => {
        body += chunk;
      });

      res.on('end', () => {
        let media = JSON.parse(body).data,
          images = media
            .map((image, index) => {
              return (
                <div
                  key={index}
                  style={{
                    backgroundImage: `url(${image.images.standard_resolution.url})`,
                    backgroundSize: 'cover',
                    height: '26em',
                    width: '26em'
                  }}
                />
              );
            })
            .filter(Boolean);

        this.setState({ images: images });
      });
    });
  }
  componentDidMount() {
    window.addEventListener('load', () => {
      console.log('loaded');
      this.setState({ reveal: '' });
    });
  }
  render() {
    return (
      <div className="App">
        <Reveal state={this.state.reveal} />
        <Banner logo={logo} />
        <h1 style={{ width: '100%', textAlign: 'center' }}>
          Find us on{' '}
          <OutboundLink
            className="app-alert"
            eventLabel="Clicked Etsy Link in alert"
            to="https://www.etsy.com/shop/MINAandMARGOT">
            Etsy
          </OutboundLink>{' '}
          to make a purchase!
        </h1>
        <Section component={<OurStory />} />
        <Section component={<Gallery />} />
        <Section component={<ContactUs />} />
      </div>
    );
  }
}
