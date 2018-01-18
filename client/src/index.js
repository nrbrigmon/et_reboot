import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Reboot } from 'material-ui';

import registerServiceWorker from './registerServiceWorker';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
//         {/*Reboot is like normalize in that it makes CSS equal across all browsers*/}

ReactDOM.render(
        <div>
            <Reboot /> 
            <App />
        </div>, document.getElementById('root'));
registerServiceWorker();
