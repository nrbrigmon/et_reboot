import axios from 'axios';

export * from './AwsBackendActions';
export * from './BldgLibraryActions';
export * from './BldgPrototypeActions';
export * from './DevWorkbookActions';
export * from './DrawActions';
export * from './MetricActions';
export * from './UserActions';
export * from './UtilActions';
export * from './BldgTemplateListActions';


export const signUpNewUser = (creds) => async dispatch => {
    console.log(creds);
	const res = await axios.post('/auth/local', creds);

    dispatch({ type: 'SEND_TOAST', payload: { data: res, msg:"huzzed ", open: true } });
}
// {email:"nate@aol.com", password: "bahbah"})