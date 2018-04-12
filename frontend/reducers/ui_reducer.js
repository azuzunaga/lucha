import merge from 'lodash/merge';

import { RECEIVE_ROUTE_ID } from '../actions/ui_actions';

const uiReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ROUTE_ID:
      return action.routeId;
    default:
     return state;
  }
};

export default uiReducer;
