import React, { Component } from "react";
import Iframe from "react-iframe";
import { Form, Button, Col, Row, Jumbotron } from "react-bootstrap";
import "./css/Contact.css";

export class Contact extends Component {
	displayName = Contact.name;

	constructor(...args) {
		super(...args);

		this.state = { validated: false };
	}

	handleSubmit(event) {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		this.setState({ validated: true });
	}

	render() {
		const { validated } = this.state;
		return (
			<div className="contact content">
				<h1>Contact Info</h1>
				<Jumbotron className="ml-auto mr-auto">
					<h3>Lopez Auto Sales</h3>
					<hr/>
					<p>Phone: <a href="tel:6202086250">(620)208-6250</a></p>
					<p>Email: <a href="mailto:lopezautosales@outlook.com">lopezautosales@outlook.com</a></p>
					<p>Google Business Page: <a href="https://goo.gl/maps/hHPXpTLZfi7jtrpKA" target="_blank" rel="noopener noreferrer">Click Here</a></p>
					<br />
					<p>We have google business messaging enabled and are quick to reply (&lt;1 hour).</p>
					<br />
					<p>We'd appreciate if you take some time to write a review or leave some feedback.</p>
				</Jumbotron>
				<div className="resizable">
					<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.601869369109!2d-96.20785868470546!3d38.404453579649825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b94e781bbffbe7%3A0xd3590d9ae4f13aac!2sLopez+Auto+Sales!5e0!3m2!1sen!2sus!4v1558552913321!5m2!1sen!2sus" allowFullScreen />
				</div>
				<Form noValidate validated={validated} onSubmit={e => this.handleSubmit(e)}>
					<h3>Send us a message</h3>
					<Form.Group as={Row} controlId="formEmail">
						<Form.Label column sm={2}> Email </Form.Label>
						<Col sm={4}><Form.Control required type="email" placeholder="Enter Email" /></Col>
					</Form.Group>
					<Form.Group as={Row} controlId="formTextArea">
						<Form.Label column sm={2}> Message </Form.Label>
						<Col sm={8}><Form.Control required as="textarea" rows="3" /></Col>
					</Form.Group>
					<Button variant="secondary" type="submit">Submit</Button>
				</Form>
			</div>
		);
	}
}