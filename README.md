# Weather App Built with React, TanStack Query, and CSS Modules.

<!-- Image of Bulit Desktop App Here -->

The goal of the project is to create a working web-based weather application that allows users to search for the current weather and the five-day forecast of a specific city around the world.

Three of the goals I aimed to achieve with this project include:

1. Using servless functions to act as a proxy between the application and API to ensure that no API keys are exposed on the client.
2. Thoroughly test the application to ensure that no errors are deployed in the production build.
3. Make the application accessible as possible, ensuring that those with disablities can easily search for the weather in this application.

The application was built previously using basic react with no TypeScript, after improving my skills and working on multiple projects, I decided to revisit the project and improve upon it with the new skills and techstack I have learned up to this point. You can find the original version of the project under the branch titled ["app-version-1"](https://github.com/JorgeAMendoza/react-weather-app/tree/app-version-1)

## Techstack Used

Project was bootstrapped with [Vite](https://vitejs.dev/guide/) using the React/Typescript temlate. The project is linted with [Eslint](https://eslint.org/docs/latest/user-guide/getting-started) using react,prettier,cypress, and accessibility rules, please see the `.eslintrc` file for all the rules used in this project.

The following are the main tools used to create the application:

- [React](https://reactjs.org/docs/getting-started.html), a JavaScript library for building user interfaces.
- [Tanstack Query](https://tanstack.com/query/v4/docs/react/overview), a state management tools for queries made in the application.
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress#What-you-ll-learn), front end testing tool for writing end-to-end test.

Other helping packages include [axios](https://www.npmjs.com/package/axios) which is a HTTP client for the browser and node.js, and [react-hook-form](https://react-hook-form.com/get-started) which is state-management tool for building forms.

## Issues with Original Application (1.0)

