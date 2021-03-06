import React from 'react';
import BusinessIndexItem from './business_index_item';
import Loading from '../../spinner/spinner';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.businesses;
  }

  render() {
    let businesses = Object.values(this.props.businesses);
    let image_key = this.props.image_key;

    businesses = businesses.map(biz => (
      <BusinessIndexItem key={biz.place_id} image_key={image_key} biz={biz} fetchBusiness={this.props.fetchBusiness}/>
    ));

    if(this.props.loading) {
      return (<div className="business-index-container"><Loading /></div>);
    }

    return (
      <div>
        <div className="business-index-container">
          <ul className="business-index">
            { businesses }
          </ul>
        </div>
      </div>
    );
  }
}

export default BusinessIndex;
