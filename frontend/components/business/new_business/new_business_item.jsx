import React from 'react';

const NewBusinessItem = ({biz, image_key}) => {
  let url = "https://maps.googleapis.com/maps/api/place/photo?";
  // console.log(image_key);
  let types = biz.types.join(", ")
  return (
    <div className="new-business-item">
      <img src={`${url}maxwidth=400&photoreference=${biz.photo_reference}&key=${image_key}`} alt={biz.name} />
      <div className="new-business-info">
        <a href="#"><h1>{biz.name}</h1></a>
        <h3>{types}</h3>
        <h3>{biz.address}</h3>
      </div>
    </div>
  );
};

export default NewBusinessItem;
