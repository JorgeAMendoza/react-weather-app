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
      {/* Icon */}
      {/* <Day>Example Date</Day>
      <Outlook>Status</Outlook>
      <Temps /> */}

      <p>{min}</p>
      <p>{max}</p>
      <p>{outlook}</p>
      <p>{iconID}</p>
      <p>{date}</p>
      <p>{weatherID}</p>
    </div>
  );
};
