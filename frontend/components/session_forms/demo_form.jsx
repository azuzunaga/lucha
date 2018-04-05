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
    this.uTypeWriter = this.uTypeWriter.bind(this);
    this.speed = 50;
    this.i = 0;

  }

  componentDidMount() {
    this.uTypeWriter();
    setTimeout(this.handleSubmit, 10000);
  }


  uTypeWriter() {
    if (this.i < this.state.username.length) {
      document.getElementById("demo-user").value += this.state.username.charAt(this.i);
      this.i = this.i + 1;
      setTimeout(this.uTypeWriter, this.speed);
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
              // readOnly
            />
            <br/>
            <input type="password"
              value=""
              className="login-input"
              placeholder="Password"
              readOnly
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

export default withRouter(DemoForm);
