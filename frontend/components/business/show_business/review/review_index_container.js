import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBusinessReviews, deleteReview } from '../../../../actions/review_actions';
import ReviewIndex from './review_index';
const mapStateToProps = state => ({
  reviews: state.entities.reviews,
  currentUser: state.entities.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchBusinessReviews: place_id => dispatch(fetchBusinessReviews(place_id)),
  deleteReview: id => dispatch(deleteReview(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex))
