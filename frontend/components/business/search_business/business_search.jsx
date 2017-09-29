import React from 'react';
import BusinessIndex from './business_index';
import BusinessMap from '../../map/business_map';

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
    console.log(props);
  }

  render() {
    let bizMap = (<BusinessMap businesses={defaultBusiness} image_key={this.props.image_key} />);
    let bizIndex = (<BusinessIndex businesses={defaultBusiness} image_key={this.props.image_key}/>);

    if(Object.values(this.props.businesses).length > 0) {
      bizMap = (<BusinessMap businesses={this.props.businesses} image_key={this.props.image_key} />);
      bizIndex = (<BusinessIndex businesses={this.props.businesses} image_key={this.props.image_key}/>);
    }

    return(
      <div className="business-search-container">
        <div>
          {bizIndex}
        </div>
        {bizMap}
      </div>
    );
  }
}

export default BusinessSearch;
