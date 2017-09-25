import React from 'react';

const BusinessDetailInfo = (props) => {
  let biz = props.biz;
  let hours = [];
  let words = [];
  if(biz.hours) {
    hours = props.biz.hours.map((day, idx) => {
      words =  day.split(': ');
      return (
        <li key={day}>
          <span>{words[0].slice(0, 3)}</span> {words[1]}
        </li>
      );
    });
  }

  return (
    <div className="detail-info">
      <h1>Business Hours</h1>
      <ul>
        { hours }
      </ul>
    </div>
  );
};

export default BusinessDetailInfo;
