import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import RouteIndexContainer from '../routes/route_index_container';
import RouteDetail from '../routes/route_detail';

class NewActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      user_id: this.props.currentUser.id,
      polyline: "",
      big_image_url: "",
      distance: 0,
      elevation: 0,
      duration: 0,
      sport: "",
      start_datetime: "",
      avg_speed: 0,
      pace: 0,
      selectedOption: "bicycling",
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

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
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
      duration,
      sport,
      start_datetime,
      avg_speed,
      pace
    }) => ({
      title,
      user_id,
      polyline,
      big_image_url,
      distance,
      elevation,
      duration,
      sport,
      start_datetime,
      avg_speed,
      pace
    }))(this.state);

    this.props.processActivityForm(activity);
    this.navigateToActivities();
  }

  navigateToActivities() {
    this.props.history.push("/activities");
  }

  render() {
    const allRoutes = this.props.routes;
    const routes = allRoutes.filter(e => e.sport === this.state.selectedOption);

    return (
      <div className="activity-save-page">
        <div className="save-form-container">
          <form className="new-activity-form">
            <div>
              <input
                type="submit"
                value="Create"
                className="form-save-button"
                onSubmit={this.handleSubmit.bind(this)}
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
                <input type="text"
                  value={this.state.sport}
                  onChange={this.update('sport')}
                  className="activity-form-input"
                  id="form-sport"
                />
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
                      onChange={this.update('hour')}
                      className="activity-form-input"
                      id="form-hour"
                    />
                    <label for="form-hour">hr</label>
                  </div>
                  <input type="text"
                    value={this.state.minute}
                    onChange={this.update('minute')}
                    className="activity-form-input"
                    id="form-minute"
                    placeholder="min"
                  />
                  <input type="text"
                    value={this.state.second}
                    onChange={this.update('second')}
                    className="activity-form-input"
                    id="form-second"
                    placeholder="s"
                  />
                </div>
              </div>
            </div>
            <div className="activity-stats two">
              <div className="stats-distance">
                <input type="text"
                  placeholder="9.87 mi"
                  onChange={this.update('distance')}
                  className="activity-form-input"
                  id="form-distance"
                />
                <label htmlFor="form-distance" data-placeholder="9.87 mi">
                  Distance
                </label>
              </div>
              <div className="stats-elevation">
                <label htmlFor="form-elevation">
                  Elevation
                </label>
                <input type="text"
                  placeholder="ft"
                  onChange={this.update('elevation')}
                  className="activity-form-input"
                  id="form-elevation"
                />
              </div>
            </div>
          </form>
        </div>
        {/* <div className="route-index-component">
          <div className="route-detail-container">
            <ul className="route-detail-cards">
          {routes.reverse().map(route =>
          <RouteDetail key={route.id} route={route} />)}
          <li className="filling-empty-space-childs"></li>
          <li className="filling-empty-space-childs"></li>
          <li className="filling-empty-space-childs"></li>
            </ul>
          </div>
        </div> */}
      </div>
    );
  }
}

export default withRouter(NewActivity);
