import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById("root");

  window.login = SessionAPIUtil.login;
  window.logout = SessionAPIUtil.logout;
  window.signup = SessionAPIUtil.signup;

  ReactDOM.render(<h1>Bienvenido a Lucha</h1>, rootEl);
});
