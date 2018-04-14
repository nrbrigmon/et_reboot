import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//redux 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'));
registerServiceWorker();
