import { useState } from 'react';
import { Header } from './components/Header/Header';
import { geoLocationCall } from './utils/api-calls/geolocation-call';
import { validateSearch } from './utils/validate-search';
import { weatherDataCall } from './utils/api-calls/weather-data-call';
import { CurrentWeather } from './components/Current Weather/CurrentWeather';
import { WeatherForecast } from './components/Weather Forecast/WeatherForecast';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [unit, setUnit] = useState('F');
  const [searchLocation, setSearchLocation] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastWeather, setForecastWeather] = useState([]);

  const getWeatherData = async () => {
    const location = validateSearch(searchQuery);
    if (typeof location === 'string') {
      console.log('Error');
      return;
    }

    const [cityName, cityState] = location;

    try {
      const { lat, lon, country, name, state } = await geoLocationCall(
        cityName,
        cityState
      );
      setSearchLocation(Object.assign({}, { country, name, state }));

      const [current, forecast] = await weatherDataCall(lat, lon, unit);
      setCurrentWeather(current);
      setForecastWeather(forecast);
    } catch (e) {
      console.log(e);
    }
  };

  const changeUnit = () => {
    if (unit === 'F') {
      setUnit('C');
      currentWeather.setToMetric();
      for (const forecast of forecastWeather) {
        forecast.setToMetric();
      }
    } else if (unit === 'C') {
      setUnit('F');
      currentWeather.setToImperial();
      for (const forecast of forecastWeather) {
        forecast.setToImperial();
      }
    }
  };

  return (
    <>
      <Header
        search={searchQuery}
        setSearch={setSearchQuery}
        unitType={unit}
        setUnitType={changeUnit}
        weatherCall={getWeatherData}
      />
      <CurrentWeather weatherData={currentWeather} location={searchLocation} />
      <WeatherForecast forecastData={forecastWeather} />
    </>
  );
}

export default App;
