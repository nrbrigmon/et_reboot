import React, {Component} from 'react';
import L from 'leaflet';
import { } from "react-leaflet-draw";
import * as _ from 'lodash';
import * as helper from '../../utils/_helperMethods';

const mapCSS = {
    height: '500px'
};
const MAP_CENTER_COORDS = [30.2764099, -97.7507724];

const getDevTypeColor = (feature) => {
    if (!helper.isEmptyObject(feature.properties.activeDevType)){
        return feature.properties.activeDevType.devTypeColor;
    } else {
        return "#eeeeee";
    }
}
const onEachFeature = (feature, layer)  => {
    // console.log( feature )
    // console.log( layer )
    layer.on({
        click: (e)=>{console.log(e.target.feature)} //highlightFeature func,
        // mouseout: console.log('mouseout', feature),  //highlightReset func, click:
        // console.log('mouseclick', feature)  //zoomToFeature func
    });
}
const addLayerToMap = (ctx) => {
    ctx.polygon = new L.geoJson(ctx.props.baseMapLayer, {
        onEachFeature: onEachFeature,
        style: function (feature) {
            return ({
                color: '#333333', 
                fillColor: getDevTypeColor(feature),
                weight: 1,
                opacity: 0.7,
                fillOpacity: 0.7
            });
        }
    }).addTo(ctx.map);
    //zoom to bounds of new feature
    ctx.map.fitBounds(ctx.polygon.getBounds());
}
class MapContainer extends Component {

    _baseLayerGroup = new L.FeatureGroup();
    _polygonDrawer = null;
    componentDidMount() {
        this.map = L.map('map', {
            center: MAP_CENTER_COORDS,
            zoom: 16,
            zoomControl: false,
            maxZoom: 20,
            minZoom: 2,
            scrollWheelZoom: 'false',
            inertia: true,
            inertiaDeceleration: 6000,
            layers: [L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})]
        });
        this._polygonDrawer = new L.Draw.Polygon(this.map);

        // STILL LOOKING FOR A WAY TO MOVE THE ZOOM CONTORL TO BOTTOM RIGHT
        L.control.zoom({position: 'topright'}).addTo(this.map);
        // baseLayer load if we have one....
        // console.log(this.props.baseMapLayer);
        
        if (this.props.baseMapLayer && !helper.isEmptyObject(this.props.baseMapLayer)) {
            // console.log(this.props.baseMapLayer);
            // console.log('update base layer, no?')
            addLayerToMap(this);
        }
        
        //feature group to edit added to map
        this.map.addLayer(this._baseLayerGroup);

        /** Leaflet-Drawa Controls section  **/
        let drawControl = new L.Control.Draw({
            draw: {
                polyline: false,
                polygon: true,
                rectangle: false,
                marker: true,
                circle: false,
                circlemarker: false
            },
            edit: {
                featureGroup: this._baseLayerGroup
            }
        });
        this.map.addControl(drawControl);

        //draw created happens when a feature is offish created
        this.map.on('draw:created', (e) => {
            let { layer } = e;
            let { _bounds } = layer;
            let { leafletDrawTrigger, activeDevType, baseMapLayer, myLibrary, devWorkbook } = this.props;
            //1. are we creating a base layer OR is this a "painting" situation
            if (leafletDrawTrigger === 'drawBaseLayer') {
                // this.props.setDrawTrigger('addBaseLayer');
                let lat1 = _.get(_bounds, '_southWest').lat;
                let lng1 = _.get(_bounds, '_southWest').lng;
                let lat2 = _.get(_bounds, '_northEast').lat;
                let lng2 = _.get(_bounds, '_northEast').lng;

                // access shape from FeatureClass and remove
                let shapes = {
                    "bboxArray": [
                        lng1, lat1, lng2, lat2
                    ],
                    "src": layer.toGeoJSON(),
                    "zoom": this.map.getZoom()
                };
                this.props.createTriangleGrid(shapes);
                // leafletFG.removeLayer(layer); dont have to remove, we never added it
                this._polygonDrawer.disable();
            } else if (leafletDrawTrigger === "paintScenarioLayer") {
                // this.props.setDrawTrigger('updateBaseLayer');
                let paintLayer = layer.toGeoJSON();
                this.props.paintDevelopmentType({ baseMapLayer, paintLayer, activeDevType });
                this.props.updateMetrics(baseMapLayer, myLibrary, devWorkbook);
            }
            this.props.setDrawTrigger('');
        });
    }
    _drawBaseLayer = () => {
        // console.log('drawing...?');
        this._polygonDrawer.enable();
    }
    _drawMessage = (msg, err) => {
        this.props.toastMessage(msg);
        this.props.setDrawTrigger(err);
    }
    _finishLayer = () => {
        this._polygonDrawer.completeShape(); //close the shape
        this.props.setDrawTrigger("closeDrawHelper"); //close the DrawHelper
    }   
    _addBaseLayerToMap = (baseMapLayer) => {
        baseMapLayer.eachLayer( layer => {
            this.polygon.addLayer(layer) 
        })
    }
    componentWillReceiveProps({leafletDrawTrigger, baseMapLayer}) {
        // console.log(leafletDrawTrigger, baseMapLayer);
        // console.log(this.props);
        let same = _.isEqual(this.props.baseMapLayer.features, baseMapLayer.features);
        // check if position has changed
        if (same === false && !helper.isEmptyObject(baseMapLayer)) {
            //if there is an existing layer, we remove it so that...
            if ( !helper.isEmptyObject(this.polygon) ){
                this.polygon.eachLayer(layer => {
                    this.polygon.removeLayer(layer)
                });
            }
            //we can add the new layer
            addLayerToMap(this);

            this.props.setDrawTrigger("closeDrawHelper"); //close the DrawHelper
		    this.props.closeModal(); //if it's open
            this.props.updateOverlayPanel("painting"); //keep panel open so we know we are painting

        } else if (leafletDrawTrigger === "drawBaseLayer") {
            this._drawBaseLayer();
        } else if (leafletDrawTrigger === "paintScenarioLayer") {
            this._drawBaseLayer();
        } else if (leafletDrawTrigger === "resetBaseLayer") {
            if ( !helper.isEmptyObject(this.polygon) ){
                this.polygon.eachLayer(layer => {
                    this.polygon.removeLayer(layer)
                });
            }
            this.props.setDrawTrigger('');
            this.props.updateOverlayPanel(false);
        } else if (leafletDrawTrigger === 'deleteLastPoint'){          
            this._polygonDrawer.deleteLastVertex();
            // this._drawAction.deleteLastVertex();	
        } else if (leafletDrawTrigger === 'finishLayer'){
            // console.log(this._polygonDrawer._markers);
            if (this._polygonDrawer._markers.length === undefined){
                this.props.setDrawTrigger("closeDrawHelper"); //close the DrawHelper
            } else {
                this._polygonDrawer._markers.length <= 2 ? 
                    this._drawMessage("You need more than two points!", "continueDraw") :
                    this._finishLayer();
            }
        } else if (leafletDrawTrigger === 'closeDrawHelper'){
            this._polygonDrawer.disable();	
        } else {
            // console.log("leafletDrawTrigger ", leafletDrawTrigger)
            // this._polygonDrawer.enable();
        }
    }
    render() {
        return <div id="map" style={mapCSS}></div>
    }
}

export default MapContainer;
