export const RECEIVE_ROUTE_ID = 'RECEIVE_ROUTE_ID';

const receiveRouteId = routeId => ({
  type: RECEIVE_ROUTE_ID,
  routeId
});

export const setRouteId = routeId => dispatch => {
  return dispatch(receiveRouteId(routeId));
};
