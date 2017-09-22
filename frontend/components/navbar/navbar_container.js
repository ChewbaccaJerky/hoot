import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { fetchBusinesses } from '../../actions/business_actions';
import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => {
  let path = ownProps.location.pathname;
  return {
    loggedIn: Boolean(state.entities.session.currentUser),
    currentUser: state.entities.session.currentUser,
    businesses: state.entities.businesses,
    path: path
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchBusinesses: () => dispatch(fetchBsinesses())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
