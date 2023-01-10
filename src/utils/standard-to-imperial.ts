const convertTemp = (temp: number) =>
  Math.round((temp - 273.15) * (9 / 5) + 32);
const convertWind = (speed: number) => Math.round(speed * 2.2369);

export default { convertTemp, convertWind };
