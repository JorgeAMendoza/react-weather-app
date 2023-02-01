import { useMemo, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { useQuery } from '@tanstack/react-query';
import { OneWeatherCall, WeatherData } from './types/api';
import fetchWeatherData from './utils/fetch-weather-data';
import convertUnits from './utils/convert-units';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Forecast from './components/Forecast/Forecast';
import Styled from './App.styled';
import SpinningSun from './components/SpinningSun/SpinningSun';

function App() {
  const [search, setSearch] = useState('Dallas, Texas');
  const [unit, setUnit] = useState<'F' | 'C'>('F');
  const [errorMessage, setErrorMessage] = useState('');
  const {
    data: weatherCall,
    isFetching,
  } = useQuery<OneWeatherCall, Error>({
    queryKey: ['weather', search],
    queryFn: async (): Promise<OneWeatherCall> => {
      try {
        const weatherData = await fetchWeatherData(search);
        setErrorMessage('');
        return weatherData;
      } catch (e) {
        if (!weatherCall)
          throw new Error('API is down, please try again later');
        setErrorMessage('city not found');
        return weatherCall;
      }
    },
    refetchOnWindowFocus: false,
    retry: false,
    keepPreviousData: true,
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
        <SearchBar setSearch={setSearch} isLoading={isFetching} />
        <Styled.UnitButton
          onClick={() => (unit === 'F' ? setUnit('C') : setUnit('F'))}
          data-cy="unitButton"
        >
          {unit}°
        </Styled.UnitButton>
        {errorMessage && (
          <Styled.ErrorMessage data-cy="errorMessage" aria-live="polite">
            {errorMessage}
          </Styled.ErrorMessage>
        )}
      </Styled.Header>

      {weatherData ? (
        <CurrentWeather
          city={weatherData.city}
          location={weatherData.location}
          current={weatherData.current}
          weather={weatherData.weather}
        />
      ) : (
        <SpinningSun />
      )}

      {weatherData ? (
        <section>
          <Styled.ForecastTitle>Five Day Forecast</Styled.ForecastTitle>
          <Styled.ForecastContainer data-cy="forecastWeather">
            {weatherData.weekForecast.map((forecast, i) => (
              <Forecast
                key={i}
                temp={forecast.temp}
                weather={forecast.weather}
                date={forecast.date}
                day={forecast.day}
              />
            ))}
          </Styled.ForecastContainer>
        </section>
      ) : null}
    </Styled.App>
  );
}

export default App;
