import { WeatherForecastStyled } from '../../styles/Weather Forecast/WeatherForecast.styled';
import { ForecastCards } from './ForecastCards';
import { Container } from '../../styles/utils/Container.styled';
export const WeatherForecast = ({ forecastData }) => {
  return (
    <Container>
      <WeatherForecastStyled>
        <h2>Five Day Forecast</h2>
        <ForecastCards weatherData={forecastData} />
      </WeatherForecastStyled>
    </Container>
  );
};
