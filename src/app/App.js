import { useState } from 'react';
import { Header } from './components/Header/Header';
import { geoLocationCall } from './utils/api-calls/geolocation-call';
import { validateSearch } from './utils/validate-search';
import { weatherDataCall } from './utils/api-calls/weather-data-call';
import { CurrentWeather } from './components/Current Weather/CurrentWeather';
import { WeatherForecast } from './components/Weather Forecast/WeatherForecast';
import { ErrorModal } from './components/ErrorModal/ErrorModal';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [unit, setUnit] = useState('F');
  const [searchLocation, setSearchLocation] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastWeather, setForecastWeather] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const getWeatherData = async () => {
    try {
      const location = validateSearch(searchQuery);
      if (typeof location === 'string') {
        throw new Error('Invalid Search, Try Again');
      }

      const [cityName, cityState] = location;
      const { lat, lon, country, name, state } = await geoLocationCall(
        cityName,
        cityState
      );

      const [current, forecast] = await weatherDataCall(lat, lon, unit);
      setSearchLocation(Object.assign({}, { country, name, state }));
      setCurrentWeather(current);
      setForecastWeather(forecast);

      setErrorMessage('');
      setShowModal(false);
    } catch (e) {
      setErrorMessage(e.message);
      setShowModal(true);
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
      <ErrorModal errorMessage={errorMessage} show={showModal} />
    </>
  );
}

export default App;
