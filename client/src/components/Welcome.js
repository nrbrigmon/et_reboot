import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let margin0 = {
	margin: '0 auto',
	maxWidth: '450px'
};

class Welcome extends Component {
	render() {
		return (
			<div className="row">
				<div className="col s12 center-align">
					<h2>Be a Developer</h2>
				</div>

				<div className="row">
					<div className="col s12">
						<div className="col s6 valign-wrapper">
							<div className="card blue-grey darken-1" style={margin0}>
								<div className="card-content white-text">
									<span className="card-title">Build and Analyze</span>
									<p>
										Build a development from scratch or use existing data
										approved by others.
									</p>
								</div>
								<div className="card-action">
									<Link to="/create">Start here</Link>
								</div>
							</div>
						</div>

						<div className="col s6 valign-wrapper">
							<div className="card blue-grey darken-1" style={margin0}>
								<div className="card-content white-text">
									<span className="card-title">Explore the Gallery</span>
									<p>
										Explore datasets, maps, ideas, and designs created by the
										community.
									</p>
								</div>
								<div className="card-action">
									<Link to="/gallery">Start here</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col s12">
						<div className="col s12 valign-wrapper">
							<div className="col s12 valign-wrapper">
								<div className="card blue-grey darken-1" style={margin0}>
									<div className="card-content white-text">
										<span className="card-title">The Business Case</span>
										<p>
											Why this application? What problems does it solve and to
											whom is it targeted?
										</p>
									</div>
									<div className="card-action">
										<Link to="/pitch">Start here</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Welcome;
