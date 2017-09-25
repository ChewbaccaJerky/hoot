import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BusinessSearch from './business_search';
import { searchAndFetchBusinesses } from '../../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    image_key: state.ui.image
  };
};

const mapDispatchToProps = dispatch => ({
  searchAndFetchBusinesses: searchParams => dispatch(searchAndFetchBusinesses(searchParams))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessSearch));
