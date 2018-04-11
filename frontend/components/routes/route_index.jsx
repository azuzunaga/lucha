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
      <div className="route-index-component">
        <div className="route-index-header">
          <h1>My Routes</h1>
          <Link to="/routes/new" className="new-route-button">
            Create New Route
          </Link>
        </div>
        <div className="route-detail-container">
          <ul className="route-detail-type">
            <li>
              <input type="radio" name="type"
                value="ride" checked
              id="cycle" />
              <label htmlFor="cycle" className="left-label">Cycling</label>
            </li>
            <li>
              <input type="radio" name="type"
              value="run" id="run" />
              <label htmlFor="run" className="right-label">Running</label>
            </li>
          </ul>
          <ul className="route-detail-cards">
            {routes.map(route => <RouteDetail key={route.id} route={route} />)}
            <li className="filling-empty-space-childs"></li>
            <li className="filling-empty-space-childs"></li>
            <li className="filling-empty-space-childs"></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(RouteIndex);
