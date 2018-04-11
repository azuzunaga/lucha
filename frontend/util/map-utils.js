import { staticMapURLBuilder } from './static-map-url-builder';

export const saveMapImage = (polyLine, startCoord, endCoord) => {
  let url = staticMapURLBuilder(polyLine, startCoord, endCoord);
  return url;
};

export const elevationFormatter = elevation => {
  let elev = elevation.toFixed(0);
  elev = Number(elev).toLocaleString('en');
  return `${elev} ft`;
};

export const distanceFormatter = distance => {
  let dist = parseFloat(distance.toFixed(2)).
  toLocaleString().
  replace(/\.([0-9])$/, ".$10");

  return `${dist} mi`;
};

export const durationFormatter = duration => {
  let durationString = "";

  if (duration < 60) {
    durationString = `${duration}s`;
  } else {
    let hours = parseInt(duration / 3600);
    let minutes = parseInt((duration - hours*3600) / 60);
    let seconds = duration % 60;

    const leadingZero = number => number < 10 ? `0${number}` : number;
    durationString = `${hours}:${leadingZero(minutes)}:${leadingZero(seconds)}`;
  }
  return durationString;
};

export const timeFormatter = time => {
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  let date = new Date(time);
  return date.toLocaleDateString("en-us", options);
};
