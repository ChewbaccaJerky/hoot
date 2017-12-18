import { connect } from 'react-redux';
import { login, logout, signup} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  let formType = "signup";
  if(ownProps.formType === 'Log In') {
    formType = "login"
  }

  return {
    loggedIn: Boolean(state.entities.session.currentUser),
    errors: state.entities.errors.session,
    closeModal: ownProps.closeModal,
    formType,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = (ownProps.formType === "Sign Up") ? signup : login;

  return {
    processForm: (user) => dispatch(processForm(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
