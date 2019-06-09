import React, { Component } from "react";
import "./css/Home.css";

export class Home extends Component {
	displayName = Home.name;

	render() {
		return (
			<div className="home content">
				<h1>Inventory</h1>
			</div>
		);
	}
}