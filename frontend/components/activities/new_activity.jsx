import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import {
  elevationFormatter,
  distanceFormatter,
} from '../../util/map-utils';

import RouteIndexContainer from '../routes/route_index_container';
import RouteDetailContainer from '../routes/route_detail_container';

const now = new Date();
const timeOfDay = now.getHours() >= 4 && now.getHours() < 12 ? 'Morning' :
  now.getHours() >= 12 && now.getHours() < 19 ? 'Afternoon' : 'Evening';

class NewActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      user_id: this.props.currentUser.id,
      polyline: '',
      big_image_url: '',
      distance: '',
      elevation: '',
      sport: 'bicycling',
      date: '',
      time: '',
      hour: this.getRandomInt(2),
      minute: this.getRandomInt(60),
      second: this.getRandomInt(60),
    };
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  componentDidMount() {
    this.props.requestAllRoutes();

    const time = now.toString().slice(16, 24);
    const date = now.toISOString().slice(0, 10);
    const activityType = this.state.sport === 'bicycling' ? 'ride' : 'run';

    this.setState({
      time: time,
      date: date,
      title: `${timeOfDay} ${activityType}`
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleChange(e) {
    this.setState({
      sport: e.target.value,
      title: `${timeOfDay} ${e.target.value === 'bicycling' ? 'ride' : 'run'}`
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const activity = (({
      title,
      user_id,
      polyline,
      big_image_url,
      distance,
      elevation,
      date,
      time,
      sport,
      hour,
      minute,
      second
    }) => ({
      title,
      user_id,
      polyline,
      big_image_url,
      distance,
      elevation,
      date,
      time,
      sport,
      hour,
      minute,
      second
    }))(this.state);
    this.props.processActivityForm(activity);
    this.navigateToActivities();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.routeId > 0 ) {
      const routeId = nextProps.routeId;
      const route = nextProps.routes[routeId];
      const distance = route.distance.toFixed(2);
      const elevation = route.elevation.toFixed(0);

      this.setState({
        polyline: route.polyline,
        big_image_url: route.bigImageUrl,
        distance: distance,
        elevation: elevation
      });
    }
  }

  componentWillUnmount() {
    this.props.clearRouteId();
  }

  navigateToActivities() {
    this.props.history.push('/activities');
  }


  render() {
    let routes = Object.values(this.props.routes).filter(el => el.sport === this.state.sport);

    return (
      <div className="activity-save-page">
        <h1>New Activity</h1>
        <div className="save-form-container">
          <form className="new-activity-form"
            onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-header">
              <div className="form-title-div">
                <label htmlFor="form-title">
                  Title
                </label>
                <input type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  className="activity-form-input"
                  id="form-title"
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Create"
                  className="form-save-button"
                />
              </div>
            </div>
            <div className="activity-stats one">
              <div className="stats-sport">
                <label htmlFor="form-sport">
                  Sport
                </label>
                <div className="stats-input">
                  <select value={this.state.sport} onChange={this.handleChange.bind(this)}>
                    <option value="bicycling">Ride</option>
                    <option value="running">Run</option>
                  </select>
                </div>
              </div>
              <div className="stats-date">
                <label htmlFor="form-date">
                  Date & Time
                </label>
                <div className="stats-date-input stats-input">
                  <div className="date-mini-input">
                    <input type="date"
                      value={this.state.date}
                      onChange={this.update('date')}
                      className="activity-form-input"
                      id="form-date"
                    />
                    <input type="time"
                      value={this.state.time}
                      onChange={this.update('time')}
                      className="activity-form-input"
                      id="form-time"
                    />
                  </div>
                </div>
              </div>
              <div className="stats-duration">
                <label htmlFor="form-hour">
                  Duration
                </label>
                <div className="stats-input">
                  <div className="stats-mini-input">
                    <input type="number"
                      value={this.state.hour}
                      onChange={this.update("hour")}
                      className="activity-form-input"
                      id="form-hour"
                    />
                    <label htmlFor="form-hour">hr</label>
                  </div>
                  <div className="stats-mini-input">
                    <input type="number"
                      value={this.state.minute}
                      onChange={this.update('minute')}
                      className="activity-form-input"
                      id="form-minute"
                    />
                    <label htmlFor="form-minute">min</label>
                  </div>
                  <div className="stats-mini-input">
                    <input type="number"
                      value={this.state.second}
                      onChange={this.update('second')}
                      className="activity-form-input"
                      id="form-second"
                    />
                    <label htmlFor="form-second">s</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="activity-stats two" id="stats-two">
              <div className="stats-distance">
                <label htmlFor="form-distance" data-placeholder="9.87 mi">
                  Distance
                </label>
                <div className="stats-input">
                  <input type="number"
                    value={this.state.distance}
                    onChange={this.update('distance')}
                    className="activity-form-input"
                    id="form-distance"
                  />
                  <label htmlFor="form-distance">miles</label>
                </div>
              </div>
              <div className="stats-elevation">
                <label htmlFor="form-elevation">
                  Elevation
                </label>
                <div className="stats-input">
                  <input type="number"
                    value={this.state.elevation}
                    onChange={this.update('elevation')}
                    className="activity-form-input"
                    id="form-elevation"
                  />
                  <label htmlFor="form-elevation">feet</label>
                </div>
              </div>
              <div className="stats-empty">
                <div className="stats-input-empty">
                </div>
              </div>
            </div>
          </form>
        </div>
        <h2>Or choose distance and elevation from routes below:</h2>
        <div className="route-index-component" id="activities-route-index">
          <div className="route-detail-container">
            <ul className="route-detail-cards">
              {routes.reverse().map(route =>
                <RouteDetailContainer key={route.id} route={route} clickHandler={true} />)}
              <li className="filling-empty-space-childs"></li>
              <li className="filling-empty-space-childs"></li>
              <li className="filling-empty-space-childs"></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NewActivity);
