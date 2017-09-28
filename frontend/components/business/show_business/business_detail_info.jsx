import React from 'react';

const BusinessDetailInfo = (props) => {
  let biz = props.biz;
  let hours = [];
  let words = [];
  if(biz.hours) {
    hours = props.biz.hours.map((day, idx) => {
      words =  day.split(': ');
      let hrs = words[1].split(',');
      return (
        <li key={day}>
          <div>
            <h2>{words[0].slice(0,3)}:</h2>
            <ul>
              <li>{hrs[0] ? hrs[0] : ""}</li>
              <li>{hrs[1] ? hrs[1] : ""}</li>
            </ul>
          </div>
        </li>
      );
    });
  }

  return (
    <div className="detail-info">
      <h1><span>Business Hours</span></h1>
      <ul>
        { hours }
      </ul>
    </div>
  );
};

export default BusinessDetailInfo;
