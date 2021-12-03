import { TemperatureOutlookStyled } from '../../styles/CurrentWeather/TemperatureOutlook.styled';

export const TemperatureOutlook = ({ min, max }) => {
  return (
    <TemperatureOutlookStyled>
      <div>
        <p>Low</p>
        <p>{min}°</p>
      </div>
      <div>
        <p>High</p>
        <p>{max}°</p>
      </div>
    </TemperatureOutlookStyled>
  );
};
