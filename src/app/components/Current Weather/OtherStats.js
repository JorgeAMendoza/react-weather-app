import { OtherStatsStyled } from '../../styles/CurrentWeather/OtherStats.styled';
import { Stat } from './Stat';
import windIcon from '../../../assets/weather-icons/wind.svg';
import humidIcon from '../../../assets/weather-icons/humidity.svg';

export const OtherStats = ({ windSpeed, humidity, unit }) => {
  console.log(unit);
  return (
    <OtherStatsStyled>
      <Stat
        image={windIcon}
        text="Wind Speed"
        value={windSpeed}
        unit={unit === 'F' ? 'mph' : 'kmh'}
      />
      <Stat image={humidIcon} text="Humidity" value={humidity} unit="%" />
    </OtherStatsStyled>
  );
};
