import merge from 'lodash/merge';

import {
  RECEIVE_ALL_ROUTES,
  RECEIVE_ROUTE,
} from '../actions/routes_actions';

const routesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_ROUTES:
      return action.routes;
    case RECEIVE_ROUTE:
      const newRoute = { [action.route.id]: action.route };
      return merge({}, state, newRoute);
    default:
    return state;
  }
};

export default routesReducer;
