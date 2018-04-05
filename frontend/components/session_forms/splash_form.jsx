import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SplashForm extends React.Component {
  render() {
    return (
      <div className="splash-form">
        <Link to="/signup">Sign Up</Link>
        <Link to="/demo">Demo User</Link>
      </div>
    );
  }
}

export default withRouter(SplashForm);
