import { DateString } from '../../utils/date/date-string';
import { ForecastCard } from './ForecastCard';

export const ForecastCards = ({ weatherData }) => {
  const dateString = DateString();

  // const createForecastCards = (data) => {
  //   const dateObject = new Date();
  //   let dateIterator = 0;
  //   return data.map((info) => {
  //     const cardDate = dateString.dateToString(dateObject.setDate() + dateIterator);
  //     dateIterator++;
  //     return <ForecastCard key={cardDate} date={cardDate} />;
  //   });
  // };
  return (
    <div>
      <p>Hello</p>
      {/* {createForecastCards(weatherData)} */}
    </div>
  );
};
