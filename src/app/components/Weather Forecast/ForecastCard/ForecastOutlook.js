import { ForecastOutlookStyled } from '../../../styles/Weather Forecast/ForecastCard/ForecastOutlook.styled';

export const ForecastOutlook = ({ outlook }) => {
  return (
    <ForecastOutlookStyled>
      <p>{outlook}</p>
    </ForecastOutlookStyled>
  );
};
