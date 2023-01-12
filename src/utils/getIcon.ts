import dayPartlyCloudyIcon from '../assets/weather-icons/day-partly-cloudy.svg';
import nightPartlyCloudyIcon from '../assets/weather-icons/night-partly-cloudy.svg';
import cloudyIcon from '../assets/weather-icons/cloudy.svg';
import rainIcon from '../assets/weather-icons/rain.svg';
import lightRainIcon from '../assets/weather-icons/light-rain.svg';
import snowIcon from '../assets/weather-icons/snow.svg';
import stormIcon from '../assets/weather-icons/storm.svg';
import clearDayIcon from '../assets/weather-icons/day-clear.svg';
import clearNightIcon from '../assets/weather-icons/night-clear.svg';
import dayHazeIcon from '../assets/weather-icons/day-haze.svg';
import nightHazeIcon from '../assets/weather-icons/night-haze.svg';

const insertIcon = (iconID: string, weatherID: number) => {
  if (weatherID >= 800) {
    if (iconID === '01d') return clearDayIcon;
    else if (iconID === '01n') return clearNightIcon;
    else if (iconID === '02d') return dayPartlyCloudyIcon;
    else if (iconID === '02n') return nightPartlyCloudyIcon;
    else return cloudyIcon;
  } else if (weatherID >= 700) {
    if (iconID === '50d') return dayHazeIcon;
    else return nightHazeIcon;
  } else if (weatherID >= 600) return snowIcon;
  else if (weatherID >= 500) {
    if (iconID === '13d' || iconID === '13n') return snowIcon;
    else return rainIcon;
  } else if (weatherID >= 300) return lightRainIcon;
  else return stormIcon;
};

export default insertIcon;
