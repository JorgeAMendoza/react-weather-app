import { useMemo } from 'react';
import windIcon from '../../assets/weather-icons/wind.svg';
import humidIcon from '../../assets/weather-icons/humidity.svg';
import { WeatherData } from '../../types/api';
import getIcon from '../../utils/getIcon';

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
    <section data-cy="currentWeather">
      <div>
        <img src={weatherIcon} alt="some icon" data-cy="currentWeatherIcon" />
      </div>
      <div>
        <p data-cy="location">
          {city}, {location}
        </p>
        <p data-cy="currentTemperature">
          {current.temp}° / feels like {current.feels_like}°
        </p>
        <p data-cy="currentOutlook">{weather.description}</p>

        <div>
          <p data-cy="currentLowTemp">low {current.min_temp}</p>
          <p data-cy="currentHighTemp">high {current.max_temp}</p>
        </div>

        <div>
          <div>
            <div>
              <img src={windIcon} alt="" />
            </div>
            <div>
              <p>Wind Speed</p>
              <p data-cy="windSpeed">{current.wind_speed}</p>
            </div>
          </div>

          <div>
            <div>
              <img src={humidIcon} alt="" />
            </div>
            <div>
              <p>Humidity</p>
              <p data-cy="humidity">{current.humidity}%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
