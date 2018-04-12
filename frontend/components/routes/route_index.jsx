import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import RouteDetailContainer from './route_detail_container';


class RouteIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'bicycling'
    };
  }

  componentDidMount() {
    this.props.requestAllRoutes();
  }

  sportType(sport) {
    this.setState({selectedOption: sport});
  }

  render() {
    const allRoutes = this.props.routes;
    const routes = allRoutes.filter(e => e.sport === this.state.selectedOption);
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
                value="bicycling"
                defaultChecked={this.state.selectedOption === 'bicycling'}
                onChange={this.sportType.bind(this, "bicycling")}
              id="cycle" />
              <label htmlFor="cycle" className="left-label">Cycling</label>
            </li>
            <li>
              <input type="radio" name="type"
                value="running"
                defaultChecked={this.state.selectedOption === 'running'}
                onChange={this.sportType.bind(this, "running")}
              id="run" />
              <label htmlFor="run" className="right-label">Running</label>
            </li>
          </ul>
          <ul className="route-detail-cards">
            {routes.reverse().map(route =>
              <RouteDetailContainer key={route.id} route={route} clickHandler={false} />)}
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
