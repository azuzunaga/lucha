import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
    <nav className="header-nav">

      <nav className="left-nav">
        <a href="#" className="header-logo">LUCHA</a>
      </nav>

      <nav className="header-button right-nav">
        <Link to="/login" id="splash-login-button">
          LOG IN
        </Link>
      </nav>

    </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-nav">

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

    <nav className="right-nav">
      <ul>
        <li>
          <h2 className="header-name">Hi, {currentUser.firstName}</h2>
        </li>
        <li className="nav-icon">
          <a href="" id="user-dropdown-btn">
            <div className="user-nav-avatar">
              <i className="material-icons md-36">account_circle</i>
            </div>
            <div className="nav-avatar-chevron">
              <i className="material-icons md-18">keyboard_arrow_down</i>
            </div>
          </a>
        </li>
        <li className="nav-icon">
          <a href="">
            <div>
              <i className="material-icons md-24 circle-show">add_circle_outline</i>
              <i className="material-icons md-24 circle-hidden">add_circle</i>
            </div>
          </a>
        </li>
        <li>
          <button className="header-button" onClick={logout}>Log out</button>
        </li>
      </ul>
    </nav>

  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
