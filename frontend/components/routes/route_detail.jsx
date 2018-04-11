import React from 'react';
import { Link, withRouter } from 'react-router';
import {
  elevationFormatter,
  distanceFormatter,
  durationFormatter,
  timeFormatter,
} from '../../util/map-utils';

const RouteDetail = ({ route }) => {
  const safeUrl = encodeURI(route.imageUrl);
  const imageWrapperStyle = {
    backgroundImage: `url(${safeUrl})`
  };

  console.log(safeUrl);
  return (
    <li>
      <div className="route-detail-component">
        <div className="route-detail-image"
          style={{backgroundImage: `url(${safeUrl})`}}>
        </div>
        <div className="route-detail-stats">
          <h2 className="route-detail-title">{route.title}</h2>
          <ul className="route-main-stats">
            <li className="route-detail-distance">
              <h3>{distanceFormatter(route.distance)}</h3>
              <h4>Distance</h4>
            </li>
            <li className="route-detail-elevation">
              <h3>{elevationFormatter(route.elevation)}</h3>
              <h4>Elevation Gain</h4>
            </li>
          </ul>
          <div className="route-detail-duration">
            <h4>Est. Moving Time</h4>
            <h5>{durationFormatter(route.duration)}</h5>
          </div>
        </div>
        <div className="route-detail-creation">
          <h6>Created on {timeFormatter(route.createdAt)}</h6>
        </div>
      </div>
    </li>
  );
};

export default RouteDetail;
