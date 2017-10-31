import React, { Component } from 'react'

import Carousel from 'nuka-carousel'

import Banner from './Banner.jsx'
import Card from './Card.jsx'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

import './css/App.css'

import logo from '../images/logo.svg'
import placeholder from '../images/onsie.jpg'

const https = require('https')
const token = '6214262912.1677ed0.dd37f40e52b64c77ac787c09f29d764a'
const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`

export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			images: (
				<img
					src={placeholder}
					style={{ height: '26em', width: '26em' }}
					alt="instagram1"
				/>
			),
			reveal: 'hidden'
		}
	}
	componentWillMount() {
		https.get(url, res => {
			let body = ''

			res.on('data', chunk => {
				body += chunk
			})

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
							)
						})
						.filter(Boolean)

				this.setState({ images: images })
			})
		})
	}
	componentDidMount() {
		window.addEventListener('load', () => {
			console.log('loaded')
			this.setState({ reveal: '' })
		})
	}
	render() {
		return (
			<div className="App">
				<Reveal state={this.state.reveal} />
				<Banner logo={logo} />
				<Section
					component={[
						<h1 style={{width: '100%', textAlign: 'center'}}>Under Construction... Check Back Later For More Stuff!</h1>
					]}
				/>
			</div>
		)
	}
}
