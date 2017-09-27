import businesses from './business_reducer';
import reviews from './review_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import { combineReducers } from 'redux';

const EntitiesReducer = combineReducers({
  businesses,
  reviews,
  session,
  errors
});

export default EntitiesReducer;
