import { useMemo, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { OneWeatherCall, WeatherData } from './types/api';
import fetchWeatherData from './utils/fetch-weather-data';
import imperialConvert from './utils/standard-to-imperial';
import metricConvert from './utils/standard-to-metric';

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
    const currentWeather = weatherCall.data.current;
    if (unit === 'F') {
      const weatherImperial: WeatherData['current'] = {
        temp: imperialConvert.convertTemp(currentWeather.temp),
        feels_like: imperialConvert.convertTemp(currentWeather.feels_like),
        min_temp: imperialConvert.convertTemp(currentWeather.min_temp),
        max_temp: imperialConvert.convertTemp(currentWeather.max_temp),
        wind_speed: imperialConvert.convertWind(currentWeather.wind_speed),
        humidity: currentWeather.humidity,
      };
      return {
        city: weatherCall.data.city,
        location: weatherCall.data.location,
        weather: weatherCall.data.weather,
        weekForecast: weatherCall.data.weekForecast,
        current: weatherImperial,
      };
    } else {
      const weatherMetric: WeatherData['current'] = {
        temp: metricConvert.convertTemp(currentWeather.temp),
        feels_like: metricConvert.convertTemp(currentWeather.feels_like),
        min_temp: metricConvert.convertTemp(currentWeather.min_temp),
        max_temp: metricConvert.convertTemp(currentWeather.max_temp),
        wind_speed: Math.round(currentWeather.wind_speed),
        humidity: currentWeather.humidity,
      };

      return {
        city: weatherCall.data.city,
        location: weatherCall.data.location,
        weather: weatherCall.data.weather,
        weekForecast: weatherCall.data.weekForecast,
        current: weatherMetric,
      };
    }
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
        <p>{weatherData.current.temp}</p>
      ) : (
        <p>somethign is wrong</p>
      )}

      {error && <p>{error.message}</p>}
    </div>
  );
}

export default App;
