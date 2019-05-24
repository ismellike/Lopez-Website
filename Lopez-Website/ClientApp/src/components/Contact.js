import React, { Component } from 'react';
import Iframe from 'react-iframe';
import { InputGroup, Label, FormControl } from 'react-bootstrap';
import './css/Contact.css';

export class Contact extends Component {
	displayName = Contact.name

	render() {
		return (
			<div className="content">
				<h1>Contact Info</h1>
				<div className="container">
					<div>
						<h4>Hours</h4>
						<hr />
						<p>Monday-Saturday: 10am-6pm</p>

						<Label for="inputText">Message</Label>
						<InputGroup>
							<FormControl as="textarea" aria-label="With textarea" />
						</InputGroup>
					</div>
					<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.601869369109!2d-96.20785868470546!3d38.404453579649825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b94e781bbffbe7%3A0xd3590d9ae4f13aac!2sLopez+Auto+Sales!5e0!3m2!1sen!2sus!4v1558552913321!5m2!1sen!2sus"
						width="600"
						height="450"
						allowFullScreen />
				</div>
			</div>
		);
	}
}