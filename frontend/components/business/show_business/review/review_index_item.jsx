import React from 'react';

const ReviewIndexItem = (props) => {
  console.log(props);
  const review = props.review;
  const randNum = Math.ceil(Math.random()*10);
  return (
    <li className="review-index-item">
      <div className="avatar">
        <img className="profile-img"
             src={`http://lorempixel.com/400/400/abstract/${randNum}`}
             alt="profile pic"/>
        <h1>{review.author.username}</h1>
        <h2>Ratings: {review.ratings}</h2>
      </div>
      <p>{review.body}</p>
    </li>
  );
};

export default ReviewIndexItem;
