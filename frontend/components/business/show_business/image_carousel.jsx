import React from 'react';
import ImageCarouselItem from './image_carousel_item';

const getImages = (photos, image_key) => {

  const imageItems = [];
  let imageItem;

  for(let i in photos) {
    imageItem = (<ImageCarouselItem
      photo={photos[i]}
      key={photos[i].photo_reference}
      image_key={image_key}/>);
      imageItems.push(imageItem);
  }



  return imageItems;
}

const ImageCarousel = (props) => {
  let photos = [];
  photos = getImages(props.photos, props.image_key);

  return(
    <div className="image-carousel">
      { photos }
    </div>
  );
};

export default ImageCarousel;
