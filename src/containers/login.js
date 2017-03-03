import { connect } from 'react-redux';
import Login from '../components/login/login';
import { loadInitialState } from '../store/actions/loadInitialState';
import { loginRequest } from '../store/actions/login';

function mapStateToProps(state) {
  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    loginRequest        : (userData) => dispatch(loginRequest(userData))
  };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;