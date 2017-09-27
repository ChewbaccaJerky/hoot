import React from 'react';
import ReviewIndexItem from './review_index_item';

const ReviewIndex = (props) => {
  let content = [];
  let reviews = Object.values(props.reviews);
  if(reviews.length > 0) {
    content = reviews.map((review, idx) => (
      <ReviewIndexItem key={review.author.id} review={review} />
    ));
  }
  console.log(content.length);
  return (
    <div className="review-index-container">
      <h1 className="review-header"> Reviews </h1>
      <ul className="review-index">
        {content}
      </ul>
    </div>
  );
};

export default ReviewIndex;
