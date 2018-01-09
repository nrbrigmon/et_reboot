import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GalleryStart extends Component {
	render() {
		return (
			<div className="row">
				<div className="col s12 center-align">
					<h2>Welcome to the Gallery!</h2>
					{/* COLUMN #1 */}
					<div className="row">
						<div className="col s6">
							<div className="center-align">
								1. Explore buildings 2. Explore sites 3. Download data
							</div>
						</div>
						{/* COLUMN #2 */}
						<div className="col s6">
							<div className="center-align">landing page for gallery</div>
						</div>
					</div>
					<Link className="waves-effect waves-light btn" to="/">
						Back
					</Link>
				</div>
			</div>
		);
	}
}

export default GalleryStart;
