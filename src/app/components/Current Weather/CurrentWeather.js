import { Container } from '../../styles/utils/Container.styled';
import { StyledCurrentWeather } from '../../styles/CurrentWeather/CurrentWeather.styled';
import { Temperature } from './Temperature';
import { Status } from './Status';
import { TemperatureOutlook } from './TemperatureOutlook';
import { OtherStats } from './OtherStats';
import { Location } from './Location';
import { WeatherIcon } from '../Icons/WeatherIcon';
import { CurrentWeatherIcon } from '../../styles/CurrentWeather/CurrentWeatherIcon.styled';

export const CurrentWeather = ({ weatherData, location, unit }) => {
  return (
    <Container>
      <StyledCurrentWeather>
        <Location
          city={location.name}
          state={location.state}
          country={location.country}
        />
        <CurrentWeatherIcon>
          <WeatherIcon
            iconID={weatherData.iconID}
            weatherID={weatherData.weatherID}
            outlook={weatherData.statusDescription}
          />
        </CurrentWeatherIcon>
        <Temperature temperature={weatherData.temp} />
        <Status status={weatherData.statusDescription} />
        <TemperatureOutlook min={weatherData.min} max={weatherData.max} />
        <OtherStats
          windSpeed={weatherData.wind}
          humidity={weatherData.humidity}
          unit={unit}
        />
      </StyledCurrentWeather>
    </Container>
  );
};
