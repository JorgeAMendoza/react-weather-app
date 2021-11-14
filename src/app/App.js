import { useState } from 'react';
import { Header } from './components/Header/Header';
import { geoLocationCall } from './utils/api-calls/geolocation-call';
import { validateSearch } from './utils/validate-search';
import { weatherDataCall } from './utils/api-calls/weather-data-call';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [unit, setUnit] = useState('C');
  const [weatherData, setWeatherData] = useState('');

  const getWeatherData = async () => {
    const location = validateSearch(searchQuery);
    if (typeof location === 'string') {
      console.log('ErrorS');
      return;
    }

    const [cityName, cityState] = location;

    try {
      const { lat, lon, country, name, state } = await geoLocationCall(
        cityName,
        cityState
      );

      weatherDataCall(lat, lon, unit);
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
