import React, { Component } from "react";
import "./css/Home.css";

export class Home extends Component {
	displayName = Home.name;

	constructor(props) {
		super(props);
		this.state = { vehicles: [], loading: true };

		fetch('api/Vehicles/FetchVehicles')
			.then(response => response.json())
			.then(data => {
				this.setState({ vehicles: data, loading: false });
			});
	}

	render() {

		return (
			<div className="home content">
				<h1>Inventory</h1>
			</div>
		);
	}
}