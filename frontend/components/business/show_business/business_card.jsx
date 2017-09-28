import React from 'react';
import BusinessMap from '../../map/business_map';

const BusinessCard = (props) => {
  let bizMap = "";
  if(props.biz.place_id) {
    let place_id = props.biz.place_id;
    bizMap = (<BusinessMap businesses={{[place_id]: props.biz}} image_key={props.image_key} />);
  }
  return (
    <div className="business-card">
      {bizMap}
      <div className="card-info">
        {props.biz.address}
        {props.biz.phone}
        <a href={props.biz.website}>{props.biz.website}</a>
      </div>
    </div>
  );
};

export default BusinessCard;
