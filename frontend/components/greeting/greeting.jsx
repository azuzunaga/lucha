import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup-demo">
    <h1 id="logo">LUCHA</h1>
    <Link to="/login"
      id="splash-login-button"
      className="login-button"
    >
      LOG IN
    </Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.firstName}</h2>
    <button className="header-button" onClick={logout}>Log out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
