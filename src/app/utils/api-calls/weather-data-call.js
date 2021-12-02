import { ForecastWeather } from '../weather-class/forecast-weather';
import { CurrentWeather } from '../weather-class/current-weather';

export const weatherDataCall = async (lat, lon, unit) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const searchUnit = unit === 'F' ? 'imperial' : 'metric';

  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts,hourly&units=${searchUnit}&appid=${API_KEY}`
  );

  const weatherData = await weatherResponse.json();
  const { current, daily } = weatherData;
  const firstDaily = daily[0];

  const currentWeather = new CurrentWeather(
    current.temp,
    firstDaily.temp.min,
    firstDaily.temp.max,
    current.weather[0].main,
    current.weather[0].description,
    current.humidity,
    current.wind_speed,
    current.weather[0].id,
    current.weather[0].icon
  );

  const forecastWeather = daily.slice(1,6).map((data) => {
    return new ForecastWeather(
      data.temp.min,
      data.temp.max,
      data.weather[0].main,
      data.weather[0].id,
      data.weather[0].icon
    );
  });

  return [currentWeather, forecastWeather];
};
