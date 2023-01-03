import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useQuery } from '@tanstack/react-query';
import { OneWeatherCall } from './types/api';
import fetchWeatherData from './utils/fetch-weather-data';

function App() {
  const [search, setSearch] = useState('Dallas, Texas');
  const { data: weatherData, error } = useQuery({
    queryKey: ['weather', search],
    queryFn: (): Promise<OneWeatherCall> => fetchWeatherData(search),
    refetchOnWindowFocus: false,
    retry: false,
    keepPreviousData: true,
  });

  // state to keep track of farheheit, and celcius

  return (
    <div className="App">
      <SearchBar setSearch={setSearch} />
    </div>
  );
}

export default App;
