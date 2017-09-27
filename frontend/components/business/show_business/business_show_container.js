import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BusinessShow from './business_show';
import { fetchBusiness } from '../../../actions/business_actions';
import { fetchBusinessReviews } from '../../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.biz_id],
    reviews: state.entities.reviews,
    image_key: state.ui.image
});

const mapDispatchToProps = (dispatch) => ({
  fetchBusiness: place_id => dispatch(fetchBusiness(place_id)),
  fetchBusinessReviews: place_id => dispatch(fetchBusinessReviews(place_id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessShow));
