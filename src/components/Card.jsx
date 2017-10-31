import React, { Component } from 'react'

import './css/Card.css'

import Ribbon from './Ribbon.jsx'

export default class Card extends Component {
	render() {
		return (
			<figure className="card">
				<Ribbon title={this.props.title} color={this.props.color} />
				<footer className="card-body">
					<div className="card-body__image">
						{this.props.image}
					</div>
					<div className="card-body__text">
						Before they sold out DIY iPhone retro PBR four loko put a bird on it narwhal Brooklyn beard keffiyeh asymmetrical photo booth wolf banh mi craft beer mustache plaid heirloom single-origin coffee McSweeney's blog twee biodiesel seitan distillery mlkshk tofu cornhole skateboard YOLO ugh shabby chic vinyl Echo Park sartorial PBR&B Blue Bottle normcore jean shorts bicycle rights Godard hashtag Odd Future yr viral lo-fi master cleanse Pinterest Carles cliche +1 sustainable readymade literally wayfarers mumblecore chillwave leggings occupy pug Neutra kogi Marfa Vice fap pickled typewriter hella Austin synth selfies quinoa tote bag aesthetic fingerstache authentic umami American Apparel church-key pop-up food truck farm-to-table semiotics Truffaut messenger bag ethical Wes Anderson flannel post-ironic salvia polaroid fixie vegan paleo whatever freegan High Life pour-over cray cardigan Pitchfork hoodie you probably haven't heard of them chambray VHS Helvetica Williamsburg roof party cred letterpress forage try-hard stumptown slow-carb Bushwick trust fund Banksy deep v drinking vinegar next level direct trade  gastropub gentrify XOXO 3 wolf moon tousled Cosby sweater flexitarian Kickstarter squid bespoke irony lomo gluten-free Intelligentsia sriracha tattooed Shoreditch brunch kitsch selvage dreamcatcher keytar meh banjo scenester pork belly disrupt Thundercats Schlitz ennui street art kale chips small batch bitters locavore Tumblr mixtape fanny pack art party 8-bit organic actually fashion axe chia meggings butcher raw denim artisan swag 90's Etsy crucifix Portland Tonx
					</div>
				</footer>
			</figure>
		)
	}
}
