import { useMemo } from 'react';
import triangleIcon from '../../assets/imgs/triangle.svg';
import { DailyWeather } from '../../types/api';
import getIcon from '../../utils/getIcon';

interface ForecastProps {
  temp: DailyWeather['temp'];
  weather: DailyWeather['weather'];
}

const Forecast = ({ temp, weather }: ForecastProps) => {
  const forecastIcon = useMemo(
    () => getIcon(weather.icon, weather.id),
    [weather]
  );
  return (
    <figure>
      <div>
        <img src={forecastIcon} alt="some icon" />
      </div>

      <div>
        <p>Day</p>
        <p>Date</p>
      </div>

      <p>{weather.description}</p>

      <div>
        <p>
          <span>
            <img src={triangleIcon} alt="" />
          </span>
          {temp.min}°
        </p>
        <p>
          <span>
            <img src={triangleIcon} alt="" />
          </span>
          {temp.max}°
        </p>
      </div>
    </figure>
  );
};

export default Forecast;
