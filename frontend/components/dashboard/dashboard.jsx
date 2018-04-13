import React from 'react';
import { withRouter } from 'react-router-dom';

import ActivityIndexContainer from '../activities/activity_index_container';
import About from './about';
import StatsContainer from '../stats/stats_container';

const Dashboard = () => (
  <div className="dashboard">
    <div className="col1">
      <StatsContainer />
    </div>
    <div className="col2">
      <ActivityIndexContainer />
    </div>
    <div className="col3">
      <About />
    </div>
  </div>
);

export default withRouter(Dashboard);
