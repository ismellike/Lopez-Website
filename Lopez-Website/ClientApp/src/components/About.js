import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import "./css/About.css";

export class About extends Component {
	displayName = About.name;

	render() {
		return (
			<div className="about content">
				<h1>About Us</h1>

				<table>
					<tbody>
						<tr>
							<td>
								<Jumbotron>
									<strong>Financing</strong>
									<hr />
									<p>We do in-house financing with no interest. However, we will not go down on the price.</p>
									<p>We do not deal with credit.</p>
									<p>We ask for 1/2 of the vehicle's price as a down payment, and $300 as monthly payments.</p>
								</Jumbotron>
							</td>
							<td>
								<Jumbotron>
									<strong>Towing</strong>
									<hr />
									<p>We run a towing service known as Lopez Towing</p>
									<p>Call to find our rates to you.</p>
									<p><a href="tel:6207570372">(620)757-0372</a></p>
								</Jumbotron>
							</td>
						</tr>
						<tr>
							<td>
								<Jumbotron>
									<strong>Auto Repair</strong>
									<hr />
									<p>Our vehicles are inspected and maintained by the owner, an experienced car mechanic, at Lopez Auto Repair.</p>
									<p>Our standard warranty is 20% on engine and transmission for 30 days or 1000 miles</p>
								</Jumbotron>
							</td>
							<td>
								<Jumbotron>
									<strong>Test Drives</strong>
									<hr />
									<p>We allow test drives for a maximum of 30 minutes.</p>
									<p>We advise our customers to test drive and take the vehicle to their own trusted mechanics before purchasing a vehicle.</p>
								</Jumbotron>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}