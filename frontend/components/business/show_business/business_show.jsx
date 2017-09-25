import React from 'react';
import BusinessCard from './business_card';
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
    let price_level = "";
    let image_key = "";
    if(this.props.business) {
      biz = this.props.business;
      image_key = this.props.image_key;
    }
    if(biz.price_level) {
      for (var i = 0; i < biz.price_level; i++) {
        price_level += '$';
      }
    }

    return (
      <div className="business-show-container">
        <div className="business-show-header">
          <div>
            <h1>{biz.name}</h1>
            <h3>Ratings Placeholder</h3>
          </div>
          <button>Write A Review</button>
        </div>

        <div className="features-container">
          <BusinessCard biz={biz} />
          <ImageCarousel photos={biz.photos} image_key={image_key}/>
        </div>

        <div className="review-and-biz-container">
          <div className="review-container">Reviews Placeholder</div>
          <BusinessInfo biz={biz}/>
        </div>
      </div>
    );
  }
}

export default BusinessShow;
