import { WeatherIcon } from '../Icons/WeatherIcon';
import { ForecastTemperature } from './ForecastCard/ForecastTemperature';
import { ForecastDate } from './ForecastCard/ForecastDate';
import { ForecastOutlook } from './ForecastCard/ForecastOutlook';
import { ForecastCardStyled } from '../../styles/Weather Forecast/ForecastCard/ForecastCard.styled';
import { IconContainer } from '../../styles/Weather Forecast/ForecastCard/IconContainer.styled';

export const ForecastCard = ({
  min,
  max,
  date,
  iconID,
  outlook,
  weatherID,
}) => {
  return (
    <ForecastCardStyled>
      <IconContainer>
        <WeatherIcon iconID={iconID} weatherID={weatherID} outlook={outlook} />
      </IconContainer>
      <ForecastDate date={date} />
      <ForecastTemperature min={min} max={max} />
      <ForecastOutlook outlook={outlook} />
    </ForecastCardStyled>
  );
};
