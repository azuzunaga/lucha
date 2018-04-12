import * as ActivitiesAPIUtil from '../util/activities_api_util';

export const RECEIVE_ALL_ACTIVITIES = 'RECEIVE_ALL_ACTIVITIES';
export const RECEIVE_ACTIVITY = 'RECEIVE_ACTIVITY';

const receiveAllActivities = activities => ({
  type: RECEIVE_ALL_ACTIVITIES,
  activities
});

const receiveActivity = activity => ({
  type: RECEIVE_ACTIVITY,
  activity
});

export const requestAllActivities = () => dispatch => {
  return ActivitiesAPIUtil.fetchAllActivities().then(activities => {
    dispatch(receiveAllActivities(activities));
  });
};

export const createActivity = activity => dispatch => {
  return ActivitiesAPIUtil.createActivity(activity).then(activity => {
    dispatch(receiveActivity(activity));
  });
};
