import { RECEIVE_STATS } from '../actions/ui_actions';

const userStatsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STATS:
      return action.stats;
    default:
      return state;
  }
};

export default userStatsReducer;
