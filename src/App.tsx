import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
import { OneWeatherCall } from './types/api';
import fetchWeatherData from './utils/fetch-weather-data';

function App() {
  const [search, setSearch] = useState('Dallas, Texas');
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

  return (
    <div className="App">
      <SearchBar setSearch={setSearch} />
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default App;
