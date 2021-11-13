import { useState } from 'react';
import { Header } from './components/Header/Header';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [unit, setUnit] = useState('F');
  const [weatherData, setWeatherData] = useState('');
  return (
    <>
      <Header
        search={searchQuery}
        setSearch={setSearchQuery}
        setWeather={setWeatherData}
        unitType={unit}
        setUnitType={setUnit}
      />

      {/* Extract the current weather Object and place into teh Current weather Component */}
      {/* Extractg the forecat object and place into the forecat component.  */}
    </>
  );
}

export default App;
