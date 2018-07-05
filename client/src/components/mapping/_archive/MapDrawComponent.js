import React, { Component } from 'react';
import { EditControl } from "react-leaflet-draw"
import { FeatureGroup } from 'react-leaflet';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import L from 'leaflet';
import * as _ from 'lodash';


class MapDrawComponent extends Component {

	_editableFG = null  
	_drawControl = null;
	_mapRef = null;
	_drawAction = null;
	_baseMapAdded = false;
	
	_onCreated = (e) => {
		// console.log('over here? ',e)
		let layer = e.layer;
		let bbox = e.layer._bounds;
		let leafletFG = this._editableFG.leafletElement;
		// probably need to get zoom level? or bbox length/wideth to adjust
		// cellside of triangle grid...
		// if this is a base layer we create a Triangle Grid
		if (this.props.leafletDrawTrigger === 'baseLayer'){
			this.props.setDrawTrigger('addBaseLayer');
			let lat1 = _.get(bbox, '_southWest').lat;
			let lng1 = _.get(bbox, '_southWest').lng;        
			let lat2 = _.get(bbox, '_northEast').lat;
			let lng2 = _.get(bbox, '_northEast').lng;
			// access shape from FeatureClass and remove
			let shapes = {
				"bboxArray": [ lng1, lat1, lng2, lat2 ],
				"src": layer.toGeoJSON()
			};
			this.props.createTriangleGrid(shapes);
			leafletFG.removeLayer(layer);
			this._drawAction.disable();	
		} else {
			// if this is a paint layer, we do something different
			this.props.setDrawTrigger('updateBaseLayer');
			let paintLayer = layer.toGeoJSON().geometry.coordinates;
			let baseLayer = this.props.baseMapLayer[0].features;
			let { activeDevType } = this.props;
			this.props.paintDevelopmentType({baseLayer, paintLayer, activeDevType});
			leafletFG.removeLayer(layer);
		}
			
	}

	_onMounted = (drawControl) => {
		// Set the button title text for the polygon button
		// console.log(drawControl);
		// console.log(this.props.mapRef);
			this._drawControl = drawControl;
			this._mapRef = this.props.mapRef;
	}

	_addBaseLayerToMap = (newLayer) => {
		//need a method to remove existing layer if already exists....
		// this._editableFG = new L.GeoJSON(newLayer, {style: baseMapStyle} );
		// let leafletFG = this._editableFG.leafletElement;
		
		// this._editableFG.eachLayer( (layer) => {
		// 	leafletFG.addLayer(layer);
		// });
	}

	_updateBaseLayerOnMap = (newLayer) => {
		//need a method to remove existing layer if already exists....
		console.log('_updateBaseLayerOnMap');		
	}

	_drawBaseLayer = () => {
			this._drawAction = new L.Draw.Polygon(this._mapRef, this._drawControl.options.polygon);
			this._drawAction.enable();	 
	}
	
	_paintBaseLayer = () => {
		// console.log(activeDevType);
		//need a method to remove existing layer if already exists....
		this._drawAction = new L.Draw.Polygon(this._mapRef, this._drawControl.options.polygon);
		this._drawAction.enable();	
	}

	componentDidUpdate(prevProps){
		console.log('leaflet trigger: ', prevProps.leafletDrawTrigger);
		if (this.props.leafletDrawTrigger === prevProps.leafletDrawTrigger){
			return;
		} else {
			let { leafletDrawTrigger } = this.props;
			if (leafletDrawTrigger === 'baseLayer'){
				this._drawBaseLayer();
			} else if (leafletDrawTrigger === 'paintLayer'){
				this._paintBaseLayer();
			} else if (leafletDrawTrigger === 'addBaseLayer'){
				this._addBaseLayerToMap(this.props.baseMapLayer[0]); 
			} else if (leafletDrawTrigger === 'updateBaseLayer'){
				this._updateBaseLayerOnMap(this.props.baseMapLayer[0]); 
			} else if (leafletDrawTrigger === 'deleteLastPoint'){
				this._drawAction.deleteLastVertex();	
			} else if (leafletDrawTrigger === 'finishLayer'){
				this._drawAction.completeShape();
			} else if (leafletDrawTrigger === 'cancelLayer'){
				this._drawAction.disable();	
			} else {
				// console.log('else rreturn')
				// console.log(props.baseMapLayer);
				// return;
			}
		}
		
	}

	render() {
			// const { baseMapLayer } = this.props
			var editableLayer = new L.FeatureGroup();
			return (
				<FeatureGroup ref={ (reactFGref) => {this._onFeatureGroupReady(reactFGref);} }>
					<EditControl 
						position="topleft"
						onCreated={this._onCreated}
						onMounted={this._onMounted}
						draw={{
							// polyline: false,
							// polygon: false,
							// rectangle: false,
							circle: false,
							circlemarker: false,
							marker: false
						}}
						edit={{
							featureGroup: editableLayer,
							allowIntersection: false
						}}
					/>
								
				</FeatureGroup>
			);
	}
  
    _onFeatureGroupReady = (reactFGref) => {
		// console.log(this.props.baseMapLayer[0])
		// if (this.props.baseMapLayer.length > 0 && this._baseMapAdded === false && reactFGref){
		// 	let leafletGeoJSON = new L.GeoJSON(this.props.baseMapLayer[0], {style: baseMapStyle} );
		// 	let leafletFG = reactFGref.leafletElement;
		// 	// console.log(leafletFG)
		// 	console.log('reading')
		// 	leafletGeoJSON.eachLayer( (layer) => {
		// 		leafletFG.addLayer(layer);
		// 	});
		// 	this._baseMapAdded = true; // this prevents this piece to run twice.
		// }

	  this._editableFG = reactFGref;

    }

}

export default connect(null, actions)(MapDrawComponent);