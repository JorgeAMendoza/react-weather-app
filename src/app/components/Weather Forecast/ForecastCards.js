import { DateString } from '../../utils/date/date-string';
import { ForecastCard } from './ForecastCard';

export const ForecastCards = ({ weatherData }) => {
  const dateString = DateString();
  console.log(weatherData);

  const createForecastCards = (data) => {
    const dateObject = new Date();
    return data.map((info) => {
      dateObject.setDate(dateObject.getDate() + 1);
      const cardDate = dateString.dateToString(dateObject);
      return (
        <ForecastCard
          key={cardDate}
          date={cardDate}
          min={info.min}
          max={info.max}
          iconID={info.iconID}
          outlook={info.outlook}
          weatherID={info.weatherID}
        />
      );
    });
  };
  return (
    <div>
      <p>Hello</p>
      {createForecastCards(weatherData)}
    </div>
  );
};
