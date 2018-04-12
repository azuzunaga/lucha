import { combineReducers } from 'redux';

import RouteIdReducer from './route_id_reducer';

const uiReducer = combineReducers({
  routeId: RouteIdReducer,
});

export default uiReducer;
