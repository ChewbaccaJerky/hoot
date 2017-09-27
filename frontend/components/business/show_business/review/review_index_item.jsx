import React from 'react';

const ReviewIndexItem = (props) => {
  let review = {author:{ username: ""}, ratings: 5, body: ""}
  if(props.review) {
    review = props.review;
  }
  const randNum = Math.ceil(Math.random()*10);
  
  return (
    <li className="review-index-item">
      <div className="avatar">
        <img className="profile-img"
             src={`http://lorempixel.com/400/400/abstract/${randNum}`}
             alt="profile pic"/>
        <h1>{review.author.username}</h1>
        <h2>Rating: {review.ratings}</h2>
      </div>
      <p>{review.body}</p>
    </li>
  );
};

export default ReviewIndexItem;
