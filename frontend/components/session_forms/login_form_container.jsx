import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    signupLink: <Link to="/signup">Sign Up</Link>,
    demoLink: <Link to="/demo">Demo User</Link>,
    tourLink: <Link to="/tour">Take Tour</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
