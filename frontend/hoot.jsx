import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';

// For test....
import * as SeshUtil from './util/session_api_util';
import * as BizAPIUtil from './util/business_api_util';
import { login, logout, signup } from './actions/session_actions';
import * as ReviewActions from './actions/review_actions';
import * as BusinessActions from './actions/business_actions';
import * as ReviewAPIUtil from './util/review_api_util';
import * as UserAPIUtil from './util/user_api_util';

document.addEventListener('DOMContentLoaded', ()=>{
  let root = document.getElementById('root');
  let store;

  delete window.currentUser;

  window.UserAPIUtil = UserAPIUtil;
  store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
});
