import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';

// For test....
import * as SeshUtil from './util/session_api_util';
import * as BizAPIUtil from './util/business_api_util';
import { login, logout, signup } from './actions/session_actions';
import { fetchBusinesses, fetchBusiness } from './actions/business_actions';


document.addEventListener('DOMContentLoaded', ()=>{
  let root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = {entities: { session: { currentUser: window.currentUser } } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logout = logout;
  window.bizUtil = BizAPIUtil;
  window.fetchBusinesses = fetchBusinesses;
  window.fetchBusiness = fetchBusiness;
  ReactDOM.render(<Root store={store}/>, root);
});
