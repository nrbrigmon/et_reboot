import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

let mapCSS = {
	height: '500px'
};

const position = [30.2764099, -97.7507724];

function getMarkers() {
	const elems = [
		[30.2764099, -97.7507724],
		[30.2764099, -97.7607724],
		[30.2764099, -97.7707724]
	];
	return elems;
}

class MapElement extends Component {
	render() {
		const customMarkers = getMarkers();
		return (
			<Map style={mapCSS} center={position} zoom={13} className="map">
				<TileLayer
					url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
					attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
				/>
				{customMarkers.map((marker, idx) => (
					<Marker position={marker} key={idx}>
						<Popup>
							<span>
								A pretty CSS3 popup at position?<br />Easily customizable.
							</span>
						</Popup>
					</Marker>
				))};
			</Map>
		);
	}
}

class MapStart extends Component {
	render() {
		return (
			<div className="row">
				<div className="col s12 center-align">
					<h2>Step Three: Map the Site</h2>
					{/* COLUMN #1 */}
					<div className="row">
						<div className="col s6">
							<div className="center-align">
								1. choose your site<br />
								2. paint your development
							</div>
						</div>
						{/* COLUMN #2 */}
						<div className="col s6">
							<div className="center-align">landing page for mapping</div>
						</div>
					</div>
				</div>
				<div className="col s12" style={{ marginTop: '20px' }}>
					<MapElement />
				</div>
				<div className="col s12 center-align">
					<Link className="waves-effect waves-light btn" to="/metrics">
						Review Metrics
					</Link>
				</div>
			</div>
		);
	}
}

export default MapStart;
