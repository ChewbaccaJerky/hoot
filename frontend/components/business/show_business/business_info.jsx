import React from 'react';
import BusinessCurrentInfo from './business_current_info';
import BusinessDetailInfo from './business_detail_info';

const BusinessInfo = ({biz}) => (
  <div className="business-info-container">
    <BusinessCurrentInfo biz={biz} />
    <BusinessDetailInfo biz={biz} />
  </div>
);


export default BusinessInfo;
