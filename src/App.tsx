import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useQuery } from '@tanstack/react-query';
import fetchGeoLocation from './api/fetch-geo-location';

function App() {
  const [search, setSearch] = useState('Dallas, Texas');
  const { data: weatherData } = useQuery({
    queryKey: ['weather', search],
    queryFn: () => fetchGeoLocation(search),
    refetchOnWindowFocus: false,
    retry: false,
    keepPreviousData: true,
  });

  // state to keep track of farheheit, and celcius

  // variable that extracts the forecast data
  // varaible that extracts teh day data

  return (
    <div className="App">
      <SearchBar setSearch={setSearch} />
      <p>{weatherData}</p>
    </div>
  );
}

export default App;
