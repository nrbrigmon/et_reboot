import L from "leaflet";
import * as helper from "utils/_helperMethods";

const GET_DEV_TYPE_COLOR = feature => {
  if (!helper.isEmptyObject(feature.properties.activeDevType)) {
    return feature.properties.activeDevType.devTypeColor;
  } else {
    return "#eeeeee";
  }
};
const GET_DEV_TYPE_OPACITY = feature => {
  if (!helper.isEmptyObject(feature.properties.activeDevType)) {
    return 0.7;
  } else {
    return 0.2;
  }
};
const onEachFeature = (feature, layer) => {
  // console.log( feature )
  // console.log( layer )
  layer.on({
    click: e => {
      console.log(e.target.feature);
      alert(
        "you just clicked on:\n",
        JSON.stringify(e.target.feature.properties)
      );
    } //highlightFeature func,
    // mouseout: console.log('mouseout', feature),  //highlightReset func, click:
    // console.log('mouseclick', feature)  //zoomToFeature func
  });
};
export const addLayerToMap = ctx => {
  // console.log(ctx)
  ctx.polygon = new L.geoJson(ctx.props.baseMapLayer, {
    onEachFeature: onEachFeature,
    style: function(feature) {
      return {
        color: "#333333",
        fillColor: GET_DEV_TYPE_COLOR(feature),
        weight: 1,
        opacity: GET_DEV_TYPE_OPACITY(feature),
        fillOpacity: GET_DEV_TYPE_OPACITY(feature)
      };
    }
  }).addTo(ctx.map);
  //zoom to bounds of new feature if I was not JUST painting
  let _dev_name = ctx.props.activeDevType.devTypeName;
  if (_dev_name === undefined) {
    // console.log("here");
    return;
  } else if (_dev_name.length === 0) {
    // console.log("here", "fitBounds");
    ctx.map.fitBounds(ctx.polygon.getBounds());
  } else {
    return;
  }
  // console.log(ctx.props.activeDevType);
};

export const MAP_CSS = {
  height: "500px"
};
export const MAP_CENTER_COORDS = [30.2764099, -97.7507724];

export const BW_Map = L.tileLayer(
  "http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }
);

export const OSM_Map = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

export const HYBRID_Aerial = L.layerGroup([
  L.tileLayer(
    "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
    }
  ),
  L.tileLayer(
    "http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lines/{z}/{x}/{y}.{ext}",
    {
      attribution:
        'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: "abcd",
      minZoom: 2,
      maxZoom: 20,
      ext: "png"
    }
  ),
  L.tileLayer(
    "http://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.{ext}",
    {
      attribution:
        'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: "abcd",
      minZoom: 2,
      maxZoom: 20,
      ext: "png"
    }
  )
]);
// export const HYBRID_Terrain = L.layerGroup([
// 	L.tileLayer(
// 		'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', {
// 		attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS',
// 		maxZoom: 20
// 	}),
// 	L.tileLayer(
// 		'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}', {
// 		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// 		subdomains: 'abcd',
// 		minZoom: 0,
// 		maxZoom: 20,
// 		opacity: 0.65,
// 		ext: 'png'
// 	})
// ]);
