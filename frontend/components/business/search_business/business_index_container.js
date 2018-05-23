import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BusinessIndex from './business_index';
import {fetchBusinesses, 
        fetchBusiness, 
        searchAndFetchBusinesses} from '../../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    image_key: ownProps.image_key,
    loading: state.ui.loading,
    businesses: state.entities.businesses
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    searchAndFetchBusinesses: params => dispatch(searchAndFetchBusinesses),
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessIndex));
