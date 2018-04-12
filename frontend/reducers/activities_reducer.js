import merge from 'lodash';

import {
  RECEIVE_ALL_ACTIVITIES,
  RECEIVE_ACTIVITY,
} from '../actions/activities_actions';

const activitiesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_ACTIVITIES:
      return action.activities;
    case RECEIVE_ACTIVITY:
      const newActivity = { [action.activity.id]: action.activity };
      return merge({}, state, newActivity);
    default:
     return state;
  }
};

export default activitiesReducer;
