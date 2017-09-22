import React from 'react';

const NewBusinessItem = ({biz}) => (
  <div className="newBusinessItem">
    <img src="https://maps.googleapis.com/maps/api/place/photo?photo_reference={biz.photo_reference}" />
    <h1>{biz.name}</h1>
    <h3>{biz.types}</h3>
    <h3>{biz.address}</h3>
  </div>
);

export default NewBusinessItem;
