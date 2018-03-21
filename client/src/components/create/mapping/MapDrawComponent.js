import React, { Component } from 'react';
import { EditControl } from "react-leaflet-draw"
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { FeatureGroup } from 'react-leaflet';
import L from 'leaflet';
import * as _ from 'lodash';

function baseMapStyle(feature) {
	return {
			fillColor: '#777777',
			fillOpacity: 0.4,
			color: '#333333',  //stroke outline color
			opacity: 0.7,
			weight: 1
	};
}

class MapDrawComponent extends Component {
    
	_onEdited = (e) => {
  
	  let numEdited = 0;
	  e.layers.eachLayer( (layer) => {
		numEdited += 1;
	  })
	  console.log(`_onEdited: edited ${numEdited} layers`, e);
  
	}
  
	_onCreated = (e) => {
        let layer = e.layer;
        let bbox = e.layer._bounds;
        let lat1 = _.get(bbox, '_southWest').lat;
        let lng1 = _.get(bbox, '_southWest').lng;        
        let lat2 = _.get(bbox, '_northEast').lat;
        let lng2 = _.get(bbox, '_northEast').lng;
        
        let shapes = {
            "bboxArray": [ lng1, lat1, lng2, lat2 ],
            "src": layer.toGeoJSON()
        };

        // access shape from FeatureClass and remove
        let leafletFG = this._editableFG.leafletElement;
        leafletFG.removeLayer(layer);

        this.props.createTriangleGrid(shapes);
	}
  
	_onMounted = (drawControl) => {

		// Set the button title text for the polygon button
		// console.log(drawControl);
		this._drawControl = drawControl;
		// console.log(this.props.baseMapLayer);
		
		// let leafletFG = this._editableFG.leafletElement;
		// leafletFG.addLayer(layer);
	}
  
	_drawControl = null;
	
	_updateBaseLayer = (newLayer) => {
			// console.log(newLayer);
			//need a method to remove existing layer if already exists....
			let leafletGeoJSON = new L.GeoJSON(newLayer, {style: baseMapStyle} );
      let leafletFG = this._editableFG.leafletElement;
      
      leafletGeoJSON.eachLayer( (layer) => {
        leafletFG.addLayer(layer);
      });
	}

	componentWillReceiveProps(props){
		if (props.baseMapLayer.length > 0){
			this._updateBaseLayer(props.baseMapLayer[0]);
		}
	}

	render() {
			var editableLayer = new L.FeatureGroup();
			// console.log(this.props);
			return (
				<FeatureGroup ref={ (reactFGref) => {this._onFeatureGroupReady(reactFGref);} }>
					<EditControl
						position="topleft"
						onCreated={this._onCreated}
						onMounted={this._onMounted}
						draw={{
							// polyline: false,
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
  

    _editableFG = null

    _onFeatureGroupReady = (reactFGref) => {
  
      // populate the leaflet FeatureGroup with the geoJson layers
  
    //   let leafletGeoJSON = new L.GeoJSON(getGeoJson());
    //   let leafletFG = reactFGref.leafletElement;
      
    //   leafletGeoJSON.eachLayer( (layer) => {
    //     leafletFG.addLayer(layer);
    //   });
    //   console.log(leafletGeoJSON);
      // store the ref for future access to content
  
      this._editableFG = reactFGref;
    }

}
export default connect(null, actions)(MapDrawComponent);
