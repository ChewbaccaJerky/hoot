import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => {
  let path = ownProps.location.pathname;
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    path: path
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
