import { combineReducers } from 'redux';
import ImageReducer from './image_reducer';

const UIReducer = combineReducers({
  image: ImageReducer
});

export default UIReducer;
