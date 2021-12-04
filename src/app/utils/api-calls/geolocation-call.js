import { grabGeoData } from '../grab-geo-data';

export const geoLocationCall = async (cityName, state) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const stateText = state ? state : '';
  const country = state ? 'US' : '';

  const geoLocationResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateText},${country}&limit=4&appid=${API_KEY}`
  );

  const geoLocationData = await geoLocationResponse.json();

  return grabGeoData(geoLocationData, cityName, state);
};
