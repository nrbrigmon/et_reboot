let defaultState = {
    msg: '',
    open: false
}

export default function (state = defaultState, { type, payload } ) {
    switch (type) {
        case 'SEND_TOAST':
            return payload;
        case 'CLOSE_TOAST':
            return payload;
        default:
            return state;
    }
}