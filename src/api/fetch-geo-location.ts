import { API_KEY } from '../utils/config';

const fetchGeoLocation = async (
  searchQuery: string,
  signal: AbortSignal | undefined
) => {
  const geoDataAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=1&appid=${API_KEY}`;

  fetch(geoDataAPI)
    .then((data) => data.json())
    .then((parsedData) => {
      console.log(parsedData);
    });
  return searchQuery;
};

export default fetchGeoLocation;
