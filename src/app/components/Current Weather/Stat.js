import { StatStyled } from '../../styles/CurrentWeather/Stat.styled';

export const Stat = ({ image, text, value, unit }) => {
  return (
    <StatStyled>
      <div>
        <img src={image} alt={text} />
      </div>
      <p>{text}</p>
      <p>
        {value}
        {unit}
      </p>
    </StatStyled>
  );
};
