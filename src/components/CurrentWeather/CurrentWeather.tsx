import windIcon from '../../assets/weather-icons/wind.svg';
import humidIcon from '../../assets/weather-icons/humidity.svg';
import { OneWeatherCall } from '../../types/api';

interface CurrentWeatherProps {
  city: OneWeatherCall['city'];
  location: OneWeatherCall['location'];
  weather: OneWeatherCall['weather'];
  current: OneWeatherCall['current'];
}

const CurrentWeather = ({
  city,
  location,
  weather,
  current,
}: CurrentWeatherProps) => {
  return (
    <section>
      <div>
        <img src="dfds" alt="some icon" />
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
