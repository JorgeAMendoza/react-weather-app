export const OtherStats = ({ windSpeed, humidity, unit }) => {
  return (
    <div>
      <div>
        {/* Wind Icon */}
        <p>Wind Speed</p>
        <p>
          {windSpeed}
          {unit === 'F' ? 'mph' : 'kmh'}
        </p>
      </div>
      <div>
        {/* Wind Icon */}
        <p>Humidity</p>
        <p>{humidity}%</p>
      </div>
    </div>
  );
};
