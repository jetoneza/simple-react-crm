import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Segment, Container } from 'semantic-ui-react';

import App from '../components/App';
import Login from '../components/Login';
import HeaderMenu from '../components/HeaderMenu';

export default function AppContainer() {
  return (
    <BrowserRouter>
      <div>
        <HeaderMenu />
        <Segment vertical style={{ padding: '8em 0' }}>
          <Container>
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/login" component={Login} />
            </Switch>
          </Container>
        </Segment>
      </div>
    </BrowserRouter>
  );
}
