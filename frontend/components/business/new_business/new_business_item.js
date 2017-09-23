import React from 'react';

const NewBusinessItem = ({biz, image_key}) => {
  let url = "https://maps.googleapis.com/maps/api/place/photo?";
  console.log(image_key);
  return (
    <div className="new-business-item">
      <img src={`${url}maxwidth=400&photoreference=${biz.photo_reference}&key=${image_key}`} alt={biz.name} />
      <h1>{biz.name}</h1>
      <h3>{biz.types}</h3>
      <h3>{biz.address}</h3>
    </div>
  );
};

export default NewBusinessItem;
