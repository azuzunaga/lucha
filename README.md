# LUCHA

[Live Demo]() (https://lucha-app.herokuapp.com)

Lucha is an activity tracking website inspired by Strava. It uses a
Rails/PostgreSQL backend, React.js and Redux on the frontend,
and the Google Maps API for map interactivity.

## Features
* Secure frontend to backend user authentication using BCrypt.
* Users can create running or cyclling multi-waypoint routes using an embedded
Google Map.
  * The map was customized to allow for interactive route building, adding
  waypoint controls and travel mode switching.
  * Additionally, a color scheme that de-emphasizes highways and major
  roads was chosen, making route creation easier.
* Users can create activities, with or without associating a previously
  created route.
  * Clicking on a previously create route will auto-populate the distance and
  time.
* The dashboard page displays all of the user's activities, along with a total
activity count and weekly statistics.

## Google Maps API integration for route creation
A custom color scheme was created for the route creation map - runners and cyclists don't usually run on highways or mayor thoroughfares, so these were de-emphasized. Overall, the color scheme was created to help the user choose a safe and pedestrian / cyclist friendly route. 

Additional controls were added specifically to aid in the route creation process, including the ability to easily switch between travel modes and undo / redo waypoints.

![Route creation utilities](https://github.com/azuzunaga/lucha-readme-assets/blob/master/route_creation.gif)

## Creating new activies
The application supports activity and statistics tracking via user input. Distance, elevation, and GPS coordinates from previously created routes can be logged by simply clicking on the route card.

![Creating new activities](https://github.com/azuzunaga/lucha-readme-assets/blob/master/new_activity.gif)


Route statistics are filled when a route is clicked. The route card component is reused throughout the application, so a prop is used to tell the component to add an event handler to each card:

```js
<ul className="route-detail-cards">
  {routes.reverse().map(route =>
    <RouteDetailContainer key={route.id} route={route} clickHandler={true} />
  )}
</ul>
```

Since route id information lives in separate components a new slice of state was added to handle the click events and combined with the UI slice of state in the Redux store: 

```js
const RouteIdReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ROUTE_ID:
      return action.routeId;
    case CLEAR_ROUTE_ID:
      return {};
    default:
     return state;
  }
};
```

```js
import { combineReducers } from 'redux';

import RouteIdReducer from './route_id_reducer';
import userStatsReducer from './user_stats_reducer';

const uiReducer = combineReducers({
  routeId: RouteIdReducer,
  stats: userStatsReducer,
});

export default uiReducer;
```

Finally, inside of the NewActivity component the new global state is added to the component state using `componentWillReceiveProps`. On props change the state will update, triggering form re-render:

```js
componentWillReceiveProps(nextProps) {
  if (nextProps.routeId > 0 ) {
    const routeId = nextProps.routeId;
    const route = nextProps.routes[routeId];
    const distance = route.distance.toFixed(2);
    const elevation = route.elevation.toFixed(0);

    this.setState({
      polyline: route.polyline,
      big_image_url: route.bigImageUrl,
      distance: distance,
      elevation: elevation
    });
  }
}
```

## Technologies
Since this project was build on a relatively small timeframe, Ruby on Rails was chosen due to it's ease and quickness of deployment, in addition to it's built-in support of relational databases and RESTful routes.

Front end Redux states are kept normalized and separate, with individual reducers and actions for routes, activities, ui, session management, and errors. This keeps the state normalized, mimicking the data stored in the database and easing the updating of records. 

### Additional resources
+ [Wireframes](https://github.com/azuzunaga/lucha/wiki/Wireframes)
+ [Routes and API Endpoints](https://github.com/azuzunaga/lucha/wiki/Routes)
+ [Database Schema](https://github.com/azuzunaga/lucha/wiki/Schema)

## Possible future features
In the near future, I would like to add:

+ User page and avatars
+ Social pages and comments
