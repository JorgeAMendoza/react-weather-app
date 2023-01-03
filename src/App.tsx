import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useQuery } from '@tanstack/react-query';
import { OneWeatherCall } from './types/api';
import fetchWeatherData from './utils/fetch-weather-data';

function App() {
  const [search, setSearch] = useState('Dallas, Texas');
  const { data: weatherData, error } = useQuery<OneWeatherCall, Error>({
    queryKey: ['weather', search],
    queryFn: (): Promise<OneWeatherCall> => fetchWeatherData(search),
    refetchOnWindowFocus: false,
    retry: false,
    keepPreviousData: true,
  });

  return (
    <div className="App">
      <SearchBar setSearch={setSearch} />
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default App;
