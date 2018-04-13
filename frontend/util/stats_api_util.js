export const fetchStats = () => (
  $.ajax({
    url: 'api/userstats',
    method: 'GET'
  })
);
