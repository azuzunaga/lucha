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
import RouteIndexContainer from './routes/route_index_container';
import NewRouteContainer from './routes/new_route_container';
import NewActivityContainer from './activities/new_activity_container';
import ActivityIndexContainer from './activities/activity_index_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div id="app">
    <header>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/demo" component={DemoFormContainer} />
      <ProtectedRoute path="/routes/new" component={NewRouteContainer} />
      <ProtectedRoute path="/routes" component={RouteIndexContainer} />
      <ProtectedRoute path="/activities/new" component={NewActivityContainer} />
      <ProtectedRoute path="/activities" component={ActivityIndexContainer} />
      <AuthRoute path="/" component={SplashForm} />
    </Switch>
  </div>
);

export default App;
