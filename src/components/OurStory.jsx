import React, { Component } from 'react';

import Ribbon from './Ribbon.jsx';
import Box, { Title, Text } from './Box.jsx';

import './css/OurStory.css';

export default class OurStory extends Component {
  render() {
    return (
      <div className="our-story">
        <Ribbon title="Our Story" startOffset="15%" style={{ top: '-5rem' }} />
        <Box>
          <Title text="Welcome to Mina and Margot!" />
          <Text>
            <p>
              We are a team of two (Quyen + Rachel) drawing up designs and slapping them onto anything we can get our
              hands on! Our style is inspired by rebus (word/picture) puzzles, vintage modern flair, and a little bit of
              "punny" humor.
            </p>
            <p>
              Mina and Margot came to be after the tragic loss of Quyen's niece, Mina, and Rachel's daughter, Margot,
              who were both born prematurely. We love our girls, and we wanted to create something to keep their memory
              alive.
            </p>
            <p>
              We truly believe that all lives, no matter how small, can make a difference in our world. A portion
              of the proceeds from every item will be donated to NICU and Pregnancy & Infant Loss charities in their
              honor.
            </p>
          </Text>
        </Box>
      </div>
    );
  }
}
