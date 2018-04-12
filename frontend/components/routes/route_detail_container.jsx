import { connect } from 'react-redux';
import React from 'react';
import { setRouteId } from '../../actions/ui_actions';

import RouteDetail from './route_detail';

const mapStateToProps = state => {
  return {
    ui: state.ui
  };
};

const mapDispatchToProps = dispatch => ({
  setRouteId: routeId => dispatch(setRouteId(routeId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteDetail);
