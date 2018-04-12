export const RECEIVE_ROUTE_ID = 'RECEIVE_ROUTE_ID';

const receiveRouteID = routeId => ({
  type: RECEIVE_ROUTE_ID,
  routeId
});

export const setRouteID = routeId => dispatch => {
  return () => {
    dispatch(receiveRouteID(routeId));
  };
};
