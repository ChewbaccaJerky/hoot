
export const fetchBusinessReviews = (place_id) => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${place_id}/reviews`
  })
);

export const createBusinessReview = (place_id, review) => (
  $.ajax({
    method: 'POST',
    url: `api/businesses/${place_id}/reviews`,
    data: review
  })
);

export const editReview = review_id => (
  $.ajax({
    method: 'GET',
    url: `api/reviews/${review_id}/edit`
  })
);

export const updateReview = review => (
  $.ajax({
    method: 'PATCH',
    url: `api/reviews/${review.review.id}`,
    data: review
  })
);

export const destroyReview = review_id => (
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${review_id}`
  })
);
