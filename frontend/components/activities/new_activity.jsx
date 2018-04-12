import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import RouteIndexContainer from '../routes/route_index_container';
import RouteDetailContainer from '../routes/route_detail_container';

class NewActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      user_id: this.props.currentUser.id,
      polyline: "",
      big_image_url: "",
      distance: "",
      elevation: "",
      sport: "bycling",
      date: "",
      time: "",
      hour: "",
      minute: "",
      second: "",
    };
    console.log(this.props.history.location.pathname);
    console.log(this.props);
  }

  componentDidMount() {
    this.props.requestAllRoutes();
    forceUpdate();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleChange(e) {
    this.setState({sport: e.target.value});
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
    // this.navigateToActivities();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.routeId > 0 ) {
      const routeId = nextProps.routeId;
      const route = nextProps.routes[routeId];
      console.log("routId", routeId, "route", route);
      this.setState({
        title: route.title,
        polyline: route.polyline,
        big_image_url: route.big_image_url,
        distance: route.distance,
        elevation: route.elevation
      });
    }
  }

  componentWillUnmount() {
    this.props.clearRouteId();
  }

  navigateToActivities() {
    this.props.history.push("/activities");
  }

  render() {
    const allRoutes = Object.values(this.props.routes);
    let routes = allRoutes.filter(e => e.sport === this.state.sport);

    return (
      <div className="activity-save-page">
        <div className="save-form-container">
          <form className="new-activity-form"
            onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <input
                type="submit"
                value="Create"
                className="form-save-button"
              />
            </div>
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
            <div className="activity-stats one">
              <div className="stats-sport">
                <label htmlFor="form-sport">
                  Activity type
                </label>
                <select value={this.state.sport} onChange={this.handleChange.bind(this)}>
                  <option value="bicycling">Ride</option>
                  <option value="running">Run</option>
                </select>
              </div>
              <div className="stats-date">
                <label htmlFor="form-date">
                  Date & Time
                </label>
                <div className="stats-date-inputs">
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
              <div className="stats-duration">
                <label htmlFor="form-hour">
                  Duration
                </label>
                <div className="stats-duration-input">
                  <div className="stats-hour-input">
                    <input type="text"
                      value={this.state.hour}
                      // onChange={this.update('hour')}
                      onChange={this.update("hour")}
                      className="activity-form-input"
                      id="form-hour"
                    />
                    <label htmlFor="form-hour">hr</label>
                  </div>
                  <div className="stats-minute-input">
                    <input type="text"
                      value={this.state.minute}
                      onChange={this.update('minute')}
                      className="activity-form-input"
                      id="form-minute"
                    />
                    <label htmlFor="form-minute">min</label>
                  </div>
                  <div className="stats-second-input">
                    <input type="text"
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
            <div className="activity-stats two">
              <div className="stats-distance">
                <label htmlFor="form-distance" data-placeholder="9.87 mi">
                  Distance
                </label>
                <div className="stats-distance-input">
                  <input type="text"
                    value={this.state.distance}
                    onChange={this.update('distance')}
                    className="activity-form-input"
                    id="form-distance"
                  />
                  <label htmlFor="form-distance">mi</label>
                </div>
              </div>
              <div className="stats-elevation">
                <label htmlFor="form-elevation">
                  Elevation
                </label>
                <div className="stats-elevation-input">
                  <input type="text"
                    value={this.state.elevation}
                    onChange={this.update('elevation')}
                    className="activity-form-input"
                    id="form-elevation"
                  />
                  <label htmlFor="form-elevation">ft</label>
                </div>
              </div>
            </div>
          </form>
        </div>
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
