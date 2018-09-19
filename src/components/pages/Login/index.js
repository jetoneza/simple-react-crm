import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';

class Login extends React.PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleOnSubmit = (data) => {
    // TODO: handle submit
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column" style={{ maxWidth: 450 }}>
          <h2 className="ui green image header">
            <div className="content">
              Log-in to your account
            </div>
          </h2>
          <LoginForm onSubmit={this.handleOnSubmit}/>
        </div>
      </div>
    );
  }
}

export default Login;
