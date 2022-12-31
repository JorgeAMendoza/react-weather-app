/* eslint-disable no-undef */
import axios from 'axios';

export default async function fetchWeather(request, response) {
  const geoDataAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${request.query.location}&limit=1&appid=${process.env.API_KEY}`;

  const { data } = await axios.get(geoDataAPI);

  response.status(200).json({
    data: data,
  });
}
