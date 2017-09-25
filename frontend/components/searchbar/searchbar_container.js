import { connect } from 'react-redux';
import { searchAndFetchBusinesses } from '../../actions/business_actions';
import SearchBar from './searchbar';

const mapDispatchToProps = dispatch => ({
  searchAndFetchBusinesses: searchParams => dispatch(searchAndFetchBusinesses(searchParams))
});

export default connect(null, mapDispatchToProps)(SearchBar);
