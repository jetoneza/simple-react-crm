import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Segment, Container } from 'semantic-ui-react';

import Routes from '../routes';
import HeaderMenu from '../components/HeaderMenu';

export default function AppContainer() {
  return (
    <BrowserRouter>
      <div>
        <HeaderMenu />
        <Segment vertical style={{ padding: '8em 0' }}>
          <Container>
            <Routes />
          </Container>
        </Segment>
      </div>
    </BrowserRouter>
  );
}
