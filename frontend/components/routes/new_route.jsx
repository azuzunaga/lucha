import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link } from 'react-router-dom';

const mapOptions = {
  zoom: 14,
  center: {lat: 41.441, lng: -72.777}
};

class NewRoute extends React.Component {

  componentDidMount() {
    const map = this.refs.map;

    this.map = new google.maps.Map(map, mapOptions);

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
