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
import SplashForm from './session_forms/splash_form';
import DemoFormContainer from './session_forms/demo_form_container';
import Test from './session_forms/test';
import NewRoute from './session_forms/new_route';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/demo" component={DemoFormContainer} />
      <ProtectedRoute path="/routes" component={Test} />
      <ProtectedRoute path="/routes/new" component={NewRoute} />
      <AuthRoute path="/" component={SplashForm} />
    </Switch>
  </div>
);

export default App;
