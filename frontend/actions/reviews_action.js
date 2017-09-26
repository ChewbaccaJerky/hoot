import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_BUSINESS_REVIEWS = 'RECEIVE_BUSINESS_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

const receiveBusinessReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const receiveBusinessReviews = review => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
})

export const fetchBusinessReviews = (place_id) => dispatch => (
  ReviewApiUtil.fetchBusinessReviews(place_id)
    .then((reviews) => (dispatch(receiveBusinessReviews(reviews)))),
          (errs) => (dispatch(receiveBusinessErrors(errs)))
);

export const createBusinessReview = (place_id, review) => dispatch => (
  ReviewApiUtil.createBusinessReview(place_id, review)
    .then(review => dispatch(receiveBusinessReview(review)))),
         (errs) => dispatch(receiveReviewErrors(errs))
);

export const updateReview = (review) => dispatch => (
  ReviewApiUtil.updateReview(review)
    .then(review => dispatch(receiveBusinessReview(review)))),
          (errs) => dispatch(receiveReviewErrors(errs))
);

export const deleteReview = (review_id) => dispatch => (
  ReviewApiUtil.destroyReview(review_id)
    .then((review) => dispatch(removeReview(review)))),
          (errs) => dispatch(receiveReviewErrors(errs))
);
