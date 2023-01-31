import { WeatherData } from '../types/api';
import imperialConvert from './standard-to-imperial';
import metricConvert from './standard-to-metric';

interface ConvertUnits {
  current: WeatherData['current'];
  weekForecast: WeatherData['weekForecast'];
}

const convertUnits = (
  currentWeather: WeatherData['current'],
  forecast: WeatherData['weekForecast'],
  unit: 'F' | 'C'
): ConvertUnits => {
  const { temp, feels_like, min_temp, max_temp, wind_speed, humidity } =
    currentWeather;
  const forecastWeather = forecast;

  const current: WeatherData['current'] = {
    temp:
      unit === 'F'
        ? imperialConvert.convertTemp(temp)
        : metricConvert.convertTemp(temp),
    feels_like:
      unit === 'F'
        ? imperialConvert.convertTemp(feels_like)
        : metricConvert.convertTemp(feels_like),
    min_temp:
      unit === 'F'
        ? imperialConvert.convertTemp(min_temp)
        : metricConvert.convertTemp(min_temp),
    max_temp:
      unit === 'F'
        ? imperialConvert.convertTemp(max_temp)
        : metricConvert.convertTemp(max_temp),
    wind_speed:
      unit === 'F'
        ? imperialConvert.convertWind(Number(wind_speed)).toString() + 'mph'
        : Math.round(Number(wind_speed)).toString() + 'mps',
    humidity,
  };

  const weekForecast: WeatherData['weekForecast'] = forecastWeather.map(
    ({ temp, humidity, weather, date, day }) => ({
      temp: {
        day:
          unit === 'F'
            ? imperialConvert.convertTemp(temp.day)
            : metricConvert.convertTemp(temp.day),
        min:
          unit === 'F'
            ? imperialConvert.convertTemp(temp.min)
            : metricConvert.convertTemp(temp.min),
        max:
          unit === 'F'
            ? imperialConvert.convertTemp(temp.max)
            : metricConvert.convertTemp(temp.max),
      },
      humidity: humidity,
      weather: weather,
      day,
      date,
    })
  );

  return {
    current,
    weekForecast,
  };
};

export default convertUnits;
