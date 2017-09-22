import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewBusinessIndex from './new_business_index';
import { fetchBusinesses, fetchBusiness } from '../../../actions/business_actions';

const mapStateToProps = state => {
  let topThree = [Object.values(state.entities.businesses).slice(0,3)][0]
  return {
    new_businesses: topThree
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  fetchBusiness: placeId => dispatch(fetchBusiness(placeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBusinessIndex);
