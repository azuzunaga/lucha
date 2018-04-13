import { connect } from 'react-redux';
import React from 'react';

import { selectAllActivities } from '../../reducers/selectors';
import { requestAllActivities } from '../../actions/activities_actions';


import ActivityIndex from './activity_index';

const mapStateToProps = state => {
  return {
    activities: selectAllActivities(state),
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllActivities: () => dispatch(requestAllActivities()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityIndex);
