export const createRoute = route => (
  $.ajax({
    url: 'api/routes',
    method: 'POST',
    data: route,
  })
);

export const fetchAllRoutes = () => (
  $.ajax({
    url: 'api/routes',
    method: 'GET',
  })
);
