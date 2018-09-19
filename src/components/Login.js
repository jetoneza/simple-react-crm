import React from 'react';
import Validator from 'validator';
import { Form } from 'semantic-ui-react';

class Login extends React.Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    errors: {},
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate(this.state.data);

    this.setState({ errors });

    if (Object.keys(errors).length !== 0) {
      return;
    }

    // TODO: handle submit
    this.props.history.push('/');
  }

  validate = (data) => {
    const errors = {};

    if (!data.password) {
      errors.password = 'Please provide a password.';
    }

    if (!Validator.isEmail(data.email)) {
      errors.email = 'Invalid email.';
    }

    return errors;
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      data: {
        ...this.state.data,
        [name]: value,
      },
    })
  }

  renderError = (error) => {
    return error && <span style={{ color: 'red' }}>{ error }</span>;
  }

  render() {
    const { data, errors } = this.state;

    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column" style={{ maxWidth: 450 }}>
          <h2 className="ui green image header">
            <div className="content">
              Log-in to your account
            </div>
          </h2>
          <Form onSubmit={this.handleSubmit}>
            <div className="ui stacked segment">
              <Form.Field error={!!errors.email}>
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail address"
                    onChange={this.handleOnChange}
                    value={data.email}/>
                </div>
                { this.renderError(errors.email) }
              </Form.Field>
              <Form.Field error={!!errors.password}>
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleOnChange}
                    value={data.password}/>
                </div>
                { this.renderError(errors.password) }
              </Form.Field>
              <button className="ui fluid large green submit button">Login</button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
