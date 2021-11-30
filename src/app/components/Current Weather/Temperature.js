import { TemperatureStyled } from '../../styles/CurrentWeather/Temperature.styled';

export const Temperature = ({ temperature }) => {
  return <TemperatureStyled>{temperature} °</TemperatureStyled>;
};
