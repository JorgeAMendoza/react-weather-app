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
    console.log('i am called');
    if (!weatherCall) return undefined;
    const { temp, feels_like, min_temp, max_temp, wind_speed, humidity } =
      weatherCall.data.current;
    const forecastWeather = weatherCall.data.weekForecast;

    const current: WeatherData['current'] = {
      temp:
        unit === 'F'
          ? imperialConvert.convertTemp(temp)
          : metricConvert.convertTemp(temp),
      feels_like:
        unit === 'F'
          ? imperialConvert.convertTemp(feels_like)
          : metricConvert.convertTemp(feels_like),
      min_temp:
        unit === 'F'
          ? imperialConvert.convertTemp(min_temp)
          : metricConvert.convertTemp(min_temp),
      max_temp:
        unit === 'F'
          ? imperialConvert.convertTemp(max_temp)
          : metricConvert.convertTemp(max_temp),
      wind_speed:
        unit === 'F'
          ? imperialConvert.convertWind(wind_speed)
          : Math.round(wind_speed),
      humidity,
    };

    const weekForecast: WeatherData['weekForecast'] = forecastWeather.map(
      ({ temp, humidity, weather }) => ({
        temp: {
          day:
            unit === 'F'
              ? imperialConvert.convertTemp(temp.day)
              : metricConvert.convertTemp(temp.day),
          min:
            unit === 'F'
              ? imperialConvert.convertTemp(temp.min)
              : metricConvert.convertTemp(temp.min),
          max:
            unit === 'F'
              ? imperialConvert.convertTemp(temp.max)
              : metricConvert.convertTemp(temp.max),
        },
        humidity: humidity,
        weather: weather,
      })
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
        <p>{weatherData.current.temp}</p>
      ) : (
        <p>somethign is wrong</p>
      )}

      {error && <p>{error.message}</p>}
    </div>
  );
}

export default App;
