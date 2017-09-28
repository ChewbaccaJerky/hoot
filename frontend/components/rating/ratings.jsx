import React from 'react';
import FontAwesome from 'react-fontawesome';
const Rating = (props) => {
  let stars = [];
  if(props.ratings) {
    for (var i = 0; i < props.ratings; i++) {
      stars.push(
        (<img key={i} src="http://www.freepngimg.com/download/star/11-star-png-image.png" className="star"/>)
      );
    }
  }
  return (
    <div className="ratings">
      {stars}
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
