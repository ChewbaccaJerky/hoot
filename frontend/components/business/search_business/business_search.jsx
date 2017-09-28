import React from 'react';
import BusinessIndex from './business_index';
import BusinessMap from '../../map/business_map';

class BusinessSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.businesses;
  }


  render() {
    return(
      <div className="business-search-container">
        <div>
          <BusinessIndex businesses={this.props.businesses} image_key={this.props.image_key}/>
        </div>
        <BusinessMap businesses={this.props.businesses} image_key={this.props.image_key}/>
      </div>
    );
  }
}

export default BusinessSearch;
