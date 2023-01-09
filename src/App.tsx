import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { OneWeatherCall } from './types/api';
import fetchWeatherData from './utils/fetch-weather-data';

function App() {
  const [search, setSearch] = useState('Dallas, Texas');
  const [unit, setUnit] = useState<'F' | 'C'>('F');
  const queryClient = useQueryClient();
  const { data, error } = useQuery<OneWeatherCall, Error>({
    queryKey: ['weather', search],
    queryFn: (): Promise<OneWeatherCall> => fetchWeatherData(search),
    refetchOnWindowFocus: false,
    retry: false,
    keepPreviousData: true,
    onError() {
      console.log('error happended');
      queryClient.setQueriesData(['weather', search], data);
    },
  });

  // here, we need to create a function that will change our weather data for us, meaning it will either return the object but with metric/imperial/ or an undefined array, undefined is if we are looking for data, maybe, still gotta figure that out.

  return (
    <div className="App">
      <header>
        <SearchBar setSearch={setSearch} />
        <button onClick={() => (unit === 'F' ? setUnit('C') : setUnit('F'))}>
          {unit}°
        </button>
      </header>

      {error && <p>{error.message}</p>}
    </div>
  );
}

export default App;
