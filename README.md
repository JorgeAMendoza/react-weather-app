# Weather App Built with React, TanStack Query, and Styled Components.

<div align="center"><img src="./project-images/weather-app.gif" width=600 alt="gi of the weather application"></div>

The goal of the project is to create a working, web-based weather application that allows users to search for the current weather and the five-day forecast of a specific city around the world.

Three of the goals I aimed to achieve with this project include:

1. Using servless functions to act as a proxy between the application and API to ensure that no API keys are exposed on the client.
2. Thoroughly test the application to ensure that no errors are deployed in the production build.
3. Make the application accessible as possible, ensuring that those with disablities can easily search for the weather in this application.

The application was built previously using basic react with no TypeScript, after improving my skills and working on multiple projects, I decided to revisit the project and improve upon it with the new skills and tools I have learned up to this point. You can find the original version of the project under the branch titled ["app-version-1"](https://github.com/JorgeAMendoza/react-weather-app/tree/app-version-1)

API used to retrieve weather provided by [OpenWeather](https://openweathermap.org/api), both versions of the application use the 2.0 version of the One Call API. **Version 2.0 of the the API can no longer be signed up for**.

Three improvements I wanted to focus on was:

1. Fetching and handling data more efficiently with state-management tools.
2. Component structure and project organization, I wanted to make it clear to people reading the code how the component worked and why it was structured like so.
3. Better use of the styled-components library.

## Techstack Used

Project was bootstrapped with [Vite](https://vitejs.dev/guide/) using the React/Typescript template. The project is linted with [Eslint](https://eslint.org/docs/latest/user-guide/getting-started) using react,prettier,cypress, and accessibility rules. Please see the `.eslintrc` file for all the linting rules used in this project.

The following are the main tools used to create the application:

- [React](https://reactjs.org/docs/getting-started.html), a JavaScript library for building user interfaces. TypeScript is used in favor or JavaScript.
- [Tanstack Query](https://tanstack.com/query/v4/docs/react/overview), a state management tools for queries made in the application.
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress#What-you-ll-learn), front end testing tool for writing unit and integration test.

Other libraries used include [axios](https://www.npmjs.com/package/axios) which is a HTTP client for the browser and node.js, and [react-hook-form](https://react-hook-form.com/get-started) which is state-management tool for building and managing form state.

## Running the application

Once the application has been cloned to your local machine, run `npm i` to install all dependencies.

The [Vercel CLI](https://vercel.com/docs/cli) is required to run the application locally.

Instead of using `npm run dev` to launch the application in vite, the application needs to also be running the vercel serverless function locally, you will need to run `vercel dev` which runs vite and the the API located at `api/weather`. Some notes about this process

1. On windows this must be run on the command line and not Git Bash.
2. An API key is needed in the .env file named `API_KEY`. A key for the **One Call Weather 2.0** is also required as well, which is sadly no longer avaliable for free.
3. A vercel account is required to pull the project setttings and run the `vercel dev` command.

Once launched, the application will be running on `localhost:3000`, with the API runing on the same host.

## Improving upon the application

The project originally started when I was taking an online course provided by [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-weather-app), where I was tasked to create a weather application using an API. At the time I was just getting into React, so I decided it would be a great opportunity to build a functional React application for the first time

The original version of the application was bootstrapped with [create-react-app](https://create-react-app.dev/) with styled-components used to style the application as well. This was also my first time using styled components to style a project like this.

A year later, when I revisited the project, I found that there are multiple improvements that can be made within the project. One of the biggest changes was switching over to Vite from Create-React-App. This was done since I found Vite much easier and efficient to use and easier to configure.

This section will review some of the main changes I made to the application and why they were made.

### Fetching Weather Data

I structured the application in a way so that one API call would be made for the application, and the results would be passed down to the various components that need to display data. I attempted to create a presentional/container component structure. So `App.js` would be in charge of holidng multiple instances of state and calling a function that retrives weather data and set the values of multiple states. This data would then be passed down to components to be displayed.

Some issues I have with approach include:

1. **Too many instances of state**, there should be a way to cutdown on how many times I use `useState` by deriving data from one piece of data/state.
2. **Weather data fetch lives in component**, on every re-render we are creating the function again, the function should be able to live outside the component, taking in a search query and just returning the data needed.
3. **Error handling**, there is no direct error handling, we do catch an error but all we do is set a message on the screen and thats it. Errors should include more information so they can be handled more appropriately.
4. **Exposed API**, it was not until recently when I was reviewing the application that I noticed that the API key was being exposed upon every request since it was being directly attached to the request itself. We need a proxy that asks for the weather information, and this proxy should be the one directly communicating with the API with the private key.

Original `App.tsx` logic for retrieving and setting weather data:

```
function App() {
  const [searchQuery, setSearchQuery] = useState('Dallas, TX');
  const [unit, setUnit] = useState('F');
  const [searchLocation, setSearchLocation] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecastWeather, setForecastWeather] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWeatherData = async () => {
    try {
      const location = validateSearch(searchQuery);
      if (typeof location === 'string') {
        throw new Error('Invalid Search, Try Again');
      }

      const [cityName, cityState] = location;
      const { lat, lon, country, name, state } = await geoLocationCall(
        cityName,
        cityState
      );

      const [current, forecast] = await weatherDataCall(lat, lon, unit);
      setSearchLocation(Object.assign({}, { country, name, state }));
      setCurrentWeather(current);
      setForecastWeather(forecast);

      setShowModal(false);
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
      setShowModal(true);
    }
  };

  const changeUnit = () => {
    if (unit === 'F') setUnit('C');
    else setUnit('F');

    const newCurrentTemps = currentWeatherConvert(currentWeather, unit);
    const newForecastTemps = forecastWeather.map((forecast) => {
      const newTemps = forecastWeatherConvert(forecast, unit);
      return Object.assign(forecast, newTemps);
    });

    setCurrentWeather(Object.assign(currentWeather, newCurrentTemps));
    setForecastWeather(newForecastTemps);
  };
```

## Improvement

After delving deeper in React in the later months and learning various patterns and tools, some of the improvements that were made include:

1. **Query state management**, using tanstack query, the `useQuery` hook can handle the state of the request made, based on the props and configuration, if a user searches for invalid data, instead of removing the last succesfull search, we ensure that the previous serach data stays on page and ensure to not cache the bad search. If a user enters a query that was already made, instead of making the request to the api, a cached version of that request is used instead.

```
const {
    data: weatherCall,
    isFetching,
  } = useQuery<OneWeatherCall, Error>({
    queryKey: ['weather', search],
    queryFn: async (): Promise<OneWeatherCall> => {
      try {
        const weatherData = await fetchWeatherData(search);
        setErrorMessage('');
        return weatherData;
      } catch (e) {
        if (!weatherCall)
          throw new Error('API is down, please try again later');
        setErrorMessage('city not found');
        return weatherCall;
      }
    },
    refetchOnWindowFocus: false,
    retry: false,
    keepPreviousData: true,
  });
```

2. **Vercel Serverless Function**, instead of directly sending request to the Open Weather API, a new Vercel Serverless function is created which makes the request for the browser and returns the results. With this, our API key can stay secured from the browser, and let the serverless function handle structuring and organzing the data before it reaches the client.

```
export default async function fetchWeather(request, response) {
  const geoDataAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${request.query.location}&limit=1&appid=${process.env.API_KEY}`;

  const { data: geoResponse } = await axios.get(geoDataAPI);

  if (geoResponse.length === 0) {
    return response.status(404).json({
      error: 'city not found',
    });
  }

  const { lat, lon } = geoResponse[0];

  const oneWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts,hourly&appid=${process.env.API_KEY}`;

  const { data: weatherResponse } = await axios.get(oneWeather);

  ...
```

3. **TypeScript**, Typescript allows me to safely type the error/data from useQuery, ensuring that I am not attempting to grab properties from data that does not exist/is not what I expect. I am able to cleany type the API response and safely access the response data.

```
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
```

4. **Deriving from State**, Instead of extracting the forecast and current weather data from the query response and setting to another state, I decided to create a function that will create one object that contains both current and weather forecast, which is then passed to the `CurrentWeather` and `Forecast` component. This function will only run when we get new data or when the unit state is changed.

```
const weatherData: undefined | WeatherData = useMemo(() => {
    if (!weatherCall) return undefined;
    const { current, weekForecast } = convertUnits(
      weatherCall.data.current,
      weatherCall.data.weekForecast,
      unit
    );
    return {
      city: weatherCall.data.city,
      location: weatherCall.data.location,
      weather: weatherCall.data.weather,
      weekForecast,
      current,
    };
  }, [weatherCall, unit]);
```

### Other Improvements

Aside from the main improvements listed above, I also used Cypress to test the application. While running test, instead of directly contacting the API (variable response time), I instead intercept the request and return a fixture with contains some "dummy" data to insert. I wanted to these test focus on the client user-intercation rather than the API response.

In the original project I created a new style component for each element that I wanted styled. Instead of that, I created the multiple components into the one file for the main component being styled, then default exported one object which contained all these styled components.

```
---CurrentWeather.styled.tsx---
export default {
  CurrentWeather,
  Location,
  Icon,
  Temperature,
  Outlook,
  MinMaxTemp,
  WindHumidContainer,
  OtherStat,
};

---CurrentWeather.tsx---
import Styled from './CurrentWeather.styled';

 return (
    <Styled.CurrentWeather data-cy="currentWeather">
      <Styled.Location data-cy="location">
        {city}, {location}
      </Styled.Location>

      <Styled.Icon>
        <img src={weatherIcon} alt="some icon" data-cy="currentWeatherIcon" />
      </Styled.Icon>

      ...
```

## Conclustion

It was refreshing to go back to the original version, see what could be improved, and make those improvements. I am sure that there are more improvements and changes that could be made, and if you find some please feel to fork the project and let me know.

If you have any questions, please contact me at <jmendozaiidev@gmail.com>.
