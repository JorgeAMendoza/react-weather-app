interface GeoData {
  name: string;
  local_names: { [k: string]: string };
  lat: string;
  lon: string;
  country: string;
  state: string;
}

export interface CurrentWeather {
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    temp_min: number;
    temp_max: string;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
}

export interface ForecastWeather {
  temp: {
    min: number;
    max: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: '10d';
    }
  ];
}

export interface WeatherData {
  city: string;
  location: string;
  currentWeather: CurrentWeather;
  forcastWeather: ForecastWeather[];
}

export type GeoDataResponse = [GeoData];
