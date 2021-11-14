export const grabGeoData = (geoData, city, state) => {
  if (geoData.length === 0) throw new Error('City Not Found');
  if (!state) return geoData[0];

  for (let location of geoData) {
    if (!location.hasOwnProperty('state')) continue;
    if (
      location.name.toUpperCase() === city.toUpperCase() &&
      location.state.toUpperCase() === state.toUpperCase()
    )
      return location;
  }

  throw new Error('City Not Found');
};
