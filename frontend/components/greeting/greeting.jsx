import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup-demo">
    <Link to="/login">LOG IN</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign up</Link>
    &nbsp;or&nbsp;
    <Link to="/demo">Demo User</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.first_name}</h2>
    <button className="header-button" onClick={logout}>Log out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout}) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
