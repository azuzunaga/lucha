import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util';

import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const rootEl = document.getElementById("root");

  ReactDOM.render(<h1>Bienvenido a Lucha</h1>, rootEl);
});
