import React from 'react';
import { Link } from 'react-router-dom';
import Ratings from '../../rating/ratings';


const NewBusinessItem = ({biz, image_key}) => {
  let url = "https://maps.googleapis.com/maps/api/place/photo?";

  return (
    <div className="new-business-item">
      <div className="new-biz-img">
        <Link to={`/businesses/${biz.place_id}`} >
            <img src={`${url}maxwidth=400&photoreference=${biz.photo_reference}&key=${image_key}`} alt={biz.name} />
        </Link>
      </div>
      <div className="new-business-info">
        <Link to={`/businesses/${biz.place_id}`}><h1>{biz.name}</h1></Link>
        <Ratings ratings={biz.ratings} />
        <h3>{biz.address}</h3>
      </div>
    </div>
  );
};

export default NewBusinessItem;
