import React from 'react';
import { withRouter } from 'react-router-dom';

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
            className="login-form-submit"
            value="Log In"
          />
          <label className="session-form-separator">or</label>
          <button className="login-form-button" id="demo">
            Demo User
          </button>
              {/* <button className="tour-button">Take Tour</button> */}
        </form>
      </div>
    );
  }
}

export default withRouter(DemoForm);
