import React, { Component } from 'react';

import Ribbon from './Ribbon.jsx';
import Box, { Title, Text } from './Box.jsx';

import flock from './../images/flock.svg';

import styled, { keyframes } from 'styled-components';

const OurStoryBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;
const flockSlide = keyframes`
0% {
    opacity: 0;
    transform: translate(20rem, 2rem);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-20rem, -2rem);
  }
`;
const FlockOfBirds = styled.img`
  animation: ${flockSlide} linear infinite 120s;
`;

export default class OurStory extends Component {
  render() {
    return (
      <OurStoryBody>
        <FlockOfBirds src={flock} alt="flock" style={{ position: 'absolute', top: 0, height: '100%', zIndex: '0' }} />
        <Ribbon title="Our Story" startOffset="15%" style={{ top: '-5rem' }} />
        <Box style={{ zIndex: 1 }}>
          <Title text="Welcome to Mina and Margot!" />
          <Text>
            <p>
              We are a team of two, Quyen & Rachel. Our style is inspired by rebus (word/picture) puzzles, vintage
              modern flair, and a little bit of "punny" humor.
            </p>
            <p>
              Mina and Margot came to be after the tragic loss of Quyen's niece, Mina, and Rachel's daughter, Margot,
              who were both born prematurely. We love our girls, and we wanted to create something to keep their memory
              alive.
            </p>
            <p>
              We truly believe that all lives, no matter how small, can make a difference in our world. A portion of the
              proceeds from every item will be donated to NICU and Pregnancy & Infant Loss charities in their honor.
            </p>
          </Text>
        </Box>
      </OurStoryBody>
    );
  }
}
