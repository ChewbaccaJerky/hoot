import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';
import { createBusinessReview } from '../../../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    place_id: ownProps.match.params.biz_id
  };
};

const mapDispatchToProps = dispatch => {

  return {
    createBusinessReview: (place_id, review) => dispatch(createBusinessReview(place_id, review))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));
