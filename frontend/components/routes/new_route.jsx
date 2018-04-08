import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link } from 'react-router-dom';

const mapOptions = {
  zoom: 14,
  center: {lat: 41.441, lng: -72.777},
  streetViewControl: false
};

const polylineOptions = {
  strokeColor: "#005260",
  strokeWeight: 8,
  strokeOpacity: 0.5
};

const rendererOptions = {
  suppressMarkers: true,
  suppressBicyclingLayer: true,
  preserveViewport: true,
  polylineOptions: polylineOptions,
};


class NewRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "Wallingford, Connecticut"
    };
    this.coordinates = [];
    this.coordIndex = 0;
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
    this.directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
    this.directionsDisplay.setMap(this.map);

    this.map.addListener('click', this.handleClick.bind(this));

    const centerControlDiv = document.getElementById("center-control-div");
  }

  handleClick(e) {
    console.log("Lat:", e.latLng.lat(), "Long:", e.latLng.lng());


    this.coordinates = this.coordinates.slice(0, this.coordIndex);

    this.coordinates.push({
      location: {lat: e.latLng.lat(), lng: e.latLng.lng()},
    });
    this.coordIndex += 1;

    if (this.coordinates.length > 1) {
      this.calculateAndDisplayRoute();
    }
  }

  calculateAndDisplayRoute () {
    this.newCoordinates = this.coordinates.slice(0, this.coordIndex);
    console.log("Coordinates:", this.coordinates, "newCoords:", this.newCoordinates,"coordIndex:", this.coordIndex);


    const lastCoord = this.newCoordinates.length - 1;
    const me = this;
    this.directionsService.route({
      origin: this.newCoordinates[0].location,
      waypoints: this.newCoordinates.slice(1, lastCoord),
      destination: this.newCoordinates[lastCoord].location,
      travelMode: 'BICYCLING'
    }, function(response, status) {
      if (status === 'OK') {
        const polyLine = response.routes[0].overview_polyline;
        me.directionsDisplay.setDirections(response);
        // console.log('New polyline:', polyLine);
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

  coordAction(actionType) {
    switch (actionType) {
      case "Undo":
        this.coordIndex -= 1;
        break;
      case "Redo":
        this.coordIndex += 1;
        break;
      case "Clear":
        this.coordinates = [];
        this.coordIndex = 0;
        this.directionsDisplay.set('directions', null);
        break;
    }
    if (this.coordinates.length > 1) {
      this.calculateAndDisplayRoute();
    }
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
          <nav className="left-controls">
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

            <section className="route-creation-controls">
              <a
                className="route-creation-individual-control"
                onClick={this.coordAction.bind(this, "Undo")}
              >
                <i className="material-icons md-30">undo</i>
                <label>Undo</label>
              </a>
              <a
                className="route-creation-individual-control"
                onClick={this.coordAction.bind(this, "Redo")}
              >
                <i className="material-icons md-30">redo</i>
                <label>Redo</label>
              </a>
              <a
                className="route-creation-individual-control"
                onClick={this.coordAction.bind(this, "Clear")}
              >
                <i className="material-icons md-30">clear</i>
                <label>Clear</label>
              </a>
            </section>
          </nav>
          <nav className="right-controls">

          </nav>
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
