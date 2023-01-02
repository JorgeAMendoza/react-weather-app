import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useQuery } from '@tanstack/react-query';
import { OneWeatherCall } from './types/api';
import fetchWeatherData from './utils/fetch-weather-data';

function App() {
  const [search, setSearch] = useState('Dallas, Texas');
  const { data: weatherData } = useQuery({
    queryKey: ['weather', search],
    queryFn: () => fetchWeatherData(search),
    refetchOnWindowFocus: false,
    retry: false,
    keepPreviousData: true,
  });

  // state to keep track of farheheit, and celcius

  // variable that extracts the forecast data
  // varaible that extracts teh day data=

  return (
    <div className="App">
      <SearchBar setSearch={setSearch} />
    </div>
  );
}

export default App;
