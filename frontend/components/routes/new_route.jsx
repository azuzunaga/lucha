import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link } from 'react-router-dom';

const mapOptions = {
  zoom: 14,
  center: {lat: 41.441, lng: -72.777},
  streetViewControl: false,
};

const polylineOptions = {
  strokeColor: "#005260",
  strokeWeight: 8,
  strokeOpacity: 0.5
};

const icon = {
  url: "http://res.cloudinary.com/lucha/image/upload/v1523241799/map-marker.png",
  anchor: new google.maps.Point(8, 8)
};

const rendererOptions = {
  // suppressMarkers: true,
  suppressBicyclingLayer: true,
  preserveViewport: true,
  // draggable: true
  // ^ implement later, get new coordinates from renderer result?
  polylineOptions: polylineOptions,
  markerOptions: {
    icon: icon
  }
};


class NewRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "Wallingford, Connecticut",
      title: "",
      description: ""
    };
    this.coordinates = [];
    this.newCoordinates = [];
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

    this.newCoordinates = this.coordinates.slice(0, this.coordIndex);
    console.log(this.coordinates, this.coordIndex);

    const lastCoord = this.newCoordinates.length - 1;
    this.directionsService.route({
      origin: this.newCoordinates[0].location,
      waypoints: this.newCoordinates.slice(1, lastCoord),
      destination: this.newCoordinates[lastCoord].location,
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

  selectTravelMode(mode) {
    this.travelMode = mode;
    this.calculateAndDisplayRoute();

    let bikeEl = document.getElementsByClassName("bike")[0];
    let runEl = document.getElementsByClassName("run")[0];

    switch (mode) {
      case "WALKING":
        runEl.setAttribute("id", "travelmode-selected");
        bikeEl.setAttribute("id", "");
        break;
      default:
        bikeEl.setAttribute("id", "travelmode-selected");
        runEl.setAttribute("id", "");
    }
  }

  modalAction(type) {
    
  }

  saveRoute(e) {
    e.preventDefault();
    console.log("Saving route");
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

            <section className="activity-type-controls route-creation-controls">
              <a
                className="route-creation-individual-control bike"
                id="travelmode-selected"
                onClick={this.selectTravelMode.bind(this, "BICYCLING")}
              >
                <i className="material-icons md-30">directions_bike</i>
                <label>Ride</label>
              </a>
              <a
                className="route-creation-individual-control run"
                id=""
                onClick={this.selectTravelMode.bind(this, "WALKING")}
              >
                <i className="material-icons md-30">directions_run</i>
                <label>Run</label>
              </a>
            </section>
          </nav>
          <nav className="right-controls">
            <button
              className="action-button route-builder-button save-modal-button"
              id="no-directions-button"
              onClick={this.modalAction("open")}
            >
              Save
            </button>
            <section className="save-form-modal-container" id="map-modal-container">
              <section className="save-form-modal-content">
                <span className="modal-close js-modal-close" onClick={this.modalAction("close")}>
                  &times;
                </span>
                <h2 id="save-form-title">Save</h2>
                <form onSubmit={this.saveRoute} className="save-form">
                  <label htmlFor="form-title">
                    Route Name (required)
                  </label>
                  <input type="text"
                    value={this.state.title}
                    onChange={this.update('title')}
                    className="save-form-input"
                    id="form-title"
                  />
                  <label htmlFor="form-description">
                    Description
                  </label>
                  <textarea
                    value={this.state.description}
                    onChange={this.update('description')}
                    className="save-form-textarea"
                    id="form-description"
                  />
                </form>
                <section className="modal-form-buttons">
                  <button className="modal-form-cancel modal-button" onClick={this.modalAction("close")}>
                    Cancel
                  </button>
                  <button className="modal-form-save modal-button" onClick={this.saveRoute}>
                    Save
                  </button>
                </section>
              </section>
            </section>
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
