import axios from 'axios';

/* USER ACTIONS */
export const fetchUser = () => async dispatch => {
	// console.log("fething user?")
	const res = await axios.get('/api/user/info');
	dispatch({ type: 'FETCH_USER', payload: res.data });
};

export const signUpNewUser = (creds) => async dispatch => {
    console.log(creds);
	const res = await axios.post('/auth/local', creds);

    dispatch({ type: 'SEND_TOAST', payload: { data: res, msg:"huzzed ", open: true } });
}

export const sendEmail = (form) => async dispatch => {
	const res = await axios.post('/api/contact_form', form);
	
	dispatch({ type: 'SEND_TOAST', payload: { data: res, msg: "Email Sent!", open: true } });
}