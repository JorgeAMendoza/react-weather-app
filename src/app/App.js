import { useState } from 'react';
import { Header } from './components/Header/Header';
import { geoLocationCall } from './utils/api-calls/geolocation-call';
import { validateSearch } from './utils/validate-search';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [unit, setUnit] = useState('F');
  const [weatherData, setWeatherData] = useState('');

  const getWeatherData = async () => {
    const location = validateSearch(searchQuery);
    if (typeof location === 'string') {
      console.log('ErrorS');
      return;
    }

    const [cityName, cityState] = location;

    try {
      const { lat, lon, country } = await geoLocationCall(cityName, cityState);

      console.log(lat, lon, country);
      // Next lets start calling our weather data functions, for now lets just grab the default Imperial Units
    } catch (e) {
      console.log(e);
    }

    // So now lets grab the general geo location, or possibly we can call the specific
    // Geo location in this other function to make it one.
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
