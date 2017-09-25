import React from 'react';

const ImageCarouselItem = (props) => {
  let url = "https://maps.googleapis.com/maps/api/place/photo?";
  let photo = props.photo;
  return (
    <div className="image-carousel-item">
       <img src={`${url}maxwidth=400&photoreference=${props.photo.photo_reference}&key=${props.image_key}`} />
    </div>
  )
};

export default ImageCarouselItem;
