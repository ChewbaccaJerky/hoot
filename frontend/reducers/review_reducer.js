import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { merge } from 'lodash';

const ReviewReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {

    case RECEIVE_REVIEWS:
      return action.reviews;

    case RECEIVE_REVIEW:
      newState[action.review.id] = action.review
      return newState;

    case REMOVE_REVIEW:
      delete newState[action.review.id]
      return newState;
    default:
      return oldState;
  }
};

export default ReviewReducer;
