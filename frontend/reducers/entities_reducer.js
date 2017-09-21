import businesses from './business_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import { combineReducers } from 'redux';

const EntitiesReducer = combineReducers({
  businesses,
  session,
  errors
});

export default EntitiesReducer;
