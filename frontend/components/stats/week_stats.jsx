import React from 'react';

class WeekStats extends React.Component {
  render() {
    console.log(this.props.WeekStats);

    return (
      <div>
        <h1>Week stats</h1>
        {/* <h2>{this.props.weekStats.total_run_miles}</h2> */}
      </div>
    );
  }
}

export default WeekStats;
