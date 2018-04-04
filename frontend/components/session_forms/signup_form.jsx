import React from 'react';
import { withRouter } from 'react-router-dom';

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
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          Log In
          <br/>
          {this.renderErrors()}
          <div className="signup-form">
            <br/>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="signup-input"
              placeholder="Your email"
            />
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="signup-input"
              placeholder="Password"
            />
            <br/>
            <input type="text"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              className="signup-input"
              placeholder="First Name"
            />
            <br/>
            <input type="text"
              value={this.state.last_name}
              onChange={this.update('last_name')}
              className="signup-input"
              placeholder="Last Name"
            />
            <br/>
            <input type="submit"
              className="session-submit"
            />
            <h3 className="session-form-separator">or</h3>
            <div className = "session-options">
              <button className="demo-button">Demo User</button>
              <button className="tour-button">Take Tour</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
