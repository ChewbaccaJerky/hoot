import React from 'react';

const BusinessDetailInfo = (props) => {
  let biz = props.biz;
  let hours = [];
  if(biz.hours) {
    hours = props.biz.hours.map((day, idx) => (
      <li key={idx}>{day}</li>
    ));
  }

  return (
    <div>
      <ul>
        {hours}
      </ul>
    </div>
  );
};

export default BusinessDetailInfo;
