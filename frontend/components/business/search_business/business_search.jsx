import React from 'react';
import BusinessIndexContainer from './business_index_container';
import BusinessMap from '../../map/business_map';
import Loading from '../../spinner/spinner';

const defaultBusiness = {
"ChIJA-2qKIt9hYARZ5N1NdUVtHE": {
"name": "Oakland",
"address": "Oakland, CA, USA",
"location": {
"lat": 37.8043637,
"lng": -122.2711137
},
"opened": true,
"place_id": "ChIJA-2qKIt9hYARZ5N1NdUVtHE",
"types": [
"locality",
"political"
],
"photo_reference": "CmRaAAAAR9lo0mwVQ7MltRPjjiZWUKc3pPMDvhAf8ix-Z0eAaYK3vW5NRefoD54_gWhx94_IQJTc9sZ-Lzg3F3MrvAUeLDhh4_p0g_SMZgh7NRvxdXwlc_sISGZBRdf6tVr1WZ9EEhCvbG9zVWK0CqwsNGiHZjiEGhQKJN3lPCZoQd5E-s7cNeV_BYAhVw"
}}

class BusinessSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = defaultBusiness;
  }

  render() {
    let bizMap = (<BusinessMap businesses={defaultBusiness} image_key={this.props.image_key} />);
    let bizIndex = (<BusinessIndexContainer businesses={defaultBusiness} image_key={this.props.image_key}/>);

    if(Object.values(this.props.businesses).length > 0) {
      bizMap = (<BusinessMap businesses={this.props.businesses} image_key={this.props.image_key} />);
      bizIndex = (<BusinessIndexContainer businesses={this.props.businesses} image_key={this.props.image_key}/>);
    }

    if(this.props.loading) {
      return (
        <Loading />
      );
    }

    return(
      <div className="business-search-container">
        {bizIndex}
        {bizMap}
      </div>
    );
  }
}

export default BusinessSearch;
