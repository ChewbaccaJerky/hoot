import React from 'react';

const BusinessCard = (props) => {

  return (
    <div className="business-card">
    <div className="map-container">
      <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/e8/98/3d/e8983de0-9f72-b873-35fe-9cb5a73128a9/mzl.lsqaowjh.png/1200x630bb.jpg"
           alt="map placeholder"/>
    </div>
    <ul>
      <li>{props.biz.address}</li>
      <li>{props.biz.phone}</li>
      <li><a href={props.biz.website}>{props.biz.website}</a></li>
    </ul>
    </div>
  );
};

export default BusinessCard;
