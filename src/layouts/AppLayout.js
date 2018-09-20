import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Segment, Container } from 'semantic-ui-react';

import Routes from '../routes';
import NavBar from '../components/common/NavBar';

export default function AppContainer() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Segment vertical style={{ padding: '8em 0' }}>
          <Container>
            <Routes />
          </Container>
        </Segment>
      </div>
    </BrowserRouter>
  );
}
