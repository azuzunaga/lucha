import React from 'react';

class UserStats extends React.Component {
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

  render() {
    const userStats = this.props.userStats;

    console.log("in userstats", this.props.userStats.last_activity_title);
    return (
      <div className="user-card-component">
        <i className="big-profile-pic"></i>
        <h1>{userStats.name}</h1>
        <ul className="user-totals">
          <li className="total-rides">
            <h4>Rides</h4>
            <h3>{userStats.total_rides}</h3>
          </li>
          <li>
            <h4>Runs</h4>
            <h3>{userStats.total_runs}</h3>
          </li>
        </ul>
        <div className="last-activity">
          <h2>Latest Activity</h2>
          <div>
            <h5>{userStats.last_activity_title} •</h5>
            <h6>{this.parseDate(userStats.last_activity_date)}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default UserStats;
