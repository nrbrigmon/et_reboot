import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import ZoomControl from 'react-leaflet/lib/ZoomControl';
import MapDrawComponent from './MapDrawComponent';
import MapOverlayPanel from './MapOverlayPanel';
import MapContainer2 from './MapContainer2';

const mapCSS = {
	height: '500px',
    outline:"1px solid blue"
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
function paintedStyle(feature) {
	let { properties } = feature;
	// console.log(properties);
	return {
			fillColor: ( properties.activeDevType ? properties.activeDevType.devTypeColor : "#ccc" ),
			fillOpacity: 0.4,
			color: '#333333',  //stroke outline color
			opacity: 0.5,
			weight: 1
	};
}
class MapRowComponent extends Component {
	_state = null;
	componentDidMount(){
		this.props.setMapReference(this.refs.map.leafletElement)
		console.log(this.refs.map)
	}
	
	render() {
		const customMarkers = getMarkers();
		const { features } = this.props.baseMapLayer[0];
		if (this.props.leafletDrawTrigger === "updateBaseLayer"){
			this.props.setDrawTrigger('');
			this.forceUpdate();
		}
		return (
			<span>
				<MapOverlayPanel {...this.props} />	
				<MapContainer2/>
						
				{/* <Map
					ref='map'
					style={mapCSS} 
					center={mapCenterCoords} 
					zoom={16} 
					zoomControl={false}
					className="map"
					scrollWheelZoom={false}
					editable={true}
					>
					<ZoomControl position="topright" />
					<MapDrawComponent {...this.props} />

					{ 
						features.map( (geoElem, idx) => {
							return (
								<GeoJSON  key={idx} data={geoElem} style={paintedStyle} />					
							)
						}) 
					}

					{customMarkers.map((marker, idx) => (
						<Marker position={marker} key={idx}>
							<Popup>
								<span>
									A pretty CSS3 popup at position?<br />Easily customizable.
								</span>
							</Popup>
						</Marker>
					))};
					
					<TileLayer
						url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
						attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					/>
				</Map> */}
			</span>
		)
	}
}

function mapStateToProps(state) {  
	return { 
		  devWorkbook: state.devWorkbook,
		  baseMapLayer: state.baseMapLayer,
		  mapRef: state.mapRef,
		  leafletDrawTrigger: state.leafletDrawTrigger,
		  activeDevType: state.activeDevType
	   }
}

export default connect(mapStateToProps, actions)(MapRowComponent)