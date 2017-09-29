import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  let middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
);

export default configureStore;
