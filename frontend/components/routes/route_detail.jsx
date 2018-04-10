import React from 'react';
import { Link, withRouter } from 'react-router';

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
        <h2 className="route-detail-title">{route.title}</h2>
        <div className="route-detail-stats">
          <div className="route-detail-distance">
            <h3>{route.distance}</h3>
            <h4>Distance</h4>
          </div>
          <div className="route-detail-elevation">
            <h3>{route.elevation}</h3>
            <h4>Elevation Gain</h4>
          </div>
          <div className="route-detail-duration">
            <h4>Est. Moving Time</h4>
            <h5>{route.duration}</h5>
          </div>
          <div className="route-detail-creation">
            <h6>{route.createdAt}</h6>
          </div>
        </div>
      </div>
    </li>
  );
};

export default RouteDetail;
