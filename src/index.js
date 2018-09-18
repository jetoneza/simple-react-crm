import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
