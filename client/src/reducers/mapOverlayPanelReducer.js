import * as localStorageMethods from '../utils/_localStorageMethods';

let defaultStatus =  false;

const LAYER_NAME = 'baseMapLayer';

export default function (status = defaultStatus, { type, payload } ) {
    if (localStorageMethods.itemExists(LAYER_NAME)) {
        status = "painting"
	}
    switch (type) {
        case 'UPDATE_OVERLAY_PANEL':
            return payload;
        default:
            return status;
    }
}