import React from 'react';

const NewBusinessItem = ({biz}) => {
  let url = "https://maps.googleapis.com/maps/api/place/photo?";
  let key = "";
  return (
    <div className="newBusinessItem">

      <h1>{biz.name}</h1>
      <h3>{biz.types}</h3>
      <h3>{biz.address}</h3>
    </div>
  );
};

export default NewBusinessItem;
