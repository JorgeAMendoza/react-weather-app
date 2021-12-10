import { convertTempToImperial } from './convert-temp-to-imperial';
import { convertTempToMetric } from './convert-temp-to-metric';
import { convertWindToImperial } from './convert-wind-to-imperial';
import { convertWindToMetric } from './convert-wind-to-metric';

export const currentWeatherConvert = (weatherData, unit) => {
  if (unit === 'C') {
    return {
      temp: convertTempToImperial(weatherData.temp),
      min: convertTempToImperial(weatherData.min),
      max: convertTempToImperial(weatherData.max),
      wind: convertWindToImperial(weatherData.wind),
    };
  } else {
    return {
      temp: convertTempToMetric(weatherData.temp),
      min: convertTempToMetric(weatherData.min),
      max: convertTempToMetric(weatherData.max),
      wind: convertWindToMetric(weatherData.wind),
    };
  }
};

export const forecastWeatherConvert = (weatherData, unit) => {
  if (unit === 'C') {
    return {
      min: convertTempToImperial(weatherData.min),
      max: convertTempToImperial(weatherData.max),
    };
  } else {
    return {
      min: convertTempToMetric(weatherData.min),
      max: convertTempToMetric(weatherData.max),
    };
  }
};
