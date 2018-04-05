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
  }

  componentDidMount() {
    setTimeout(this.handleSubmit, 2100);
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
            <Typist cursor={{ show: false }} className="demo-animation">
              <button id='demo-user'>ame.zuz@gmail.com</button>
              <Typist.Delay />
              <br/>
              <button id="demo-password">●●●●●●●</button>
            </Typist>
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
