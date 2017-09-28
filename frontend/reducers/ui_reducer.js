import { combineReducers } from 'redux';
import ImageReducer from './image_reducer';
import LoadingReducer from './loading_reducer';

const UIReducer = combineReducers({
  image: ImageReducer,
  loading: LoadingReducer
});

export default UIReducer;
