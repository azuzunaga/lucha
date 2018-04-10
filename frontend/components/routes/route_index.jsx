import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import RouteDetail from './route_detail';


class RouteIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllRoutes();
  }

  render() {
    const routes = this.props.routes;
    return (
      <div>
        <h1>My Routes</h1>
        <ul>
          {routes.map(route => <RouteDetail key={route.id} route={route} />)}
        </ul>
      </div>
    );
  }
}

export default withRouter(RouteIndex);
