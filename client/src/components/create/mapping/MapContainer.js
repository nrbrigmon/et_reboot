import React, {Component} from 'react';
import L from 'leaflet';
import { } from "react-leaflet-draw"
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as _ from 'lodash';

const mapCSS = {
    height: '500px'
};
const mapCenterCoords = [30.2764099, -97.7507724];

function isEmptyObject(obj) {
    for(var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }
    return true;
  }
function getDevTypeColor(feature){
    if (!isEmptyObject(feature.properties.activeDevType)){
        return feature.properties.activeDevType.devTypeColor;
    }else {
        return "#ccc";
    }
}
class MapContainer extends Component {
    onEachFeature = (feature, layer) => {
        layer.on({
            // mouseover: console.log('mouseover ',feature), //highlightFeature func,
            // mouseout: console.log('mouseout', feature),  //highlightReset func, click:
            // console.log('mouseclick', feature)  //zoomToFeature func
        });
    }

    _baseLayerGroup = new L.FeatureGroup();
    _polygonDrawer = null;
    componentDidMount() {
        this.map = L.map('map', {
            center: mapCenterCoords,
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
        L.control
            .zoom({position: 'topright'})
            .addTo(this.map);
        // baseLayer load if we have one....
        if (this.props.baseMapLayer && !isEmptyObject(this.props.baseMapLayer)) {
            this.polygon = new L.geoJson(this.props.baseMapLayer, {
                onEachFeature: this.onEachFeature,
                style: function (feature) {
                    return ({
                        color: '#333333', 
                        fillColor: getDevTypeColor(feature),
                        weight: 1,
                        opacity: 0.7,
                        fillOpacity: 0.5
                    });
                }
            }).addTo(this.map);
        }

        //feature group to edit added to map
        this.map
            .addLayer(this._baseLayerGroup);

        /** Leaflet-Drawa Controls section  **/
        let drawControl = new L.Control
            .Draw({
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
        this.map
            .addControl(drawControl);

        //draw created happens when a feature is offish created
        this.map.on('draw:created', (e) => {
                let { layer } = e;
                let { _bounds } = layer;
                let { leafletDrawTrigger } = this.props;
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
                    let { activeDevType } = this.props;
                    let { baseMapLayer } = this.props;
                    let paintLayer = layer.toGeoJSON();
                    this.props.paintDevelopmentType({ baseMapLayer, paintLayer, activeDevType });
                }
                this.props.setDrawTrigger('');
            });
    }
    _drawBaseLayer = () => {
        console.log('drawing......');
        this._polygonDrawer.enable();
    }
    _addBaseLayerToMap = (baseMapLayer) => {
        console.log('adding base layer .......');
        console.log(baseMapLayer);

        baseMapLayer.eachLayer( layer => {
                this.polygon.addLayer(layer) 
        })
    }
    componentWillReceiveProps({leafletDrawTrigger, baseMapLayer}) {
        let same = _.isEqual(this.props.baseMapLayer.features, baseMapLayer.features);
        console.log(this.props.baseMapLayer, baseMapLayer)
        console.log("componentWillReceiveProps, drawTrigger: ",leafletDrawTrigger)
        // check if position has changed
        if (same === false && !isEmptyObject(baseMapLayer)) {
            //if there is an existing layer, we remove it so that...
            if ( !isEmptyObject(this.polygon) ){
                this.polygon.eachLayer(layer => {
                    this.polygon.removeLayer(layer)
                });
            }
            //we can add the new layer
            this.polygon = new L.geoJson(baseMapLayer, {
                onEachFeature: this.onEachFeature,
                style: function (feature) {
                    return ({
                        color: '#333333', 
                        fillColor: getDevTypeColor(feature),
                        weight: 1,
                        opacity: 0.7,
                        fillOpacity: 0.5
                    });
                }
            }).addTo(this.map);
        } else if (leafletDrawTrigger === "drawBaseLayer") {
            this._drawBaseLayer();
        } else if (leafletDrawTrigger === "paintScenarioLayer") {
            this._drawBaseLayer();
        } else {
            console.log('else nothing...')
        }
    }
    render() {
        return <div id="map" style={mapCSS}></div>
    }
}

export default connect(null, actions)(MapContainer);
