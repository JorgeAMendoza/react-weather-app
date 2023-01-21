import { useMemo } from 'react';
import windIcon from '../../assets/weather-icons/wind.svg';
import humidIcon from '../../assets/weather-icons/humidity.svg';
import { WeatherData } from '../../types/api';
import getIcon from '../../utils/getIcon';
import Styled from './CurrentWeather.styled';

interface CurrentWeatherProps {
  city: WeatherData['city'];
  location: WeatherData['location'];
  weather: WeatherData['weather'];
  current: WeatherData['current'];
}

const CurrentWeather = ({
  city,
  location,
  weather,
  current,
}: CurrentWeatherProps) => {
  const weatherIcon = useMemo(
    () => getIcon(weather.icon, weather.id),
    [weather]
  );
  return (
    <Styled.CurrentWeather data-cy="currentWeather">
      <Styled.Location data-cy="location">
        {city}, {location}
      </Styled.Location>

      <Styled.Icon>
        <img src={weatherIcon} alt="some icon" data-cy="currentWeatherIcon" />
      </Styled.Icon>

      <Styled.Temperature data-cy="currentTemperature">
        <strong>
          {current.temp}° / feels like {current.feels_like}°
        </strong>
      </Styled.Temperature>

      <Styled.Outlook data-cy="currentOutlook">
        {weather.description}
      </Styled.Outlook>

      <Styled.MinMaxTemp>
        <p data-cy="currentLowTemp">
          <strong>Low</strong> <br />
          {current.min_temp}°
        </p>
        <p data-cy="currentHighTemp">
          <strong>high</strong> <br />
          {current.max_temp}°
        </p>
      </Styled.MinMaxTemp>

      <Styled.WindHumidContainer>
        <Styled.OtherStat>
          <div>
            <img src={windIcon} alt="" />
          </div>
          <div>
            <p>
              <strong>Wind Speed</strong>
            </p>
            <p data-cy="windSpeed">{current.wind_speed}</p>
          </div>
        </Styled.OtherStat>

        <Styled.OtherStat>
          <div>
            <img src={humidIcon} alt="" />
          </div>
          <div>
            <p>
              <strong>Humidity</strong>
            </p>
            <p data-cy="humidity">{current.humidity}%</p>
          </div>
        </Styled.OtherStat>
      </Styled.WindHumidContainer>
    </Styled.CurrentWeather>
  );
};

export default CurrentWeather;
