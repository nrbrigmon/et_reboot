import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DevTypeStart extends Component {
	render() {
		return (
			<div className="row">
				<div className="col s12 center-align">
					<h2>Step Two: Create Developments Types</h2>
					{/* COLUMN #1 */}
					<div className="row">
						<div className="col s6">
							<div className="center-align">
								1. build streets<br />
								2. add building mix
							</div>
						</div>
						{/* COLUMN #2 */}
						<div className="col s6">
							<div className="center-align">data entry for types</div>
						</div>
					</div>
					<Link className="waves-effect waves-light btn" to="/map">
						Step Three
					</Link>
				</div>
			</div>
		);
	}
}

export default DevTypeStart;
