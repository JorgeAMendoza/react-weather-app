import { DateString } from '../../utils/date/date-string';
import { ForecastCard } from './ForecastCard';
import { ForecastCardsStyled } from '../../styles/Weather Forecast/ForecastCard/ForecastCards.styled';

export const ForecastCards = ({ weatherData }) => {
  const dateString = DateString();

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
    <ForecastCardsStyled>
      {createForecastCards(weatherData)}
    </ForecastCardsStyled>
  );
};
