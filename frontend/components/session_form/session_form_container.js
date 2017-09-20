import { connect } from 'react-redux';
import { login, logout, signup} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  let formType = "signup";

  if(ownProps.location.pathname === '/login') {
    formType = "login"
  }

  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = (ownProps.location.pathname === "/signup") ? signup : login;

  return {
    processForm: (user) => dispatch(processForm(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
