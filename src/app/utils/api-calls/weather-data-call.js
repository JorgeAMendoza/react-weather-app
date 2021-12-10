export const weatherDataCall = async (lat, lon, unit) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const searchUnit = unit === 'F' ? 'imperial' : 'metric';

  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts,hourly&units=${searchUnit}&appid=${API_KEY}`
  );

  const weatherData = await weatherResponse.json();
  const { current, daily } = weatherData;
  const firstDaily = daily[0];

  const currentWeather = {
    temp: Math.round(current.temp),
    min: Math.round(firstDaily.temp.min),
    max: Math.round(firstDaily.temp.max),
    status: current.weather[0].main,
    statusDescription: current.weather[0].description,
    humidity: current.humidity,
    wind: Math.round(current.wind_speed),
    weatherID: current.weather[0].id,
    iconID: current.weather[0].icon,
  };

  const forecastWeather = daily.slice(1, 6).map((data) => {
    return {
      min: Math.round(data.temp.min),
      max: Math.round(data.temp.max),
      outlook: data.weather[0].main,
      weatherID: data.weather[0].id,
      iconID: data.weather[0].icon,
    };
  });

  return [currentWeather, forecastWeather];
};
