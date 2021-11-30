import { LocationStyled } from '../../styles/CurrentWeather/Location.styled';
export const Location = ({ city, state, country }) => {
  return (
    <LocationStyled>
      {city}, {state ? state : country}
    </LocationStyled>
  );
};
