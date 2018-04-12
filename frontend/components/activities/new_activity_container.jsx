import { connect } from 'react-redux';
import React from 'react';

import { selectAllRoutes } from '../../reducers/selectors';
import { createActivity } from '../../actions/activities_actions';

import NewActivity from './new_activity';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.activities,
    routes: state.routes,
  };
};

const mapDispatchToProps = dispatch => ({
  processActivityForm: activity => dispatch(createActivity(activity))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewActivity);
