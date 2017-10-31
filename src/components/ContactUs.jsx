import React, { Component } from 'react'

import './css/ContactUs.css'

import ribbon from './../images/contact_ribbon.svg'
import instagram from './../images/instagram.svg'
import facebook from './../images/facebook.svg'
import email from './../images/email.svg'

export default class ContactUs extends Component {
    constructor(props) {
        super(props)
         this.state={mailto: ''}
    }
	render() {
		return (
			<div className="contact">
				<img
					className="contact-ribbon"
					src={ribbon}
					alt="contact-ribbon"
				/>
				<div className="contact-box">
					<a
						className="contact-box__link"
						href="https://www.facebook.com/minaandmargot/"
					>
						<img src={facebook} alt="facebook" />
					</a>
					<a
						className="contact-box__link"
						href="https://www.instagram.com/minaandmargot/"
					>
						<img src={instagram} alt="instagram" />
					</a>
					<a
						className="contact-box__link"
						href={`mailto:${this.state.mailto}`}
					>
						<img src={email} alt="email" />
					</a>
				</div>
			</div>
		)
	}
}
