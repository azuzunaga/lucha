import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { randomBackgroundImage } from './util';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {user: Object.assign({}, this.state)};
    this.props.processForm(user);
  }

  handleDemo(e) {
    e.preventDefault();
    const user = {user: {username: 'peter@demo.user', password: 'password'}};
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentDidMount(){
    randomBackgroundImage();
  }

  render() {
    return (
      <div className="bg">
        <div className="login-form-container">
          <h2 id="login-title">Log In</h2>
          <h2 id="session-errors">{this.renderErrors()}</h2>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
              placeholder="Your email"
              spellCheck="false"
            />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Password"
              spellCheck="false"
            />
            <input type="submit"
              className="login-form-button"
              value="Log In"
            />
            <label className="session-form-separator">or</label>
            <Link className="login-form-button" to="/demo" id="demo">
              Demo User
            </Link>
            <span className="sign-up-button-container">
              <Link className="login-form-button" to="/signup" id="signup">
                Sign Up
              </Link>
            </span>
            {/* <button className="tour-button">Take Tour</button> */}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
