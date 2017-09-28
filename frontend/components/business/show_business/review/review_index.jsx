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
    let content = [];
    let reviews;
    if(this.props.reviews) {
      console.log(this.props.reviews);
      reviews = Object.values(this.props.reviews);
      content = reviews.map((review, idx) => (
        <ReviewIndexItem key={review.id}
                        review={review}
                        currentUser={this.props.currentUser}
                        deleteReview={this.props.deleteReview}/>
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
