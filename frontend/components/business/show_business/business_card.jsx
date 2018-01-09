import React from 'react';
import BusinessMap from '../../map/business_map';

const BusinessCard = (props) => {
  console.dir(props);
  let bizMap = "";
  if(props.biz.place_id) {
    let place_id = props.biz.place_id;
    bizMap = (<BusinessMap businesses={{[place_id]: props.biz}} image_key={props.image_key} />);
  }

  let price = "";
  for (let i = 0; i < props.biz.price_level; i++) {
    price += "$";
  }

  let open = props.biz.open_now ? (<span className="open">Open</span>) : (<span className="close">Closed</span>);

  return (
    <div className="business-card">
      {bizMap}
      <div className="card-info">
        <div> 
          <i className="material-icons">room</i>
          <span className="address"> {props.biz.address}</span>
        </div>
        <div> 
          <i className="material-icons">phone</i>
          <span>{props.biz.phone}</span>
        </div>
        <div>
          <i className="material-icons">web</i>
          <span><a href={props.biz.website}>{props.biz.name}</a></span>
        </div>
        <div>
          <i className="material-icons">attach_money</i>
          <span className="price">{price}</span>
        </div>
        <div>
          <i className="material-icons">home</i>
          {open}
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
