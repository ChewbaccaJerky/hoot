import React from 'react';
import BusinessIndex from './business_index';

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
      </div>
    );
  }
}

export default BusinessSearch;
