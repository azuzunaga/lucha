import * as RoutesApiUtil from '../util/routes_api_util';

export const RECEIVE_ALL_ROUTES = 'RECEIVE_ALL_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';

const receiveAllRoutes = routes => ({
  type: RECEIVE_ALL_ROUTES,
  routes
});

const receiveRoute = route => ({
  type: RECEIVE_ROUTE,
  route
});

export const requestAllRoutes = () => dispatch => {
  return RoutesApiUtil.fetchAllRoutes().then(routes => {
    dispatch(receiveAllRoutes(routes));
  });
};

export const createRoute = route =>  dispatch => {
  return RoutesApiUtil.createRoute(route).then(route => {
    dispatch(receiveRoute(route));
  });
};
