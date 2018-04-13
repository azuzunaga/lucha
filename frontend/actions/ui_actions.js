import * as StatsApiUtil from '../util/stats_api_util';

export const RECEIVE_ROUTE_ID = 'RECEIVE_ROUTE_ID';
export const CLEAR_ROUTE_ID = 'CLEAR_ROUTE_ID';
export const RECEIVE_STATS = 'RECEIVE_STATS';

export const setRouteId = routeId => ({
  type: RECEIVE_ROUTE_ID,
  routeId
});

export const clearRouteId = () => ({
  type: CLEAR_ROUTE_ID,
});

const receiveAllUserStats = stats => ({
  type: RECEIVE_STATS,
  stats
});

export const requestAllStats = () => dispatch => {
  return StatsApiUtil.fetchStats().then(stats => {
    dispatch(receiveAllUserStats(stats));
  });
};
