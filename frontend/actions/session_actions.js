import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(loginUser => (
    dispatch(receiveCurrentUser(loginUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(newUser => (
    dispatch(receiveCurrentUser(newUser))
  ), err => (
      dispatch(receiveErrors(err.responseJSON))
  ))
);
