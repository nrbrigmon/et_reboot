let defaultState =  false;

export default function (state = defaultState, { type, payload } ) {
    switch (type) {
        case 'UPDATE_OVERLAY_PANEL':
            return payload;
        default:
            return state;
    }
}