import { connect } from 'react-redux';
import React from 'react';
import { createRoute } from '../../actions/routes_actions';

import NewRoute from './new_route';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.routes,
});

const mapDispatchToProps = dispatch => ({
  processRouteForm: route => dispatch(createRoute(route))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewRoute);
