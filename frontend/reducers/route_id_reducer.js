import merge from 'lodash/merge';

import { RECEIVE_ROUTE_ID, CLEAR_ROUTE_ID } from '../actions/ui_actions';

const RouteIdReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ROUTE_ID:
      return action.routeId;
    case CLEAR_ROUTE_ID:
      return {};
    default:
     return state;
  }
};

export default RouteIdReducer;
