import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//redux 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

// import registerServiceWorker from './registerServiceWorker';
// import { unregister } from './registerServiceWorker';

import './index.css';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('root'));

// registerServiceWorker();
/*  I removed service worker because it "hijacks" the get request for logging in
    via googleAuth with PassportJS. Then, in order to un-hijack the service worker
    I had to unregister it using the function below...
    ... this will probably need to be addressed in the future...
*/
// unregister();