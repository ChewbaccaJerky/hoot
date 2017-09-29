import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BusinessSearch from './business_search';
import { fetchBusinesses, searchAndFetchBusinesses } from '../../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    image_key: state.ui.image,
    loading: state.ui.loading,
    businesses: state.entities.businesses
  };
};

const mapDispatchToProps = dispatch => ({
  searchAndFetchBusinesses: searchParams => dispatch(searchAndFetchBusinesses(searchParams)),
  fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessSearch));
