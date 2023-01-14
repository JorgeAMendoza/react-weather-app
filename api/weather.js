/* eslint-disable no-undef */
import axios from 'axios';

const day = [
  'sunday',
  'monday',
  'tuesday',
  'wendesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

const month = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

export default async function fetchWeather(request, response) {
  const geoDataAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${request.query.location}&limit=1&appid=${process.env.API_KEY}`;

  const { data: geoResponse } = await axios.get(geoDataAPI);

  if (geoResponse.length === 0) {
    return response.status(404).json({
      error: 'city not found',
    });
  }

  const { lat, lon } = geoResponse[0];

  const oneWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts,hourly&appid=${process.env.API_KEY}`;

  const { data: weatherResponse } = await axios.get(oneWeather);

  const locationCity = geoResponse[0].name;
  const locationState = geoResponse[0].state;
  const locationCountry = geoResponse[0].country;

  const targetLocation =
    locationCountry === 'US' ? locationState : locationCountry;

  const targetForecast = weatherResponse.daily.slice(1, 6);
  const date = new Date();

  const fiveDayForcast = targetForecast.map((forecast) => {
    const numberDate = date.getDate();
    const numberDateLength = String(numberDate).length;
    const numberDateLastNum = String(numberDate).charAt(numberDateLength - 1);
    let dateWithOrdinal = '';

    switch (numberDateLastNum) {
      case '1':
        dateWithOrdinal = `${numberDate}st`;
        break;
      case '2':
        dateWithOrdinal = `${numberDate}nd`;
        break;
      case '3':
        dateWithOrdinal = `${numberDate}rd`;
        break;
      default:
        dateWithOrdinal = `${numberDate}th`;
    }

    date.setDate(date.getDate() + 1);
    return {
      temp: {
        day: forecast.temp.day,
        min: forecast.temp.min,
        max: forecast.temp.max,
      },
      humidity: forecast.humidity,
      weather: forecast.weather[0],
      day: day[date.getDay()],
      date: `${month[date.getMonth()]} ${dateWithOrdinal}`,
    };
  });

  const oneWeatherCall = {
    city: locationCity,
    location: targetLocation,
    current: {
      temp: weatherResponse.current.temp,
      min_temp: weatherResponse.daily[0].temp.min,
      max_temp: weatherResponse.daily[0].temp.max,
      feels_like: weatherResponse.current.feels_like,
      humidity: weatherResponse.current.humidity,
      wind_speed: weatherResponse.current.wind_speed,
    },
    weather: weatherResponse.current.weather[0],
    weekForecast: fiveDayForcast,
  };

  response.status(200).json({
    data: oneWeatherCall,
  });
}
