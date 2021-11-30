import { StatusStyled } from '../../styles/CurrentWeather/Status.styled';

export const Status = ({ status }) => {
  return <StatusStyled>{status}</StatusStyled>;
};
