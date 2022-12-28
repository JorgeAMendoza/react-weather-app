import axios from 'axios';
import { API_KEY } from '../utils/config';
import { GeoDataResponse } from '../types/api';

const fetchGeoLocation = async (searchQuery: string) => {
  const geoDataAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=1&appid=${API_KEY}`;

  const { data } = await axios.get<GeoDataResponse>(geoDataAPI);
  if (!data.length) throw new Error('City not found');

  const geoData = data[0];
  if (geoData.country === 'US') return `${geoData.name},${geoData.state}`;
  else return `${geoData.name},${geoData.country}`;
  return searchQuery;
};

export default fetchGeoLocation;
