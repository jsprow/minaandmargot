import React, { Component } from 'react'

import './css/Reveal.css'

export default class Reveal extends Component {
	render() {
		return <div className={`reveal ${this.props.state}`} />
	}
}
