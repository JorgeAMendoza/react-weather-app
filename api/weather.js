/* eslint-disable no-undef */
import axios from 'axios';

export default async function fetchWeather(request, response) {
  const geoDataAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${request.query.location}&limit=1&appid=${process.env.API_KEY}`;

  const { data: geoResponse } = await axios.get(geoDataAPI);

  if (geoResponse.length === 0) {
    console.log('returning error');
    return response.status(404).json({
      error: 'city not found',
    });
  }

  const { lat, lon } = geoResponse[0];

  const oneWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts,hourly&appid=${process.env.API_KEY}`;

  const { data: weatherResponse } = await axios.get(oneWeather);

  response.status(200).json({
    data: weatherResponse,
  });
}
