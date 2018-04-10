import { connect } from 'react-redux';
import React from 'react';
import { requestAllRoutes } from '../../actions/routes_actions';
import { selectAllRoutes } from '../../reducers/selectors';

import RouteIndex from './route_index';


const mapStateToProps = state => {
  return {
    routes: selectAllRoutes(state),
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllRoutes: () => dispatch(requestAllRoutes()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteIndex);
