import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import RouteIndexContainer from '../routes/route_index_container';

class NewActivity extends React.Component {
  render() {
    return (
      <h1>New Activities will go here</h1>
    );
  }
}

export default withRouter(NewActivity);
