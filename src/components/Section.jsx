import React, { Component } from 'react'

import './css/Section.css'

export default class Section extends Component {
	render() {
		return (
			<div className="section">
				{this.props.component}
			</div>
		)
	}
}
