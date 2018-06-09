
/* MODAL SELECTIONS */
export const openModal = (selection) => {
	const action = {
		type: 'OPEN_MODAL',
		selection
	}
	return action;
};
export const closeModal = () => {
	// console.log('closemodal fired...');
	const action = {
		type: 'CLOSE_MODAL'
	}
	return action;
};

export const closeToast = () => {
	let action = {
		type: 'CLOSE_TOAST',
		payload: {
			open: false
		}
	}
	return action;
}

export const toastMessage = (msg) => {
	const action = {
		type: 'SEND_TOAST',
		payload: { msg: msg, open: true }
	}
	return action;
}

export const fetchRandomId = () => {
	const action = {
		type: 'FETCH_RANDOM_ID'
	}
	return action;
}