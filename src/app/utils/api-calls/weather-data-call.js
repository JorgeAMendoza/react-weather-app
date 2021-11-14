export const weatherDataCall = async (lat, lon, unit) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const searchUnit = unit === 'F' ? 'imperial' : 'metric';

  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts,hourly&units=${searchUnit}&appid=${API_KEY}`
  );

  const weatherData = await weatherResponse.json();
  console.log(weatherData);
  //   So now we need to grab the current weather data and the daily weahther data.
  //   So here we will extract teh current and forecast data, and pass them into a class/factory that allows us to grab and modify the data through methods.
};
