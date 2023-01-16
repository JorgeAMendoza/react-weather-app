export interface OneWeatherCall {
  data: WeatherData;
}

export interface WeatherData {
  city: string;
  location: string;
  current: {
    temp: number;
    min_temp: number;
    max_temp: number;
    feels_like: number;
    humidity: number;
    wind_speed: string;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  weekForecast: DailyWeather[];
}

export interface DailyWeather {
  temp: {
    day: number;
    min: number;
    max: number;
  };
  humidity: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  day: string;
  date: string;
}
