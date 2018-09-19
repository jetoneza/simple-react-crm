import React from 'react';
import ReactDOM from 'react-dom';

import AppLayout from './layouts/AppLayout';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(<AppLayout />, document.getElementById('root'));
registerServiceWorker();
