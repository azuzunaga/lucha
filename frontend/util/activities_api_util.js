export const createActivity = activity => (
  $.ajax({
    url: 'api/activities',
    method: 'POST',
    data: { activity }
  })
);

export const fetchAllActivities = () => (
  $.ajax({
    url: 'api/activities',
    method: 'GET'
  })
);
