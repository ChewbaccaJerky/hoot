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
        <div> <i className="material-icons">home</i>
          {props.biz.address}
        </div>
        <div> <i className="material-icons">phone</i>
          {props.biz.phone}
        </div>
        <div><i className="material-icons">web</i>
          <a href={props.biz.website}>{props.biz.website}</a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
