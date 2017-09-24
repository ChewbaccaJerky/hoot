import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BusinessShow from './business_show';
import { fetchBusiness } from '../../../actions/business_actions';

const mapStateToProps = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.biz_id]
});

const mapDispatchToProps = (dispatch) => ({
  fetchBusiness: place_id => dispatch(fetchBusiness(place_id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessShow));
