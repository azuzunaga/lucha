import React from 'react';

class WeekStats extends React.Component {
  formatDuration(duration) {
    let durationString = "";

    if (duration < 60) {
      durationString = `${duration}s`;
    } else {
      let hours = parseInt(duration / 3600);
      let minutes = parseInt((duration - hours*3600) / 60);

      const leadingZero = number => number < 10 ? `0${number}` : number;
      durationString = `${hours}h ${leadingZero(minutes)}m`;
    }
    return durationString;
  }

  render() {
    const weekStats = this.props.weekStats;

    return (
      <div className="weekly-stats-component">
        <h1>THIS WEEK</h1>
        <div className="mini-stats">
          <div className="ride-stats">
            <i className="material-icons md-30">directions_bike</i>
            <ul>
              <li>{weekStats.total_ride_miles.toFixed(2)} mi</li>
              <li>{this.formatDuration(weekStats.total_ride_duration)}</li>
              <li>{weekStats.total_ride_elevation.toLocaleString('en')} ft</li>
            </ul>
          </div>
          <div className="run-stats">
            <i className="material-icons md-30">directions_run</i>
            <ul>
              <li>{weekStats.total_run_miles.toFixed(2)} mi</li>
              <li>{this.formatDuration(weekStats.total_run_duration)}</li>
              <li>{weekStats.total_run_elevation.toLocaleString('en')} ft</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default WeekStats;
