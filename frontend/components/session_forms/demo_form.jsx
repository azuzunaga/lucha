import React from 'react';
import { withRouter, Link } from 'react-router-dom';

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
    let button = document.getElementById("demo-login-button");

    setTimeout(
      this.typeWriter, 400,
      0, "demo-user", this.state.username
    );

    setTimeout(
      this.typeWriter, 2075,
      0, "demo-pass", this.state.password
    );

    setTimeout(function() {
      button.setAttribute("id", "demo-hover");
    }, 3075);

    setTimeout(function() {
      button.setAttribute("id", "demo-click");
    }, 3275);

    setTimeout(function() {
      button.setAttribute("id", "demo-login-button");
    }, 3375);

    setTimeout(this.handleSubmit, 3475);
  }


  typeWriter(j, field, text) {
    if (j < text.length) {
      document.getElementById(field).focus();
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
      <div className="bg02">
        <div className="login-form-container">
          <h2 id="login-title">Log In</h2>
          <form className="login-form-box">
            <input type="text"
              value=""
              className="login-input"
              placeholder="Your email"
              id="demo-user"
              spellCheck="false"
            />
            <input type="password"
              value=""
              className="login-input"
              placeholder="Password"
              id="demo-pass"
              spellCheck="false"
            />
            <input type="submit"
              className="login-form-button"
              value="Log In"
              id="demo-login-button"
            />
            <label className="session-form-separator">or</label>
            <Link className="login-form-button" to="" id="demo">
              Demo User
            </Link>
            <span className="sign-up-button-container">
              <Link className="login-form-button" to="" id="signup">
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

export default withRouter(DemoForm);
