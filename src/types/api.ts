interface GeoData {
  name: string;
  local_names: { [k: string]: string };
  lat: string;
  lon: string;
  country: string;
  state: string;
}

// api is set to respond with only one geo data, so response will be a single tuple of geo data
export type GeoDataResponse = [GeoData];
