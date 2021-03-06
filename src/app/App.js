import { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { geoLocationCall } from './utils/api-calls/geolocation-call';
import { validateSearch } from './utils/validate-search';
import { weatherDataCall } from './utils/api-calls/weather-data-call';
import { CurrentWeather } from './components/Current Weather/CurrentWeather';
import { WeatherForecast } from './components/Weather Forecast/WeatherForecast';
import { ErrorModal } from './components/ErrorModal/ErrorModal';
import { GlobalStyles } from './styles/utils/Global.styled';
import { ContentContainer } from './styles/utils/ContentContainer.styled';
import {
  currentWeatherConvert,
  forecastWeatherConvert,
} from './utils/unit-conversion/unit-convert';

function App() {
  const [searchQuery, setSearchQuery] = useState('Dallas, TX');
  const [unit, setUnit] = useState('F');
  const [searchLocation, setSearchLocation] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastWeather, setForecastWeather] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      setShowModal(false);
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
      setShowModal(true);
    }
  };

  const changeUnit = () => {
    if (unit === 'F') setUnit('C');
    else setUnit('F');

    const newCurrentTemps = currentWeatherConvert(currentWeather, unit);
    const newForecastTemps = forecastWeather.map((forecast) => {
      const newTemps = forecastWeatherConvert(forecast, unit);
      return Object.assign(forecast, newTemps);
    });

    setCurrentWeather(Object.assign(currentWeather, newCurrentTemps));
    setForecastWeather(newForecastTemps);
  };

  return (
    <>
      <GlobalStyles />
      <ContentContainer>
        <Header
          search={searchQuery}
          setSearch={setSearchQuery}
          unitType={unit}
          setUnitType={changeUnit}
          weatherCall={getWeatherData}
        />
        <CurrentWeather
          weatherData={currentWeather}
          location={searchLocation}
          unit={unit}
        />
        <WeatherForecast forecastData={forecastWeather} />
        <ErrorModal errorMessage={errorMessage} show={showModal} />
      </ContentContainer>
    </>
  );
}

export default App;
