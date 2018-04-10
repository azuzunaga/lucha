import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class RouteIndex extends React.Component {
  render() {
    return (
      <div>
        <h1>Hover on the plus button and select "Create a route"</h1>
      </div>
    );
  }
}

export default withRouter(RouteIndex);
