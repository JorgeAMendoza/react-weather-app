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
    <section>
      <div>
        <img src={weatherIcon} alt="some icon" />
      </div>
      <div>
        <p>
          {city}, {location}
        </p>
        <p>
          {current.temp}° / feels like {current.feels_like}°
        </p>
        <p>{weather.description}</p>

        <div>
          <p>low {current.min_temp}</p>
          <p>high {current.max_temp}</p>
        </div>

        <div>
          <div>
            <div>
              <img src={windIcon} alt="" />
            </div>
            <div>
              <p>Wind Speed</p>
              <p>{current.wind_speed}</p>
            </div>
          </div>

          <div>
            <div>
              <img src={humidIcon} alt="" />
            </div>
            <div>
              <p>Humidity</p>
              <p>{current.humidity}%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
