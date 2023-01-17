import { useMemo } from 'react';
import triangleIcon from '../../assets/imgs/triangle.svg';
import { DailyWeather } from '../../types/api';
import getIcon from '../../utils/getIcon';

interface ForecastProps {
  temp: DailyWeather['temp'];
  weather: DailyWeather['weather'];
  day: DailyWeather['day'];
  date: DailyWeather['date'];
}

const Forecast = ({ temp, weather, day, date }: ForecastProps) => {
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
        <p>{day}</p>
        <p data-cy="forecastDay">{date}</p>
      </div>

      <p data-cy="forecastOutlook">{weather.description}</p>

      <div>
        <p data-cy="forecastMinTemp">
          <span>
            <img src={triangleIcon} alt="" />
          </span>
          {temp.min}°
        </p>
        <p data-cy="forecastMaxTemp">
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
