import React from 'react';
import ReactDOM from 'react-dom';

//redux 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './App';
import reducers from './reducers';

// import registerServiceWorker from './registerServiceWorker';
// import { unregister } from './registerServiceWorker';

// import './styles/index.css';
import "assets/scss/material-kit-react.css?v=1.1.0";

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