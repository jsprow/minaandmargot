import React, { Component } from 'react';

import { event } from 'react-ga';

import Carousel from 'nuka-carousel';

import styled from 'styled-components';

import Ribbon from './Ribbon.jsx';
import Box, { Text, Title } from './Box.jsx';
import { Row } from './Grid.jsx';

import gallery1 from './../images/gallery/gallery1.jpg';
import gallery2 from './../images/gallery/gallery2.jpg';
import gallery3 from './../images/gallery/gallery3.jpg';
import gallery4 from './../images/gallery/gallery4.jpg';
import gallery5 from './../images/gallery/gallery5.jpg';
import gallery6 from './../images/gallery/gallery6.jpg';
import gallery7 from './../images/gallery/gallery7.jpg';
import gallery8 from './../images/gallery/gallery8.jpg';

const imagePaths = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

const GalleryBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 90%;

  .slider-frame {
    box-shadow: 2px 2px 8px #444;
    border: 4px solid #444;
    border-radius: 1rem;
    margin: 1rem;
  }
`;
const StyledCarousel = styled(Carousel)`
  max-width: 95vw !important;
`;

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }
  componentWillMount() {
    let images = imagePaths.map((image, index) => {
      return <img src={image} key={index} alt={`gallery${index}`} />;
    });

    this.setState({ images: images });
  }
  render() {
    return (
      <GalleryBody>
        <Ribbon title="Our Clothing" startOffset="8%" />
        <Row>
          <StyledCarousel
            afterSlide={() => event({ category: 'User', action: 'Clicked on gallery navigation' })}
            children={this.state.images}
            width="32rem"
            wrapAround={true}
          />
          <Box style={{ margin: '1rem 0' }}>
            <Title text="Currently offering sizes Preemie through 18 months." />
            <Text>
              <p>
                Due to the handmade nature of these items, there will be variations in print placement and occasional
                cracking. We love the look of handmade, and we hope you will too!
              </p>
              <p>These items are created with love in smoke-free, pet-friendly homes.</p>
              <p>
                We include care instructions with each order. We recommend spot washing when possible. Wash inside out,
                COLD water, like colors, and gentle soap. Hang dry preferred, gentle cycle as needed. If ironing, make
                sure that you place a non-stick and heat resistant material between the fabric and the iron. We suggest
                parchment paper or a paper bag.
              </p>
            </Text>
          </Box>
        </Row>
      </GalleryBody>
    );
  }
}
