import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBusinessReviews } from '../../../../actions/review_actions';
import ReviewIndex from './review_index';
const mapStateToProps = state => ({
  reviews: state.entities.reviews
});

const mapDispatchToProps = dispatch => ({
  fetchBusinessReviews: place_id => dispatch(fetchBusinessReviews(place_id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex))
