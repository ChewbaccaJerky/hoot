import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { searchAndFetchBusinesses } from '../../actions/business_actions';
import SearchBar from './searchbar';

const mapDispatchToProps = dispatch => ({
  searchAndFetchBusinesses: searchParams => dispatch(searchAndFetchBusinesses(searchParams))
});

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));
