import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import ActivityDetail from './activity_detail';

class ActivityIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllActivities();
  }

  render() {
    const activities = this.props.activities;
    return (
      <div className="activity-index-component">
        <div className="activity-detail-container">
          <ul className="activity-detail-cards">
            {activities.reverse().map(activity =>
              <ActivityDetail
                key={activity.id}
                activity={activity}
                firstName={this.props.currentUser.firstName}
                lastName={this.props.currentUser.lastName}
              />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(ActivityIndex);
