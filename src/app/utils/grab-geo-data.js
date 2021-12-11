import { stateDictionary } from './api-calls/state-dictionary';

export const grabGeoData = (geoData, city, state) => {
  if (geoData.length === 1) return geoData[0];
  if (geoData.length === 0) throw new Error('City Not Found');
  if (!state) return geoData[0];

  for (let location of geoData) {
    console.log(location.name, city);
    console.log(location.state, stateDictionary[state]);
    if (
      location.name.toUpperCase() === city.toUpperCase() &&
      location.state.toUpperCase() === stateDictionary[state].toUpperCase()
    )
      return location;
  }

  throw new Error('City Not Found');
};
