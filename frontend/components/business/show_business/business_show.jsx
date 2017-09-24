import React from 'react';
import BusinessInfo from './business_info';
import ImageCarousel from './image_carousel';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchBusiness(this.props.match.params.biz_id);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.match.params.biz_id !== newProps.match.params.biz_id) {
      this.props.fetchBusiness(newProps.match.params.biz_id);
    }
  }

  render() {
    let biz = {};
    if(this.props.business) {
      biz = this.props.business;
    }
    return (
      <div className="business-show-container">
        <div className="business-show-header">
          <div>
            <h1>{biz.name}</h1>
            <h3>Ratings....</h3>
            <h3>{biz.price_level}.{biz.type}</h3>
          </div>
          <button>Write A Review</button>
        </div>

        <div className="features-container">
          <div className="map"></div>
          <div className="image-carousel"></div>
        </div>

        <div className="review-and-biz-info">
          <div className="review-container">Reviews</div>
          <BusinessInfo biz={biz}/>
        </div>
      </div>
    );
  }
}

export default BusinessShow;
