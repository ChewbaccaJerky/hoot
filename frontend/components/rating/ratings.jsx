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

/* star images

blue star
http://res.cloudinary.com/nearbytes/image/upload/q_100/v1495210337/good-star_g0lskg.png

orange star
http://www.freepngimg.com/download/star/11-star-png-image.png

yellow star
http://www.freepngimg.com/download/star/8-yellow-star-png-image.png
*/

// content = (
//   <ReactStars
//     className="ratings"
//     count={5}
//     size={24}
//     color1={"#E8E8E8"}
//     color2={"#f8cc14"}
//     value={props.ratings}
//     edit={false}/>
// );
