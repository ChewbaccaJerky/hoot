import React from 'react';
import BusinessIndexItem from './business_index_item';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let businesses = Object.values(this.props.businesses);
    let image_key = this.props.image_key;
    businesses = businesses.map(biz => (
      <BusinessIndexItem key={biz.place_id} image_key={image_key} biz={biz} />
    ));

    return (
      <div className="business-index-container">
        <ul className="business-index">
          { businesses }
        </ul>
      </div>
    );
  }
}

export default BusinessIndex;
