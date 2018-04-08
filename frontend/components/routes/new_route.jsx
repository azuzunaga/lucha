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

const icon = {
  url: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/circle-o-16.png",
  anchor: new google.maps.Point(10, 10)
};

const rendererOptions = {
  // suppressMarkers: true,
  suppressBicyclingLayer: true,
  preserveViewport: true,
  // draggable: true,
  polylineOptions: polylineOptions,
  markerOptions: {
    icon: icon
  }
};


class NewRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
    this.coordinates = [];
    this.coordIndex = 0;
    this.geocoder = new google.maps.Geocoder();
    this.travelMode = "BICYCLING";
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

    this.saveButton = document.getElementsByClassName("route-builder-button")[0];
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
      this.saveButton.setAttribute("id", "");

    } else {
      this.saveButton.setAttribute("id", "no-directions-button");
      this.marker = new google.maps.Marker({
        position: this.coordinates[0].location,
        map: this.map,
        icon: icon,
      });
      this.marker.setMap(this.map);
    }
  }

  calculateAndDisplayRoute () {
    this.marker.setMap(null);

    if (this.coordIndex === 1) {
      this.saveButton.setAttribute("id", "no-directions-button");
    }

    const newCoordinates = this.coordinates.slice(0, this.coordIndex);
    console.log(this.coordinates, this.coordIndex);

    const lastCoord = newCoordinates.length - 1;
    this.directionsService.route({
      origin: newCoordinates[0].location,
      waypoints: newCoordinates.slice(1, lastCoord),
      destination: newCoordinates[lastCoord].location,
      travelMode: this.travelMode
    }, (response, status) => {
      if (status === 'OK') {
        const polyLine = response.routes[0].overview_polyline;
        this.directionsDisplay.setDirections(response);
        // console.log('New polyline:', polyLine);
        console.log('Response:', response);
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

  clearAll() {
    this.coordinates = [];
    this.coordIndex = 0;
    this.directionsDisplay.set('directions', null);
    this.marker.setMap(null);
    this.saveButton.setAttribute("id", "no-directions-button");
  }

  coordAction(actionType) {
    switch (actionType) {
      case "Undo":
      if (this.coordIndex > 1) {
        this.coordIndex -= 1;
      }
        break;
      case "Redo":
      if (this.coordIndex < this.coordinates.length) {
        this.coordIndex += 1;
      }
        break;
      case "Clear":
        this.clearAll();
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
                placeholder="Wallingford, Connecticut"
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

            <section className="activity-type-controls route-creation-controls">
              <a
                className="route-creation-individual-control"
                // onClick={}
              >
                <i className="material-icons md-30">directions_bike</i>
                <label>Ride</label>
              </a>
              <a
                className="route-creation-individual-control"
                // onClick={}
              >
                <i className="material-icons md-30">directions_run</i>
                <label>Run</label>
              </a>
            </section>
          </nav>
          <nav className="right-controls">
            <button
              className="action-button route-builder-button"
              id="no-directions-button"
            >
              Save
            </button>
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
