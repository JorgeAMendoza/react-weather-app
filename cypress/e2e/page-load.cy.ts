/// <reference types="cypress" />

describe('initial page load', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'http://localhost:3000/api/weather?location=Dallas,+Texas',
      {
        statusCode: 200,
        fixture: 'dallas.json',
      }
    ).as('api');
    cy.visit('/');
    cy.get('[data-cy="unitButton"]').as('unitButton');
    cy.get('[data-cy="citySearch"]').as('citySearch');
    cy.get('[data-cy="forecastWeather"]').as('forecastContainer');
    cy.get('[data-cy="currentWeather"]').as('currentWeather');
    cy.get('[data-cy="location"]').as('location');
    cy.get('[data-cy="currentTemperature"]').as('currentTemperature');
    cy.get('[data-cy="currentLowTemp"]').as('currentLowTemp');
    cy.get('[data-cy="currentHighTemp"]').as('currentHighTemp');
    cy.get('[data-cy="windSpeed"]').as('windSpeed');
    cy.get('[data-cy="humidity"]').as('humidity');
    cy.get('[data-cy="currentWeatherIcon"]').as('currentWeatherIcon');
  });

  it('unit button begins in metric system, Fahrenheit', () => {
    cy.get('@unitButton').should('contain.text', 'F');
  });

  it('current weather data for dallas,texas is displayed in imperial units', () => {
    cy.get('@location').should('contain.text', 'Dallas, TX');
    cy.get('@currentTemperature').should('contain.text', '40°');
    cy.get('@currentLowTemp').should('contain.text', '40°');
    cy.get('@currentHighTemp').should('contain.text', '60°');
    cy.get('@windSpeed').should('contain.text', '6mph');
    cy.get('@humidity').should('contain.text', '81%');
    cy.get('@currentWeatherIcon')
      .should('have.attr', 'src')
      .should('include', 'day-partly-cloudy');
  });

  it('current weather data for dallas text displayed in metric units', () => {
    cy.get('@unitButton').click();
    cy.get('@location').should('contain.text', 'Dallas, TX');
    cy.get('@currentTemperature').should('contain.text', '4°');
    cy.get('@currentLowTemp').should('contain.text', '4°');
    cy.get('@currentHighTemp').should('contain.text', '15°');
    cy.get('@windSpeed').should('contain.text', '3mps');
    cy.get('@humidity').should('contain.text', '81%');
    cy.get('@currentWeatherIcon')
      .should('have.attr', 'src')
      .should('include', 'day-partly-cloudy');
  });

  it('five day forcast for dallas,texas is displayed, dates verified', () => {
    cy.get('@forecastContainer').children().should('have.length', 5);

    cy.get('@forecastContainer')
      .children()
      .then((element) => {
        cy.wrap(element[0])
          .get('[data-cy="forecastDay"]')
          .should('contain.text', `January 1st`);
        cy.wrap(element[1])
          .get('[data-cy="forecastDay"]')
          .should('contain.text', `January 2nd`);
        cy.wrap(element[2])
          .get('[data-cy="forecastDay"]')
          .should('contain.text', `January 3rd`);
        cy.wrap(element[3])
          .get('[data-cy="forecastDay"]')
          .should('contain.text', `January 4th`);
        cy.wrap(element[4])
          .get('[data-cy="forecastDay"]')
          .should('contain.text', `January 5th`);
      });
  });

  it('five day forecast for dallas,texas is displayed, outlook verified', () => {
    cy.get('@forecastContainer').children().should('have.length', 5);

    cy.get('@forecastContainer')
      .children()
      .then((element) => {
        cy.wrap(element[0])
          .get('[data-cy="forecastOutlook"]')
          .should('contain.text', `broken clouds`);
        cy.wrap(element[1])
          .get('[data-cy="forecastOutlook"]')
          .should('contain.text', `scattered clouds`);
        cy.wrap(element[2])
          .get('[data-cy="forecastOutlook"]')
          .should('contain.text', `few clouds`);
        cy.wrap(element[3])
          .get('[data-cy="forecastOutlook"]')
          .should('contain.text', `clear sky`);
        cy.wrap(element[4])
          .get('[data-cy="forecastOutlook"]')
          .should('contain.text', `clear sky`);
      });
  });

  it('five day forecast for dallas,texas displayed, correct temps displayed in imperial units', () => {
    cy.get('@forecastContainer')
      .children()
      .then((element) => {
        cy.wrap(element[0])
          .get('[data-cy="forecastMinTemp"]')
          .should('contain.text', `49°`);
        cy.wrap(element[0])
          .get('[data-cy="forecastMaxTemp"]')
          .should('contain.text', `62°`);

        cy.wrap(element[1])
          .get('[data-cy="forecastMinTemp"]')
          .should('contain.text', `51°`);
        cy.wrap(element[1])
          .get('[data-cy="forecastMaxTemp"]')
          .should('contain.text', `70°`);

        cy.wrap(element[2])
          .get('[data-cy="forecastMinTemp"]')
          .should('contain.text', `59°`);
        cy.wrap(element[2])
          .get('[data-cy="forecastMaxTemp"]')
          .should('contain.text', `67°`);

        cy.wrap(element[3])
          .get('[data-cy="forecastMinTemp"]')
          .should('contain.text', `50°`);
        cy.wrap(element[3])
          .get('[data-cy="forecastMaxTemp"]')
          .should('contain.text', `62°`);

        cy.wrap(element[4])
          .get('[data-cy="forecastMinTemp"]')
          .should('contain.text', `50°`);
        cy.wrap(element[4])
          .get('[data-cy="forecastMaxTemp"]')
          .should('contain.text', `66°`);
      });
  });

  it('five day forecast for dallas,texas displayed, correct temps displayed in metric units', () => {
    cy.get('@unitButton').click();
    cy.get('@forecastContainer')
      .children()
      .then((element) => {
        cy.wrap(element[0])
          .get('[data-cy="forecastMinTemp"]')
          .should('contain.text', `9°`);
        cy.wrap(element[0])
          .get('[data-cy="forecastMaxTemp"]')
          .should('contain.text', `16°`);

        cy.wrap(element[1])
          .get('[data-cy="forecastMinTemp"]')
          .should('contain.text', `10°`);
        cy.wrap(element[1])
          .get('[data-cy="forecastMaxTemp"]')
          .should('contain.text', `21°`);

        cy.wrap(element[2])
          .get('[data-cy="forecastMinTemp"]')
          .should('contain.text', `15°`);
        cy.wrap(element[2])
          .get('[data-cy="forecastMaxTemp"]')
          .should('contain.text', `19°`);

        cy.wrap(element[3])
          .get('[data-cy="forecastMinTemp"]')
          .should('contain.text', `10°`);
        cy.wrap(element[3])
          .get('[data-cy="forecastMaxTemp"]')
          .should('contain.text', `16°`);

        cy.wrap(element[4])
          .get('[data-cy="forecastMinTemp"]')
          .should('contain.text', `10°`);
        cy.wrap(element[4])
          .get('[data-cy="forecastMaxTemp"]')
          .should('contain.text', `19°`);
      });
  });

  it('five day forecast for dallas, texas displayed, correct icons displayed', () => {
    cy.get('@forecastContainer')
      .children()
      .then((element) => {
        cy.wrap(element[0])
          .find('img')
          .should('have.attr', 'src')
          .should('include', 'cloudy');
        cy.wrap(element[1])
          .find('img')
          .should('have.attr', 'src')
          .should('include', 'cloudy');
        cy.wrap(element[2])
          .find('img')
          .should('have.attr', 'src')
          .should('include', 'day-partly-cloudy');
        cy.wrap(element[3])
          .find('img')
          .should('have.attr', 'src')
          .should('include', 'day-clear');
        cy.wrap(element[4])
          .find('img')
          .should('have.attr', 'src')
          .should('include', 'day-clear');
      });
  });
});
