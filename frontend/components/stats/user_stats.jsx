import React from 'react';

class UserStats extends React.Component {
  render() {
    return (
      <div>
        <h1>User stats</h1>
        <h2>this.props.userStats.total_rides</h2>
      </div>
    );
  }
}

export default UserStats;
