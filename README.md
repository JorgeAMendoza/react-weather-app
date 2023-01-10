# Weather App Built with React, TanStack Query, and Styled Components.

<!-- Image of Bulit Desktop App Here -->

The goal of the project is to create a working web-based weather application that allows users to search for the current weather and the five-day forecast of a specific city around the world.

Three of the goals I aimed to achieve with this project include:

1. Using servless functions to act as a proxy between the application and API to ensure that no API keys are exposed on the client.
2. Thoroughly test the application to ensure that no errors are deployed in the production build.
3. Make the application accessible as possible, ensuring that those with disablities can easily search for the weather in this application.

The application was built previously using basic react with no TypeScript, after improving my skills and working on multiple projects, I decided to revisit the project and improve upon it with the new skills and techstack I have learned up to this point. You can find the original version of the project under the branch titled ["app-version-1"](https://github.com/JorgeAMendoza/react-weather-app/tree/app-version-1)

API used to retrieve weather provided by [OpenWeather](https://openweathermap.org/api), both versions of the application use the 2.0 version of the One Call API. 

Three improvements I wanted to focus on was: 
1. Fetching and handling data more efficiently with state-management tools
2. Component structure and project organization, I wanted to make it clear to people reading the code how the component worked and why it was structured like so.
3. Better use of the styled-components library.

## Techstack Used

Project was bootstrapped with [Vite](https://vitejs.dev/guide/) using the React/Typescript template. The project is linted with [Eslint](https://eslint.org/docs/latest/user-guide/getting-started) using react,prettier,cypress, and accessibility rules. Please see the `.eslintrc` file for all the rules used in this project.

The following are the main tools used to create the application:

- [React](https://reactjs.org/docs/getting-started.html), a JavaScript library for building user interfaces.
- [Tanstack Query](https://tanstack.com/query/v4/docs/react/overview), a state management tools for queries made in the application.
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress#What-you-ll-learn), front end testing tool for writing end-to-end test.

Other helping packages include [axios](https://www.npmjs.com/package/axios) which is a HTTP client for the browser and node.js, and [react-hook-form](https://react-hook-form.com/get-started) which is state-management tool for building forms.

## Running the application
Once the application has been cloned to your local machine, run ``npm i`` to install all dependencies.

The [Vercel CLI](https://vercel.com/docs/cli) is required to run the application locally. 

Instead of using ``npm run dev`` to launch the application in vite, the application needs to also be running the vercel serverless function locally, you will need to run ``vercel dev`` which runs vite and the the API located at ``api/weather``.  Some notes about this process
1. On windows this must be run on the command line and not Git Bash.
2. A API key is needed in the .env file named `API_KEY`. A key for the  **One Call Weather 2.0** is also required as well, which is sadly no longer avaliable for free. 
3. A vercel account may be required. 

Once launched, the application will be running on ``localhost:3000``, with the API runing on the same host.

## Improving upon the application

The project originally started when I was taking an online course provided by [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-weather-app), where I was tasked to create a weather application using an API. At the time I was just getting into React, so I decided it would be a great opportunity to build a functional React application for the first time

The original version of the application was bootstrapped with [create-react-app](https://create-react-app.dev/) with styled-components used to style the application as well. This was also my first time using styled components to style a project like this. 

### Fetching Weather Data
I structured the application in a way so that one API call would be made for the application, and the results would be passed down to the various components that need to display data. A attempted to create a presentional/container component structure. So ``App.js`` would be in charge of holidng multiple instances of state and calling a function that retrives weather data and set the values of multiple states. This data would then be passed down to components to be displayed.

Some issues I have with approach include: 
1. **Too many instances of state**, there should be a way to cutdown on how many times I use ``useState`` by deriving data from one piece of data.
2. **Weather data fetch lives in component**, on every re-render we are creating the function again, the function should be able to live outside the component, taking in a search query and just returning the data needed.
3. **Error handling**, there is no direct error handling, we do catch an error but all we do is set a message on the screen and thats it. Errors should include more information so they can be handled more appropriately. 
4. **Exposed API**, it was not until recently when I was reviewing the application that I noticed that the API key was being exposed upon every request. This should be surprising because the API key is put into the request itself. 

## Improvement
After delving deeper in React in the later months and learning various tools, I found multiple ways to improve the application. 

1. **Query state management**, using tanstack query, the ``useQuery`` can handle multiple instances of state based on the success/failure of a query. For example, upon success, the data be grabbed from the ``useQuery``. Upon failure, we can get all the information needed about the error that occured, and the data be undefined since there was nothing retrieved.

```
const { data, error } = useQuery<OneWeatherCall, Error>({
    queryKey: ['weather', search],
    queryFn: (): Promise<OneWeatherCall> => fetchWeatherData(search),
    refetchOnWindowFocus: false,
    retry: false,
    keepPreviousData: true,
    onError() {
      console.log('error happended');
      queryClient.setQueriesData(['weather', search], data);
    },
  });
```
2. **TypeScript**, Typescript allows me to safely type the error/data from useQuery, ensuring that I am not attempting to grab properties from data that does not exist/is not what I expect. I am able to cleany type the API response and safely access the response data. 
```
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
```
3. **Component Structure**, number of files have been cutdown by moving the simple styled components into the same file and exporting them. 
<!-- code block of styled components example.  -->






