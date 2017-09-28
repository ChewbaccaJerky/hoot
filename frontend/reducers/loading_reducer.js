import { START_LOADING_BUSINESSES, START_LOADING_BUSINESS, RECEIVE_BUSINESSES, RECEIVE_BUSINESS } from '../actions/business_actions';

const LoadingReducer = (oldState = false, action) => {
  Object.freeze(oldState);

  switch(action.type) {

    case START_LOADING_BUSINESSES:
      return true;
    case START_LOADING_BUSINESS:
      return true;
    case RECEIVE_BUSINESSES:
      return false;
    case RECEIVE_BUSINESS:
      return false;
    default:
      return oldState;
  }
};

export default LoadingReducer;
