import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS, RECEIVE_BUSINESS_ERRORS } from '../actions/business_actions';
import { merge } from "lodash";

const BusinessReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_BUSINESSES:
      return action.businesses

    case RECEIVE_BUSINESS:
      newState[action.business.place_id] = action.business
      return newState;

    default:
      return oldState;
  }
};

export default BusinessReducer;
