import { ForecastDateStyled } from '../../../styles/Weather Forecast/ForecastCard/ForecastDate.styled';

export const ForecastDate = ({ date }) => {
  return (
    <ForecastDateStyled>
      <p>{date}</p>
    </ForecastDateStyled>
  );
};
