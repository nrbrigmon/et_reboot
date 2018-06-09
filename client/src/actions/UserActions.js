import axios from 'axios';

/* USER ACTIONS */
export const fetchUser = () => async dispatch => {
	// console.log("fething user?")
	const res = await axios.get('/api/user/info');
	// console.log("fetched user?", res)	
	dispatch({ type: 'FETCH_USER', payload: res.data });
};