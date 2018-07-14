import { combineReducers } from 'redux';
import * as shortid from 'shortid';
import activeDevTypeReducer from './activeDevTypeReducer';
import authReducer from './authReducer';
import baseMapLayerReducer from './baseMapLayerReducer';
import bldgPrototypeReducer from './bldgPrototypeReducer';
import availableLibsReducer from './availableLibsReducer';
import availableWkbksReducer from './availableWkbksReducer';
import buildingReducer from './buildingReducer';
import devWorkbookReducer from './devWorkbookReducer';
import leafletDrawReducer from './leafletDrawReducer';
import modalListReducer from './modalListReducer';
import modalReducer from './modalReducer';
import mapReferenceReducer from './mapReferenceReducer';
import mapOverlayPanelReducer from './mapOverlayPanelReducer';
import toastReducer from './toastReducer';
import s3LayerReducer from './s3LayerReducer';
import metricReducer from './metricReducer';
import bldgTemplateListReducer from './bldgTemplateListReducer';

const getRandomId = (state = [], action) => {
	// console.log('action called', action);
	switch (action.type) {
		case 'FETCH_RANDOM_ID':
			return shortid.generate();
	default:
		return state;
	}
}

export default combineReducers({
	activeDevType: activeDevTypeReducer
	,auth: authReducer							//user login confirmation
	,availableBldgs: buildingReducer 			//saved buildings in database
	,availableLibs: availableLibsReducer		//saved libraries in database
	,availableWkbks: availableWkbksReducer		//saved libraries in database
	,baseMapLayer: baseMapLayerReducer			//the baseLayer for scenario planning
	,bldgType: bldgPrototypeReducer				//the current building being edited
	,devWorkbook: devWorkbookReducer			//the current development type being edited
	,leafletDrawTrigger: leafletDrawReducer
	,mapRef: mapReferenceReducer
	,modList: modalListReducer					//the list inside the modal
	,modal: modalReducer						//open or close modal state
	,randomId: getRandomId						//randomId function
	,toast: toastReducer						//open or close toast state
	,mapOverlayPanel: mapOverlayPanelReducer
	,availableS3Layers: s3LayerReducer
	,metricData: metricReducer
	,bldgTemplates: bldgTemplateListReducer
});