import axios from 'axios';
import { API_KEY } from './config';
import { OneWeatherCall } from '../types/api';

const fetchWeatherData = async (searchQuery: string) => {
  // const { data: currentWeather } = await axios.get<CurrentWeather>(
  //   `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  // );

  // now get the forecast data, now this one returns 16, but note we only need five, but dont include the first one becuase that is for the currnet day.

  const fetch = await axios.get<OneWeatherCall>(
    'http://localhost:3000/api/weather',
    {
      params: {
        location: searchQuery,
      },
    }
  );

  console.log('this is the fetch', fetch);
  return 'fetching';
};

export default fetchWeatherData;
