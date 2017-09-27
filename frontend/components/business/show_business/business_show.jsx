import React from 'react';
import BusinessCard from './business_card';
import BusinessInfo from './business_info';
import ImageCarousel from './image_carousel';
import ReviewIndexContainer from './review/review_index_container';
import ReviewFormContainer from './review/review_form_container';
import Ratings from '../../rating/ratings.jsx';
import Modal from 'react-modal';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isModalOpen: false};
    this.openCreateReviewForm = this.openCreateReviewForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  componentDidMount(){
    this.props.fetchBusiness(this.props.match.params.biz_id);
    this.props.fetchBusinessReviews(this.props.match.params.biz_id);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.match.params.biz_id !== newProps.match.params.biz_id) {
      this.props.fetchBusiness(newProps.match.params.biz_id);
      this.props.fetchBusinessReviews(newProps.match.params.biz_id);
    }
  }

  openCreateReviewForm() {
    this.setState({isModalOpen: true});
  }

  closeForm() {
    this.setState({isModalOpen: false});
  }

  render() {
    let biz = {};
    let price_level = "";
    let image_key = "";
    let rating = 5;
    if(this.props.business) {
      biz = this.props.business;
      image_key = this.props.image_key;
      rating = biz.ratings.toFixed(2);
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
            <h2>Rating: {rating}/5</h2>
          </div>
          <button onClick={this.openCreateReviewForm}>Write A Review</button>
        </div>

        <div className="features-container">
          <BusinessCard biz={biz} />
          <ImageCarousel photos={biz.photos} image_key={image_key}/>
        </div>

        <div className="review-and-biz-container">
          <ReviewIndexContainer reviews={this.props.reviews}/>
          <BusinessInfo biz={biz}/>
        </div>

        <Modal
          isOpen={this.state.isModalOpen}
          contentLabel="Review Form"
          onRequestClose={this.props.fetchBusinessReviews(this.props.match.params.biz_id)}>
          <button onClick={this.closeForm}>X</button>
          <ReviewFormContainer formType="new"/>

        </Modal>
      </div>
    );
  }
}

export default BusinessShow;
