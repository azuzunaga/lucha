import { connect } from 'react-redux';
import React from 'react';
import { requestAllStats } from '../../actions/ui_actions';

import Stats from './stats';

const mapStateToProps = state => {
  return {
    stats: state.ui.stats,
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllStats: () => dispatch(requestAllStats()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats);
