import React, { Component } from 'react';
import { Container, Header, Button } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Header>App</Header>
        <Button
          color="blue"
          content="Like"
          icon="heart"
          label={{ basic: true, color: 'blue', pointing: 'left', content: '2,048' }}
        />
      </Container>
    );
  }
}

export default App;
