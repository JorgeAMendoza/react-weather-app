export const TemperatureOutlook = ({ min, max }) => {
  return (
    <div>
      <div>
        <p>Low</p>
        <p>{min}</p>
      </div>
      <div>
        <p>High</p>
        <p>{max}</p>
      </div>
    </div>
  );
};
