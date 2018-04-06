import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SplashForm extends React.Component {
  render() {
    return (
      <div className="login-form-container splash-form-container">
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
    );
  }
}

export default withRouter(SplashForm);
