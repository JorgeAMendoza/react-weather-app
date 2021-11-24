import { insertIcon } from '../../utils/get-icon';

export const WeatherIcon = ({ iconID, weatherID, outlook }) => {
  const imageSource = insertIcon(iconID, weatherID);
  return (
    <div>
      <img src={imageSource} alt={outlook} />
    </div>
  );
};
