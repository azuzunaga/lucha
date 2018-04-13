import React from 'react';

import UserStats from './user_stats';
import WeekStats from './week_stats';

class Stats extends React.Component {
  componentWillMount() {
    this.props.requestAllStats();
  }

  statsReceived() {
    if (Object.keys(this.props.stats).length === 0) {
      return null;
    }

    return (
      <div>
        <div className="user-stats-container">
          <div className="user-card">
            <UserStats userStats={this.props.stats.userStats} />
          </div>
        </div>
        {/* <WeekStats weekStats={this.props.stats.weekStats} /> */}
      </div>
    );
  }

  render() {
    console.log("in stats", this.props.stats);
      return(
        <div>
          {this.statsReceived()}
        </div>
      );
  }
}

export default Stats;
