import axios from 'axios';
import { API_KEY } from '../utils/config';
import { CurrentWeather, GeoDataResponse, WeatherData } from '../types/api';

const fetchWeatherData = async (searchQuery: string) => {
  const geoDataAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=1&appid=${API_KEY}`;

  const { data: geoLocation } = await axios.get<GeoDataResponse>(geoDataAPI);
  if (!geoLocation.length) throw new Error('City not found');

  const { lat, lon, country, name, state } = geoLocation[0];

  const { data: currentWeather } = await axios.get<CurrentWeather>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );


  // attempt grabbing curent weather, what unit though? we get kelvin be default, which is what we want, since I plan to derive the state using useMemo
};

export default fetchWeatherData;
