import React from 'react';
const Rating = (props) => {
  const imgSrc = "http://www.freepngimg.com/download/star/11-star-png-image.png";
  let content = [];
  if(props.ratings) {
    for (var i = 0; i < props.ratings; i++) {
      content.push(
        <img key={i * (Math.random() * 9999)} src={imgSrc} className="star"/>
      );
    }
  }
  
  return (
    <div className="ratings-container">
      <div className="ratings">
        {content}
      </div>
    </div>
  );
};

export default Rating;
