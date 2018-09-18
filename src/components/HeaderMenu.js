import React from 'react';

import { Link } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

export default function HeaderMenu() {
  return (
    <Menu>
      <Menu.Item name='App'>
        <Link to="/">App</Link>
      </Menu.Item>
      <Menu.Item name='Login'>
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu>
  );
}