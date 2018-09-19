import React from 'react';

import { Switch, Route } from 'react-router-dom';

import App from '../components/App';
import Login from '../components/Login';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route render={() => <h1>Page Not Found</h1>} />
    </Switch>
  );
}
