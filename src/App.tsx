import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useQuery } from '@tanstack/react-query';
import fetchGeoLocation from './api/fetch-geo-location';

function App() {
  const [search, setSearch] = useState('Dallas, Texas');
  const weatherData = useQuery({
    queryKey: ['weather', search],
    queryFn: ({ signal }) => fetchGeoLocation(search, signal),
    refetchOnWindowFocus: false,
  });

  // state to keep track of farheheit, and celcius
  // use of tanstack query hook
  // const weatherData = useQuery({queryKey: ''})

  // variable that extracts the forecast data
  // varaible that extracts teh day data

  return (
    <div className="App">
      <SearchBar setSearch={setSearch} />
      <p>{weatherData.data}</p>
    </div>
  );
}

export default App;
