import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // TODO: handle submit
    this.props.history.push('/');
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column" style={{ maxWidth: 450 }}>
          <h2 className="ui green image header">
            <div className="content">
              Log-in to your account
            </div>
          </h2>
          <form className="ui large form" onSubmit={this.handleSubmit}>
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail address"
                    onChange={this.handleOnChange}
                    value={email}/>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleOnChange}
                    value={password}/>
                </div>
              </div>
              <button className="ui fluid large green submit button">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
