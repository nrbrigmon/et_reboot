let defaultState = {
    msg: '',
    open: false
}
export default function (state = defaultState, action) {
    switch (action.type) {
        case 'SEND_TOAST':
            return action.payload;
        case 'CLOSE_TOAST':
            return action.payload;
        default:
            return state;
    }
}