import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link } from 'react-router-dom';

const mapOptions = {
  zoom: 14,
  center: {lat: 41.441, lng: -72.777},
  mapTypeId: 'terrain'
};

class NewRoute extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);

    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    this.directionsDisplay.setMap(this.map);

    this.coordinates = [];

    this.map.addListener('click', this.handleClick.bind(this));
  }

  handleClick(e) {
    console.log("Lat:", e.latLng.lat(), "Long:", e.latLng.lng());

    this.coordinates.push({
      location: {lat: e.latLng.lat(), lng: e.latLng.lng()},
      stopover: true
    });

    if (this.coordinates.length > 1) {
      this.calculateAndDisplayRoute();
    }
  }

  calculateAndDisplayRoute () {
    const lastCoord = this.coordinates.length - 1;
    const me = this;
    this.directionsService.route({
      origin: this.coordinates[0].location,
      waypoints: this.coordinates.slice(1, lastCoord),
      destination: this.coordinates[lastCoord].location,
      travelMode: 'BICYCLING'
    }, function(response, status) {
      if (status === 'OK') {
        const polyLine = response.routes[0].overview_polyline;

        me.directionsDisplay.setOptions({ preserveViewport: true });
        me.directionsDisplay.setDirections(response);
        console.log('New polyline:', polyLine);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  render() {
    return (
      <div className="map" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(NewRoute);
