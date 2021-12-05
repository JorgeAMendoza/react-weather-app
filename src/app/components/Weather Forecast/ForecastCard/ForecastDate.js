import { ForecastDateStyled } from '../../../styles/Weather Forecast/ForecastCard/ForecastDate.styled';

export const ForecastDate = ({ date }) => {
  const noCommaDate = date.replace(/,/, '').split(' ');
  const [day, month, dateNum] = noCommaDate;
  return (
    <ForecastDateStyled>
      <p>
        <span>{day}, </span>
        {month} {dateNum}
      </p>
    </ForecastDateStyled>
  );
};
