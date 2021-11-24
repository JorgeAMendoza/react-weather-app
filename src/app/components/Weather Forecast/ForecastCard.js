import { WeatherIcon } from '../Icons/WeatherIcon';

export const ForecastCard = ({
  min,
  max,
  date,
  iconID,
  outlook,
  weatherID,
}) => {
  return (
    <div>
      <WeatherIcon iconID={iconID} weatherID={weatherID} outlook={outlook} />
      <p>{min}</p>
      <p>{max}</p>
      <p>{outlook}</p>
      <p>{iconID}</p>
      <p>{date}</p>
      <p>{weatherID}</p>
    </div>
  );
};
