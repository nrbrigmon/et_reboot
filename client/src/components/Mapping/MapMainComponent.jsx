import React, { Component } from "react";
import L from "leaflet";
import {} from "react-leaflet-draw";
import * as _ from "lodash";
import * as helper from "utils/_helperMethods";

import * as _constants from "constants/_mappingPage";

class MapMainComponent extends Component {
  _baseLayerGroup = new L.FeatureGroup();
  _polygonDrawer = null;

  componentDidMount() {
    this.map = L.map("map", {
      center: _constants.MAP_CENTER_COORDS,
      zoom: 16,
      zoomControl: false,
      maxZoom: 18,
      minZoom: 2,
      scrollWheelZoom: "false",
      inertia: true,
      inertiaDeceleration: 6000,
      layers: [_constants.BW_Map, _constants.OSM_Map, _constants.HYBRID_Aerial]
    });
    this._polygonDrawer = new L.Draw.Polygon(this.map);

    let baseMaps = {
      "<span style='color: gray'>Aerial</span>": _constants.HYBRID_Aerial,
      "<span style='color: gray'>OSM</span>": _constants.OSM_Map,
      "<span style='color: gray'>B & W</span>": _constants.BW_Map
      // "Terrain": _constants.HYBRID_Terrain
    };

    L.control.layers(baseMaps, {}).addTo(this.map);

    // STILL LOOKING FOR A WAY TO MOVE THE ZOOM CONTORL TO BOTTOM RIGHT
    L.control.zoom({ position: "bottomright" }).addTo(this.map);

    if (
      this.props.baseMapLayer &&
      !helper.isEmptyObject(this.props.baseMapLayer)
    ) {
      // console.log(this.props.baseMapLayer);
      // console.log("update base layer, no?");
      _constants.addLayerToMap(this);
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
    this.map.on("draw:created", e => {
      let { layer } = e;
      let { _bounds } = layer;
      let { leafletDrawTrigger, activeDevType, baseMapLayer } = this.props;
      // console.log(activeDevType)
      // console.log(this.props)
      //1. are we creating a base layer OR is this a "painting" situation
      if (activeDevType.devTypeName === "DRAW_SCENARIO_BASE_LAYER") {
        // this.props.setDrawTrigger('addBaseLayer');
        let lat1 = _.get(_bounds, "_southWest").lat;
        let lng1 = _.get(_bounds, "_southWest").lng;
        let lat2 = _.get(_bounds, "_northEast").lat;
        let lng2 = _.get(_bounds, "_northEast").lng;

        // access shape from FeatureClass and remove
        let shapes = {
          bboxArray: [lng1, lat1, lng2, lat2],
          src: layer.toGeoJSON(),
          zoom: this.map.getZoom()
        };
        this.props.createTriangleGrid(shapes);
        // leafletFG.removeLayer(layer); dont have to remove, we never added it
        this._polygonDrawer.disable();
        this.props.setActiveDevType({ devTypeName: "", color: "" });
      } else if (leafletDrawTrigger === "paintScenarioLayer") {
        // this.props.setDrawTrigger('updateBaseLayer');
        let paintLayer = layer.toGeoJSON();
        this.props.paintDevelopmentType({
          baseMapLayer,
          paintLayer,
          activeDevType
        });
      } else {
      }
      this.props.setDrawTrigger("");
    });
    this.props.updateMetrics(this.props.baseMapLayer, this.props.devWorkbook);
  }
  _drawBaseLayer = () => {
    // we want our user to draw at a closer range
    if (this.map.getZoom() < 15) {
      this.map.setZoom(15);
    }
    this._polygonDrawer.enable();
  };
  _drawMessage = (msg, err) => {
    this.props.toastMessage(msg);
    this.props.setDrawTrigger(err);
  };
  _finishLayer = () => {
    this._polygonDrawer.completeShape(); //close the shape
    this.props.setDrawTrigger("closeDrawHelper"); //close the DrawHelper
  };
  _addBaseLayerToMap = baseMapLayer => {
    baseMapLayer.eachLayer(layer => {
      this.polygon.addLayer(layer);
    });
  };
  componentDidUpdate(prevProps) {
    let { leafletDrawTrigger } = this.props;
    let { baseMapLayer } = this.props;
    // console.log(this.props.leafletDrawTrigger);
    let same = _.isEqual(
      baseMapLayer.features,
      prevProps.baseMapLayer.features
    );
    /* First check is to see if the base map has changed */
    if (same === false && !helper.isEmptyObject(baseMapLayer)) {
      // console.log("here! should I update?");
      /* if the base polygon is not empty, we remove each layer,
			if it is empty, we don't need to do anything*/
      if (!helper.isEmptyObject(this.polygon)) {
        this.polygon.eachLayer(layer => {
          this.polygon.removeLayer(layer);
        });
      }

      /* now we add the our context (this) to our help function which will add the payer*/
      _constants.addLayerToMap(this);

      this.props.setDrawTrigger("closeDrawHelper"); //close the DrawHelper
      this.props.closeModal(); //if it's open
      this.props.updateOverlayPanel("painting"); //keep panel open so we know we are painting
      this.props.updateMetrics(baseMapLayer, this.props.devWorkbook);
      /* This second check is to see if I clicked the drawBaselayer action, I will enable the draw function */
    } else if (leafletDrawTrigger === "drawBaseLayer") {
      // console.log("am I drawing...?")
      this._drawBaseLayer();
      /* This  check is to see if I clicked the paintScenarioLayer action, I will enable the draw function */
    } else if (leafletDrawTrigger === "paintScenarioLayer") {
      this._drawBaseLayer();
      /* This  check is to see if I clicked the resetBaseLayer action, I will remove the entire base layer, piece by piece */
    } else if (leafletDrawTrigger === "resetBaseLayer") {
      if (!helper.isEmptyObject(this.polygon)) {
        this.polygon.eachLayer(layer => {
          this.polygon.removeLayer(layer);
        });
      }
      this.props.setDrawTrigger("");
      this.props.updateOverlayPanel(false);
      //update the metrics with a blank array (our reset status)
      this.props.updateMetrics([], this.props.devWorkbook);
    } else if (leafletDrawTrigger === "deleteLastPoint") {
      // console.log(this._polygonDrawer._markers);
      if (this._polygonDrawer._markers !== undefined) {
        if (this._polygonDrawer._markers.length > 1) {
          this._polygonDrawer.deleteLastVertex();
        } else {
          this._drawMessage("You only have one point left!", "continueDraw");
        }
      }
    } else if (leafletDrawTrigger === "finishLayer") {
      // console.log(this._polygonDrawer._markers);
      if (this._polygonDrawer._markers === undefined) {
        this.props.setDrawTrigger("closeDrawHelper"); //close the DrawHelper
      } else {
        this._polygonDrawer._markers.length <= 2
          ? this._drawMessage("You need more than two points!", "continueDraw")
          : this._finishLayer();
      }
    } else if (leafletDrawTrigger === "closeDrawHelper") {
      this._polygonDrawer.disable();
    } else if (leafletDrawTrigger === "continueDraw") {
      // if( prevProps.leafletDrawTrigger === "")
      // this.props.setDrawTrigger(prevProps.leafletDrawTrigger)
    } else {
      // console.log("leafletDrawTrigger ", leafletDrawTrigger)
      // this._polygonDrawer.enable();
    }
  }
  render() {
    return <div id="map" style={_constants.MAP_CSS} />;
  }
}

export default MapMainComponent;
