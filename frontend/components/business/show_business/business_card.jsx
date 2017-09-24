import React from 'react';

const BusinessCard = (props) => {

  return (
    <div className="business-card">
    <div className="map-container">
      Google Map
    </div>
    <ul>
      <li>{props.biz.phone}</li>
      <li>{props.biz.website}</li>
    </ul>
    </div>
  );
};

export default BusinessCard;
