import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  elevationFormatter,
  distanceFormatter,
  durationFormatter,
  timeFormatter,
} from '../../util/map-utils';

class ActivityDetail extends React.Component {
  formatPace(pace) {
    return parseInt(pace / 60) + ":" + parseInt(pace % 60);
  }

  activityIcon(activity) {
    return (activity.sport === "bicycling" ?
      <i className="material-icons md-24">directions_bike</i> :
      <i className="material-icons md-24">directions_run</i>
    );
  }

  parseDate(date) {
    let dateOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };

    let timeOptions = {
      hour: '2-digit',
      minute: '2-digit'
    };

    let today = new Date();

    let jsDate = new Date(date);

    let strDate;

    switch (today.getDate() - jsDate.getDate()) {
      case 0:
        strDate = "Today";
        break;
      case 1:
        strDate = "Yesterday";
        break;
      default:
        strDate = jsDate.toLocaleString('en-us', dateOptions);
    }

    let strTime = jsDate.toLocaleString('en-us', timeOptions);

    return strDate + " at " + strTime;
  }

  activityStat(activity) {
    return (activity.sport === "bicycling" ?
      <li className="stats-elevation">
        <h4>Elevation Gain</h4>
        <h3>{activity.elevation.toLocaleString('en')}ft</h3>
      </li> :
      <li className="stats-pace">
        <h4>Average Pace</h4>
        <h3>{this.formatPace(activity.pace)}/mi</h3>
      </li>
    );
  }

  render() {
    let activity = this.props.activity;
    console.log(activity);

    const safeUrl = encodeURI(activity.bigImageUrl);
    const imageWrapperStyle = {
      backgroundImage: `url(${safeUrl})`
    };

    const fullUserName = this.props.firstName + " " + this.props.lastName;

    return (
      <li className="activity-detail-card">
        <div className="activity-detail-component">
          <div className="activity-detail-header">
            <div className="detail-header-icons">
              <i className="small-profile-pic"></i>
              {this.activityIcon(activity)}
            </div>
            <div className="detail-header-title">
              <h2>{fullUserName}</h2>
              <h3>{this.parseDate(activity.startDatetime)}</h3>
              <h1>{activity.title}</h1>
            </div>
          </div>
          <div className="activity-detail-stats">
            <ul className="detail-stats-list">
              <li className="stats-distance">
                <h4>Distance</h4>
                <h3>{activity.distance}mi</h3>
              </li>
              {this.activityStat(activity)}
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
