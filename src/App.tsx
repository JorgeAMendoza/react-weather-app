import { useMemo, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { OneWeatherCall, WeatherData } from './types/api';
import fetchWeatherData from './utils/fetch-weather-data';
import convertUnits from './utils/convert-units';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Forecast from './components/Forecast/Forecast';

function App() {
  const [search, setSearch] = useState('Dallas, Texas');
  const [unit, setUnit] = useState<'F' | 'C'>('F');
  const queryClient = useQueryClient();
  const { data: weatherCall, error } = useQuery<OneWeatherCall, Error>({
    queryKey: ['weather', search],
    queryFn: (): Promise<OneWeatherCall> => fetchWeatherData(search),
    refetchOnWindowFocus: false,
    retry: false,
    keepPreviousData: true,
    onError() {
      queryClient.setQueriesData(['weather', search], weatherCall);
    },
  });

  const weatherData: undefined | WeatherData = useMemo(() => {
    if (!weatherCall) return undefined;
    const { current, weekForecast } = convertUnits(
      weatherCall.data.current,
      weatherCall.data.weekForecast,
      unit
    );
    return {
      city: weatherCall.data.city,
      location: weatherCall.data.location,
      weather: weatherCall.data.weather,
      weekForecast,
      current,
    };
  }, [weatherCall, unit]);

  return (
    <div className="App">
      <header>
        <SearchBar setSearch={setSearch} />
        <button onClick={() => (unit === 'F' ? setUnit('C') : setUnit('F'))}>
          {unit}°
        </button>
      </header>

      {weatherData ? (
        <CurrentWeather
          city={weatherData.city}
          location={weatherData.location}
          current={weatherData.current}
          weather={weatherData.weather}
        />
      ) : null}

      {weatherData ? (
        <section>
          {weatherData.weekForecast.map((forecast, i) => (
            <Forecast key={i} temp={forecast.temp} weather={forecast.weather} />
          ))}
        </section>
      ) : null}

      {error && <p>{error.message}</p>}
    </div>
  );
}

export default App;
