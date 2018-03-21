import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import { connect } from 'react-redux';
import * as actions from '../../../actions';
import ZoomControl from 'react-leaflet/lib/ZoomControl';
import MapDrawComponent from './MapDrawComponent';

import Paper from 'material-ui/Paper';

import './customLeafletDraw.css';
// import myPolygon from './test_polygon';

let mapCSS = {
	height: '500px'
};
const mapCenterCoords = [30.2764099, -97.7507724];


function getMarkers() {
	const elems = [
		[30.2764099, -97.7507724],
		[30.2764099, -97.7607724],
		[30.2764099, -97.7707724]
	];
	return elems;
}
  
class MapElement extends Component {
	testDev = (e) => {
		console.log('tested click with ', e);
	}
	render() {
		const customMarkers = getMarkers();
		const devTypes = this.props.devWorkbook.workbook_devtypes;
		// console.log(devTypes);
		return (
			<Map style={mapCSS} 
				center={mapCenterCoords} 
				zoom={13} 
				zoomControl={false}
				className="map"
				scrollWheelZoom={false}
				>
				<ZoomControl position="topright" />
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


				<Paper variant="raised" 
					color="primary" 
					style={{ position:'relative',
						zIndex: '1000',
						left: '0px',
						margin: '0px',
						padding: '10px',
						width:'226px',
						top: '0px'}}
						>
					Select Tool:
				</Paper>


				<Paper variant="raised" 
					color="primary" 
					style={{ position:'relative',
						zIndex: '1000',
						left: '0px',
						margin: '0px',
						padding: '10px',
						width:'226px',
						top: '0px'}}
						>
					Choose Development Type: <br />
					{
						devTypes.map( (item, idx) => {
							return (
								<div key={idx}>
									<Button variant="raised" 
										color="secondary" 
										style={{ position:'relative',
											margin: '5px',
											padding: '5px',
											width:'90%'}}
										onClick={()=>this.testDev(item.devTypeName) } 
										> {item.devTypeName} 
									</Button>
								</div>
							);
						})
					}
				</Paper>

				<MapDrawComponent  {...this.props}/>
			</Map>
		);
	}
}

class MapStart extends Component {
    handleNavigation = val => {
		this.props.history.push(val);
	}
	
	render() {
		return (
			<Grid >
				<Grid item sm={12} >
					<h2>Step Three: Map the Site</h2>
					
					<Button variant="raised" 
						color="primary" 
						onClick={()=>this.handleNavigation('metrics')}>
						Metrics 
					</Button>

				</Grid>
				<Grid item xs={12} style={{ marginTop: '20px' }}>
					<MapElement {...this.props} />
				</Grid>

			</Grid>
		);
	}
}

function mapStateToProps(state) {  
	return { 
		  devWorkbook: state.devWorkbook,
		  baseMapLayer: state.baseMapLayer
	   };
}

export default connect(mapStateToProps, actions)(MapStart);