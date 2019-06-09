import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./css/NavMenu.css";

export class NavMenu extends Component {
	displayName = NavMenu.name;

	render() {
		return (
			<Navbar className="justify-content-between" expand="lg">
				<Navbar.Brand>
					<Link to={"/"}><img src="./favicon.ico" alt="Logo" />Lopez Auto Sales</Link>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav className="ml-auto">
						<LinkContainer to={"/"} exact>
							<Nav.Item className="nav-link"><i className="fas fa-home" />Home</Nav.Item>
						</LinkContainer>
						<LinkContainer to={"/about"}>
							<Nav.Item className="nav-link"><i className="fas fa-info-circle" />About</Nav.Item>
						</LinkContainer>
						<LinkContainer to={"/contact"}>
							<Nav.Item className="nav-link"> <i className="fas fa-phone" />Contact </Nav.Item>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}