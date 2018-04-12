import { connect } from 'react-redux';
import React from 'react';
import { setRouteId } from '../../actions/ui_actions';

import RouteDetail from './route_detail';

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => ({
  setRouteId: () => dispatch(setRouteId()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteDetail);
