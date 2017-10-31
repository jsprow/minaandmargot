import React, { Component } from 'react'

import Carousel from 'nuka-carousel'

import './css/Gallery.css'

import gallery1 from './../images/gallery/gallery1.jpg'
import gallery2 from './../images/gallery/gallery2.jpg'
import gallery3 from './../images/gallery/gallery3.jpg'
import gallery4 from './../images/gallery/gallery4.jpg'
import gallery5 from './../images/gallery/gallery5.jpg'
import gallery6 from './../images/gallery/gallery6.jpg'
import gallery7 from './../images/gallery/gallery7.jpg'
import gallery8 from './../images/gallery/gallery8.jpg'

const imagePaths = [
	gallery1,
	gallery2,
	gallery3,
	gallery4,
	gallery5,
	gallery6,
	gallery7,
	gallery8
]

export default class Gallery extends Component {
	constructor(props) {
		super(props)

		this.state = { images: [] }
	}
	componentWillMount() {
		let images = imagePaths.map((image, index) => {
			return <img src={image} key={index} alt={`gallery${index}`} />
		})

		this.setState({ images: images })
	}
	render() {
		return (
			<div className="gallery">
				<Carousel children={this.state.images} />
			</div>
		)
	}
}
