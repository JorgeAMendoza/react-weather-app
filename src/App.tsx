import { useMemo, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { OneWeatherCall, WeatherData } from './types/api';
import fetchWeatherData from './utils/fetch-weather-data';
import convertUnits from './utils/convert-units';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Forecast from './components/Forecast/Forecast';
import Styled from './App.styled';

function App() {
  const [search, setSearch] = useState('Dallas, Texas');
  const [unit, setUnit] = useState<'F' | 'C'>('F');
  const [errorMessage, setErrorMessage] = useState('');
  const queryClient = useQueryClient();
  const { data: weatherCall } = useQuery<OneWeatherCall, Error>({
    queryKey: ['weather', search],
    queryFn: (): Promise<OneWeatherCall> => fetchWeatherData(search),
    refetchOnWindowFocus: false,
    retry: false,
    keepPreviousData: true,
    onError(error) {
      queryClient.setQueriesData(['weather', search], weatherCall);
      setErrorMessage(error.message);
    },
    onSuccess() {
      setErrorMessage('');
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
    <Styled.App>
      <Styled.Header>
        <SearchBar setSearch={setSearch} />
        <Styled.UnitButton
          onClick={() => (unit === 'F' ? setUnit('C') : setUnit('F'))}
          data-cy="unitButton"
        >
          {unit}°
        </Styled.UnitButton>
        {errorMessage && <p data-cy="errorMessage">{errorMessage}</p>}
      </Styled.Header>

      {weatherData ? (
        <CurrentWeather
          city={weatherData.city}
          location={weatherData.location}
          current={weatherData.current}
          weather={weatherData.weather}
        />
      ) : null}

      {weatherData ? (
        <section data-cy="forecastWeather">
          {weatherData.weekForecast.map((forecast, i) => (
            <Forecast
              key={i}
              temp={forecast.temp}
              weather={forecast.weather}
              date={forecast.date}
              day={forecast.day}
            />
          ))}
        </section>
      ) : null}
    </Styled.App>
  );
}

export default App;
