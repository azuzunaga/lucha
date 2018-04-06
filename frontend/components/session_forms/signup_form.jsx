import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div className="bg2">
        <div className="signup-form-container login-form-container">
          <h2 id="login-title">Sign Up</h2>
          <form onSubmit={this.handleSubmit} className="signup-form-box login-form-box">
            {this.renderErrors()}

            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="signup-input login-input"
              placeholder="Your email"
            />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="signup-input login-input"
              placeholder="Password"
            />
            <input type="text"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              className="signup-input login-input"
              placeholder="First Name"
            />
            <input type="text"
              value={this.state.last_name}
              onChange={this.update('last_name')}
              className="signup-input login-input"
              placeholder="Last Name"
            />
            <input type="submit"
              className="session-form-button login-form-button"
            />
            <label className="session-form-separator">or</label>
            <Link className="demo-button login-form-button" to="/demo" id="demo">Demo User</Link>
            {/* <button className="tour-button">Take Tour</button> */}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
