import { connect } from 'react-redux';
import React from 'react';

import { selectAllActivities } from '../../reducers/selectors';
import { requestAllActivities } from '../../actions/activities_actions';


import ActivityIndex from './activity_index';

const mapStateToProps = state => {
  return {
    routes: selectAllActivities(state),
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllActivities: () => dispatch(requestAllActivities()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityIndex);
