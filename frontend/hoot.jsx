import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

// For test....
import * as SeshUtil from './util/session_api_util';
import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', ()=>{
  let root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logout = logout();
  ReactDOM.render(<Root store={store}/>, root);
});
