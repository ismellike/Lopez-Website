import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';

export class Layout extends Component {
	displayName = Layout.name

	render() {
		return (
			<Grid fluid>
				<Row>
					<Col>
						<NavMenu />
						{this.props.children}
						<Footer />
					</Col>
				</Row>
			</Grid>
		);
	}
}