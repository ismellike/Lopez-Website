import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './css/NavMenu.css';

export class NavMenu extends Component {
	displayName = NavMenu.name

	render() {
		return (
			<Navbar staticTop>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to={'/'}><img src="./favicon.ico" alt="Logo" />Lopez Auto Sales</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<LinkContainer to={'/'} exact>
							<NavItem>
								<Glyphicon glyph='home' /> Home
              </NavItem>
						</LinkContainer>
						<LinkContainer to={'/about'}>
							<NavItem>
								<Glyphicon glyph='th-list' /> About
              </NavItem>
						</LinkContainer>
						<LinkContainer to={'/contact'}>
							<NavItem>
								<Glyphicon glyph='phone' /> Contact
              </NavItem>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}