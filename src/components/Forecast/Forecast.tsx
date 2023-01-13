import triangleIcon from '../../assets/imgs/triangle.svg';
import { DailyWeather } from '../../types/api';

interface ForecastProps {
  temp: DailyWeather['temp'];
  weather: DailyWeather['weather'];
}

const Forecast = ({ temp, weather }: ForecastProps) => {
  return (
    <figure>
      <div>
        <img alt="some icon" />
      </div>

      <div>
        <p>Day</p>
        <p>Date</p>
      </div>

      <p>{weather.description}</p>

      <div>
        <p>
          <span>
            <img src={triangleIcon} alt="" />
          </span>
          {temp.min}°
        </p>
        <p>
          <span>
            <img src={triangleIcon} alt="" />
          </span>
          {temp.max}°
        </p>
      </div>
    </figure>
  );
};

export default Forecast;
