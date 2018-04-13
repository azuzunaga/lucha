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
