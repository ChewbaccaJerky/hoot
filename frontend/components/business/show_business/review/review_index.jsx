import React from 'react';
import ReviewIndexItem from './review_index_item';



class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusinessReviews(this.props.match.params.biz_id);
  }


  render() {
    let content = [];
    let reviews;
    if(this.props.reviews) {
      reviews = Object.values(this.props.reviews);
      content = reviews.map((review, idx) => (
        <ReviewIndexItem key={review.author.id} review={review} />
      ));
    }
    return (
      <div className="review-index-container">
        <h1 className="review-header"> Reviews </h1>
        <ul className="review-index">
          {content}
        </ul>
      </div>
    );
  }
}

export default ReviewIndex;
