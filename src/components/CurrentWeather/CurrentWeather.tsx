import windIcon from '../../assets/weather-icons/wind.svg';
import humidIcon from '../../assets/weather-icons/humidity.svg';

const CurrentWeather = () => {
  return (
    <section>
      <div>
        <img src="dfds" alt="some icon" />
      </div>
      <div>
        <p>location</p>
        <p>current temp / feels like temp</p>
        <p>outlook</p>

        <div>
          <p>low temp</p>
          <p>hight temp</p>
        </div>

        <div>
          <div>
            <div>
              <img src={windIcon} alt="" />
            </div>
            <div>
              <p>Wind Speed</p>
              <p>wind speed value</p>
            </div>
          </div>

          <div>
            <div>
              <img src={humidIcon} alt="" />
            </div>
            <div>
              <p>Humidity</p>
              <p>humidity value</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
