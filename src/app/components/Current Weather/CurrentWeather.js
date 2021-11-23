import { Container } from '../../styles/utils/Container.styled';
import { StyledCurrentWeather } from '../../styles/CurrentWeather/CurrentWeather.styled';
import { Temperature } from './Temperature';
import { Status } from './Status';
import { TemperatureOutlook } from './TemperatureOutlook';
import { OtherStats } from './OtherStats';
import { Location } from './Location';

export const CurrentWeather = ({ weatherData, location }) => {
  return (
    <StyledCurrentWeather>
      <Container>
        <Location
          city={location.name}
          state={location.state}
          country={location.country}
        />
        {/* <WeatherIcon /> */}
        <Temperature temperature={weatherData.temp} />
        <Status status={weatherData.status} />
        <TemperatureOutlook min={weatherData.min} max={weatherData.max} />
        <OtherStats
          windSpeed={weatherData.wind}
          humidity={weatherData.humidity}
        />
      </Container>
    </StyledCurrentWeather>
  );
};
