import React, { Component } from 'react'

import './css/Banner.css'

export default class Banner extends Component {
	render() {
		return (
			<div className="banner">
				<img className="banner-logo" src={this.props.logo} alt="logo" />
			</div>
		)
	}
}
