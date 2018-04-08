import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link } from 'react-router-dom';

const mapOptions = {
  zoom: 14,
  center: {lat: 41.441, lng: -72.777},
  mapTypeId: 'terrain',
  streetViewControl: false
};

class NewRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "Wallingford, Connecticut"
    };

    this.geocoder = new google.maps.Geocoder();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);

    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    this.directionsDisplay.setMap(this.map);

    this.coordinates = [];

    this.map.addListener('click', this.handleClick.bind(this));

    const centerControlDiv = document.getElementById("center-control-div");
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

  changeOrigin() {
    this.geocoder.geocode( { 'address': this.state.searchInput}, (results, status) => {
      if (status === 'OK') {
        this.map.setCenter(results[0].geometry.location);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  render() {
    return (
      <div className="route-builder-container">
        <nav className="header-nav">

          <nav className="left-nav" id="left-nav">
            <a href="#" className="header-logo">LUCHA</a>
          </nav>

          <nav className="header-button right-nav" id="right-nav">
            <Link to="/routes" id="exit-builder-link">
              Exit Builder
            </Link>
          </nav>

        </nav>
        <nav className="route-builder-controls">
          <form className="route-search-form">
            <input type="text"
              value={this.state.searchInput}
              onChange={this.update('searchInput')}
              className="route-search-form-input"
              id="route-search-form-input"
            />
            <button value="submit"
              onClick={this.changeOrigin.bind(this)}
              className="route-search-form-submit"
            >
              <i className="material-icons">search</i>
            </button>
          </form>

        </nav>
        <div className="map-container">
          <div className="map" ref="map">
            Map
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NewRoute);
