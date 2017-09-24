import React from 'react';

const BusinessCurrentInfo = (props) => {
  let open_now = "false";
  let price_level = "";
  if(props.open_now) {
    open_now = "true";
  }
  if(props.price_level) {
    for (var i = 0; i < props.price_level; i++) {
      price_level += "$";
    }
  }

  return (
    <div className="business-current-info">
      <h1>{open_now}</h1>
      <h1>{price_level}</h1>
    </div>
  );
};

export default BusinessCurrentInfo;
