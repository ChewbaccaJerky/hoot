import React from 'react';
import ImageCarouselItem from './image_carousel_item';

const getImages = (photos) => {
  const imageItems = [];
  let imageItem;
  // less than three and photos must exists
  for (var i = 0; i < 3 && photos; i++) {
    imageItem = (<ImageCarouselItem image={photos[i]} key={photos[i].photo_reference}/>);
    imageItems.push(imageItem);
  }

  return imageItems;
}

const ImageCarousel = (props) => {
  let photos = [];
  photos = getImages(props.photos);

  return(
    <div className="image-carousel">
      { photos }
    </div>
  );
};

export default ImageCarousel;
