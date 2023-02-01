import { useMemo } from 'react';
import triangleIcon from '../../assets/imgs/triangle.svg';
import { DailyWeather } from '../../types/api';
import getIcon from '../../utils/getIcon';
import Styled from './Forecast.styled';

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
    <Styled.Forecast>
      <Styled.Icon>
        <img src={forecastIcon} alt="some icon" />
      </Styled.Icon>

      <Styled.Date>
        <p>
          <strong>{day}</strong>,
        </p>
        <p data-cy="forecastDay">
          <strong>{date}</strong>
        </p>
      </Styled.Date>

      <Styled.Outlook data-cy="forecastOutlook">
        {weather.description}
      </Styled.Outlook>

      <Styled.Temperature>
        <p data-cy="forecastMinTemp">
          <span>
            <img src={triangleIcon} alt="" />
          </span>
          <strong>{temp.min}°</strong>
        </p>
        <p data-cy="forecastMaxTemp">
          <span>
            <img src={triangleIcon} alt="" />
          </span>
          <strong>{temp.max}°</strong>
        </p>
      </Styled.Temperature>
    </Styled.Forecast>
  );
};

export default Forecast;
