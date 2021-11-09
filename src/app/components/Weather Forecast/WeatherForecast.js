export const WeatherForecast = () => {
  return (
    <WeatherForecastStyled>
      <h2>Five Day Forecast</h2>
      <ForecastCardContainer>
          {/* Here we will iterate over the the array that contains the weather data, and for each one return the Card Component */}
      </ForecastCardContainer>
    </WeatherForecastStyled>
  );
};
