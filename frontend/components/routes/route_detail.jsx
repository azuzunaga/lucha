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
        <div className="image-wrapper"
          style={{backgroundImage: `url(${safeUrl})`}}>
        </div>
        <h2>{route.title}</h2>

      </div>
    </li>
  );
};

export default RouteDetail;
