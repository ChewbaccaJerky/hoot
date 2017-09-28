import React from 'react';
import ReviewIndexItem from './review_index_item';



class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.reviews;
  }

  componentDidMount() {
    this.props.fetchBusinessReviews(this.props.match.params.biz_id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.reviews);
  }

  render() {
    let reviews;
    let content = [];
    if(this.props.reviews) {
      reviews = Object.values(this.props.reviews);
      content = reviews.map((review, idx) => (
        <ReviewIndexItem key={`${review.id}Review`}
                        review={review}
                        currentUser={this.props.currentUser}
                        deleteReview={this.props.deleteReview}/>
      ));
    }

    return (
      <div className="review-index-container">
        <h1 className="review-header"> Reviews </h1>
        <ul className="review-index">
          {content.length > 0 ? content : (<li className="no-reviews"><h1>Be the first to review!</h1></li>)}
        </ul>
      </div>
    );
  }
}

export default ReviewIndex;
