/// <reference types="cypress" />

import { forEach } from 'cypress/types/lodash';

describe('initial page load', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="unitButton"]').as('unitButton');
    cy.get('[data-cy="searchButton"]').as('searchButton');
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

  cy.intercept('http://localhost:3000/api/weather?location=Dallas,+Texas', {
    fixture: 'dallas.json',
  }).as('api');

  // cy.intercept('http://localhost:3000/api/weather?location=London', {
  //   fixture: 'london.json',
  // }).as('api');

  // cy.intercept('http://localhost:3000/api/weather?location=hou,te,US', {
  //   fixture: 'error.json',
  // }).as('api');

  it('unit button begins in metric system, Fahrenheit', () => {
    cy.get('@unitButton').should('contain.text', 'F');
  });

  it('current weather data for dallas,texas is displayed', () => {
    cy.get('@location').should('contain.text', 'Dallas, TX');
    cy.get('@currentTemperature').should('contain.text', '40');
    cy.get('@currentLowTemp').should('contain.text', '40');
    cy.get('@currentHighTemp').should('contain.text', '60');
    cy.get('@windSpeed').should('contain.text', '6mph');
    cy.get('@humidity').should('contain.text', '81%');
    cy.get('@currentWeatherIcon')
      .should('have.attr', 'src')
      .should('include', 'night-clear');
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
});
