import { ForecastTemperatureStyled } from '../../../styles/Weather Forecast/ForecastCard/ForecastTemperature.styled';
import { ArrowContainer } from '../../../styles/Weather Forecast/ForecastCard/ArrowContainer.styled';
import arrowSVG from '../../../../assets/imgs/triangle.svg';

export const ForecastTemperature = ({ min, max }) => {
  return (
    <ForecastTemperatureStyled>
      <p>
        <ArrowContainer>
          <img src={arrowSVG} aria-hidden="true" alt="" />
        </ArrowContainer>
        {min}
        <span> °</span>
      </p>
      <p>
        <ArrowContainer rotation="180deg">
          <img src={arrowSVG} aria-hidden="true" alt="" />
        </ArrowContainer>
        {max}
        <span> °</span>
      </p>
    </ForecastTemperatureStyled>
  );
};
