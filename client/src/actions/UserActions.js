import axios from 'axios';

/* USER ACTIONS */
export const fetchUser = () => async dispatch => {
	// console.log("fething user?")
	const res = await axios.get('/api/user/info');
	dispatch({ type: 'FETCH_USER', payload: res.data });
};

// export createNewUser = () => async dispatch => {
// 	// console.log("creating user?")
// 	const res = await axios.get('/api/user/info');
// 	// console.log("creating user?", res)	
// 	dispatch({ type: 'FETCH_USER', payload: res.data });
// };