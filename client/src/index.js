import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Reboot } from 'material-ui';

import registerServiceWorker from './registerServiceWorker';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

ReactDOM.render(
        <div>
            <Reboot />
            <App />
        </div>, document.getElementById('root'));
registerServiceWorker();
