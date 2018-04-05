import React from 'react';
import { withRouter } from 'react-router-dom';
import Typist from 'react-typist';

class DemoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'ame.zuz@gmail.com',
      password: 'password',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.typeWriter = this.typeWriter.bind(this);
  }

  componentDidMount() {
    // this.typeWriter(0, "demo-user", this.state.username);
    // this.typeWriter(0, "demo-pass", this.state.password);

    setTimeout(
      this.typeWriter, 400,
      0, "demo-user", this.state.username
    );

    setTimeout(
      this.typeWriter, 2075,
      0, "demo-pass", this.state.password
    );

    setTimeout(this.handleSubmit, 3075);
  }


  typeWriter(j, field, text) {
    if (j < text.length) {
      document.getElementById(field).value += text.charAt(j);
      j = j + 1;
      setTimeout(this.typeWriter, 75, j, field, text);
    }
  }

  handleSubmit() {
    const user = {user: Object.assign({}, this.state)};
    this.props.processForm(user);
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="login-form-box">
          Log In
          <br/>
          <div className="login-form">
            <br/>
            <input type="text"
              value=""
              className="login-input"
              placeholder="Your email"
              id="demo-user"
              readOnly
            />
            <br/>
            <input type="password"
              value=""
              className="login-input"
              placeholder="Password"
              id="demo-pass"
              readOnly
            />
            <br/>
            <input type="submit" className="session-submit" id="demo-submit"/>
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

export default withRouter(DemoForm);
