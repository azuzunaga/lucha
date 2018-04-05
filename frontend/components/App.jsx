import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    <div>
      <Link to="/signup">Sign up</Link>
      <div className="or-text">or</div>
      <Link to="/demo">Demo User</Link>
      {/* &nbsp;or&nbsp; */}
      {/* <Link to="/tour">Take Tour</Link> */}
    </div>
  </div>
);

export default App;
