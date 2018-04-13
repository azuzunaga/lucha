import { RECEIVE_USER_STATS } from '../actions/ui_actions';

const UserStatsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER_STATS:
      return action.stats;
    default:
      return state;
  }
};
