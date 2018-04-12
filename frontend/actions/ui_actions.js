export const RECEIVE_ROUTE_ID = 'RECEIVE_ROUTE_ID';
export const CLEAR_ROUTE_ID = 'CLEAR_ROUTE_ID';

export const setRouteId = routeId => ({
  type: RECEIVE_ROUTE_ID,
  routeId
});

export const clearRouteId = () => ({
  type: CLEAR_ROUTE_ID,
});
