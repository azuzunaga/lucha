import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
    <nav className="header-nav">

      <h1 className="header-logo">
        <a href="#">LUCHA</a>
      </h1>

      <ul className="header-list">
        <li>
          <Link to="/login" id="splash-login-button" className="login-button">
            LOG IN
          </Link>
        </li>
      </ul>

    </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">

    <nav className="left-nav">
      <h1 className="header-logo">
        <a href="#">LUCHA</a>
      </h1>

      <ul>
        <li id="activities-btn">
          <Link to="/activities">My Activities</Link>
        </li>
        <li id="routes-btn">
          <Link to="/routes">My Routes</Link>
        </li>
      </ul>
    </nav>

    <ul>
      <li>
        <h2 className="header-name">Hi, {currentUser.firstName}</h2>

      </li>
    </ul>

    <button className="header-button" onClick={logout}>Log out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
