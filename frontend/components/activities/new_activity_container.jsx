import { connect } from 'react-redux';
import React from 'react';

import { requestAllRoutes } from '../../actions/routes_actions';
import { selectAllRoutes } from '../../reducers/selectors';
import { createActivity } from '../../actions/activities_actions';

import NewActivity from './new_activity';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.activities,
    routes: selectAllRoutes(state),
  };
};

const mapDispatchToProps = dispatch => ({
  processActivityForm: activity => dispatch(createActivity(activity)),
  requestAllRoutes: () => dispatch(requestAllRoutes()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewActivity);
