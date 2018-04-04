import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
});

export default rootReducer;
