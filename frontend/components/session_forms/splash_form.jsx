import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { randomBackgroundImage } from './util';

class SplashForm extends React.Component {
  componentDidMount() {
    randomBackgroundImage();
  }

  render() {
    return (
      <div className="bg">
        <div className="login-form-container splash-form-container">
          <h2 id="login-title">Track your activities with Lucha</h2>
          <form className="login-form-box splash-form-box">
            <Link className="login-form-button" to="/login" id="login">
              Log In
            </Link>
            <Link className="login-form-button" to="/signup" id="demo">
              Sign Up
            </Link>
            <label className="session-form-separator">or</label>

            <Link className="login-form-button" to="/demo" id="demo">
              Demo User
            </Link>
            {/* <button className="tour-button">Take Tour</button> */}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SplashForm);
