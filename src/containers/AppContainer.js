import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Header, Button } from 'semantic-ui-react';

import App from '../components/App';
import Login from '../components/Login';
import HeaderMenu from '../components/HeaderMenu';

export default function AppContainer() {
  return (
    <Container textAlign="center">
      <BrowserRouter>
        <div>
          <HeaderMenu />
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    </Container>
  );
}