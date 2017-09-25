import React from 'react';
import { Link } from 'react-router-dom';
const NewBusinessItem = ({biz, image_key}) => {
  let url = "https://maps.googleapis.com/maps/api/place/photo?";
  // console.log(image_key);
  // let types = biz.types.join(", ")
  return (
    <div className="new-business-item">
      <Link to={`/businesses/${biz.place_id}`} >
      <img src={`${url}maxwidth=400&photoreference=${biz.photo_reference}&key=${image_key}`} alt={biz.name} />
      </Link>
      <div className="new-business-info">
        <Link to={`/businesses/${biz.place_id}`}><h1>{biz.name}</h1></Link>
        <h3>Ratings Placeholder</h3>
        <h3>{biz.address}</h3>
      </div>
    </div>
  );
};

export default NewBusinessItem;
