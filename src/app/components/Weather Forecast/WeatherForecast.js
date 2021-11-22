import { WeatherForecastStyled } from '../../styles/Weather Forecast/WeatherForecast.styled';
import { ForecastCards } from './ForecastCards';
export const WeatherForecast = ({forecastData}) => {
  return (
    <WeatherForecastStyled>
      <h2>Five Day Forecast</h2>
      <ForecastCards weatherData = {forecastData} />
    </WeatherForecastStyled>
  );
};
