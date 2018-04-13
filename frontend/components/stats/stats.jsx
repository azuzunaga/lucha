import React from 'react';

import UserStats from './user_stats';
import WeekStats from './week_stats';

class Stats extends React.Component {
  componentDidMount() {
    this.props.requestAllStats();
  }

  render() {
    return (
      <div>
        <UserStats userStats={this.props.stats.userStats} />
        <WeekStats weekStats={this.props.stats.weekStats} />
      </div>
    );
  }
}

export default Stats;
