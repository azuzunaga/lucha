import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  elevationFormatter,
  distanceFormatter,
  durationFormatter,
  timeFormatter,
} from '../../util/map-utils';

class ActivityDetail extends React.Component {
  render() {
    let activity = this.props.activity;
    console.log(activity);

    const safeUrl = encodeURI(activity.bigImageUrl);
    const imageWrapperStyle = {
      backgroundImage: `url(${safeUrl})`
    };

    const activityIcon = () => (
      activity.sport === "bicycling" ?
      <i className="material-icons md-24">directions_bike</i> :
      <i className="material-icons md-24">directions_run</i>
    );

    const activityStat = () => (
      activity.sport === "bicycling" ?
      <li className="stats-elevation">
        <h4>Elevation Gain</h4>
        <h3>{activity.elevation}ft</h3>
      </li> :
      <li className="stats-pace">
        <h4>Average Pace</h4>
        <h3>{activity.pace}/mi</h3>
      </li>
    );

    const fullUserName = this.props.firstName + " " + this.props.lastName;

    return (
      <li className="activity-detail-card">
        <div className="activity-detail-component">
          <div className="activity-detail-header">
            <div className="detail-header-icons">
              <i className="small-profile-pic"></i>
              {activityIcon()}
            </div>
            <div className="detail-header-title">
              <h2>{fullUserName}</h2>
              <h3>{activity.startDatetime}</h3>
              <h1>{activity.title}</h1>
            </div>
          </div>
          <div className="activity-detail-stats">
            <ul className="detail-stats-list">
              <li className="stats-distance">
                <h4>Distance</h4>
                <h3>{activity.distance}mi</h3>
              </li>
              {activityStat()}
            </ul>
          </div>
          <div className="activity-detail-image"
            style={{backgroundImage: `url(${safeUrl})`}}>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(ActivityDetail);
