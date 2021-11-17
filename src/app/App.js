import { useState } from 'react';
import { Header } from './components/Header/Header';
import { geoLocationCall } from './utils/api-calls/geolocation-call';
import { validateSearch } from './utils/validate-search';
import { weatherDataCall } from './utils/api-calls/weather-data-call';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [unit, setUnit] = useState('C');
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
      setCurrentWeather(Object.assign({}, current));
      setForecastWeather(forecast);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header
        search={searchQuery}
        setSearch={setSearchQuery}
        unitType={unit}
        setUnitType={setUnit}
        weatherCall={getWeatherData}
      />

      {/* Extract the current weather Object and place into teh Current weather Component */}
      {/* Extractg the forecat object and place into the forecat component.  */}
    </>
  );
}

export default App;
