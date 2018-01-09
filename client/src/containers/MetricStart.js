import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MetricStart extends Component {
	render() {
		return (
			<div className="row">
				<div className="col s12 center-align">
					<h2>Step Four: Analyze Metrics</h2>
					{/* COLUMN #1 */}
					<div className="row">
						<div className="col s6">
							<div className="center-align">
								1. what does this tell you<br />
								2. can you add custom metrics?
							</div>
						</div>
						{/* COLUMN #2 */}
						<div className="col s6">
							<div className="center-align">landing page for metrics</div>
						</div>
					</div>
					<Link className="waves-effect waves-light btn" to="/">
						Start over
					</Link>
				</div>
			</div>
		);
	}
}

export default MetricStart;
