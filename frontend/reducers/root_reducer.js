import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import routesReducer from './routes_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  routes: routesReducer,
});

export default rootReducer;
