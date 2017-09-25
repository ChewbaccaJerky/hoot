import React from 'react';

const BusinessCurrentInfo = (props) => {
  let status = {sign: "Closed", cName: "closed"};
  let price_level = "";
  if(props.open_now) {
    status.sign = "Open";
    status.cName = "open";
  }
  if(props.price_level) {
    for (var i = 0; i < props.price_level; i++) {
      price_level += "$";
    }
  }

  return (
    <div className="current-info">
      <h1 className={status.cName}>Status: {status.sign}</h1>
      <h1>Price: {price_level}</h1>
    </div>
  );
};

export default BusinessCurrentInfo;
