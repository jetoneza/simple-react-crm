import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
  return (
    <Menu
      pointing
      secondary
      size="large">
      <Container>
        <Menu.Item active>
          App
        </Menu.Item>
        <Menu.Item position="right">
          <Link to="/login" className="ui button">
            Log in
          </Link>
        </Menu.Item>
      </Container>
    </Menu>
  );
}

