import { combineReducers } from 'redux';

import RouteIdReducer from './route_id_reducer';
import userStatsReducer from './user_stats_reducer';

const uiReducer = combineReducers({
  routeId: RouteIdReducer,
  stats: userStatsReducer,
});

export default uiReducer;
