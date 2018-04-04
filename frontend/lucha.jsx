import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// test
import * as actions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = actions.login;

  //

  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl);
});
