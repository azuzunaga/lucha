import {
  prefix,
  smallSize,
  largeSize,
  mapTypeOption,
  startMarkerOption,
  endMarkerOption,
  mapStyleOption,
  keyOption,
} from "./static_map_constants";

export const staticMapURLBuilder = (polyLine, startCoord, endCoord, originPage) => {
  let startMarker = startMarkerOption + coordFormatter(startCoord);
  let endMarker = endMarkerOption + coordFormatter(endCoord);
  let polyLineOption = polylineFormatter(polyLine);
  let sizeOption = originPage === "activities" ? largeSize : smallSize;

  let url = [
    prefix,
    sizeOption,
    mapTypeOption,
    startMarker,
    endMarker,
    mapStyleOption,
    polyLineOption,
    keyOption
  ];

  return url.join("&");
};

const coordFormatter = coordinate => {
  return coordinate.join(",");
};

const polylineFormatter = polyLine => {
  return "path=color:0xff0000ff|weight:2|enc:" + polyLine;
};
