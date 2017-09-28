import React from 'react';
import BusinessMap from '../../map/business_map';

const BusinessCard = (props) => {

  return (
    <div className="business-card">
      <div className="map-container">
        <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/e8/98/3d/e8983de0-9f72-b873-35fe-9cb5a73128a9/mzl.lsqaowjh.png/1200x630bb.jpg"
             alt="map placeholder"/>
      </div>
      <div className="card-info">
        {props.biz.address}
        {props.biz.phone}
        <a href={props.biz.website}>{props.biz.website}</a>
      </div>
    </div>
  );
};

export default BusinessCard;
