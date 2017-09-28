import React from 'react';
import Ratings from '../../../rating/ratings';
import { Redirect } from 'react-router';

const ReviewIndexItem = (props) => {
  let review;
  let deleteBtn = "";
  let currentUser = { id: -1};
  if(props.review) {
    // console.log(review);
    review = props.review;
    currentUser = props.currentUser;
    deleteBtn = (<button onClick={() => props.deleteReview(review.id)}>Delete</button>);
  }

  const randNum = Math.ceil(Math.random()*10);

  return (
    <li className="review-index-item">
      <div className="avatar">
        <img className="profile-img"
             src={`http://lorempixel.com/400/400/abstract/${randNum}`}
             alt="profile pic"/>
        <h1>{review.author.username ? review.author.username : ""}</h1>
      </div>
      <div className="ratings-body">
        <div>
          <Ratings ratings={review.ratings ? review.ratings : 5} />
          { currentUser.id === review.author.id && review.author ? deleteBtn : "" }
        </div>
        <p>{review.body}</p>
      </div>
    </li>
  );
};


export default ReviewIndexItem;
