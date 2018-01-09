import React from 'react';
import { Link } from 'react-router-dom';

const BusinesIndexItem = (props) => {
  let biz = props.biz;
  let image_key = props.image_key;
  
  let url = "https://maps.googleapis.com/maps/api/place/photo?";
  return (
    <li className="business-item">
      <Link to={`/businesses/${biz.place_id}`}>
        <div className="img-container">
          <img src={`${url}maxwidth=300&maxheight=300&photoreference=${biz.photo_reference}&key=${image_key}`} />
        </div>
        <div className="business-item-info">
        <h1>{biz.name}</h1>
        <h2>{biz.address}</h2>
        
        </div>
      </Link>
    </li>
  );
};
export default BusinesIndexItem;
