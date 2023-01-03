export interface OneWeatherCall {
  city: string;
  location: string;
  current: {
    temp: number;
    min_temp: number;
    max_temp: number;
    feels_like: number;
    humidity: number;
    wind_speed: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  weekForecast: DailyWeather[];
}

interface DailyWeather {
  temp: {
    day: number;
    min: number;
    max: number;
  };
  humidity: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
}
