/// <reference types="cypress" />

describe('searching for new city, bad search', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3000/api/weather?location=Dallas,+Texas', {
      statusCode: 200,
      fixture: 'dallas.json',
    }).as('api');

    cy.intercept('http://localhost:3000/api/weather?location=hou,te,US', {
      statusCode: 404,
      fixture: 'error.json',
    }).as('api');

    cy.intercept('http://localhost:3000/api/weather?location=London', {
      statusCode: 200,
      fixture: 'london.json',
    }).as('api');
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

  it('search for "hou, te", errors out, previous/initial search data still on the page', () => {
    cy.get('@citySearch').find('input').type('hou, te{enter}');

    cy.get('@location').should('contain.text', 'Dallas, TX');
  });

  it.only('error modal appears on bad search', () => {
    cy.get('@citySearch').find('input').clear().type('hou, te{enter}');

    cy.get('[data-cy="errorMessage"]').should('exist');
    cy.get('[data-cy="errorMessage"]').should('contain.text', 'city not found');
  });

  it.only('error modal appears on bad search, valid serach removes error modal', () => {
    cy.get('@citySearch').find('input').clear().type('hou, te{enter}');

    cy.get('[data-cy="errorMessage"]').should('exist');
    cy.get('[data-cy="errorMessage"]').should('contain.text', 'city not found');

    cy.get('@citySearch').find('input').clear().type('london{enter}');
    cy.get('[data-cy="errorMessage"]').should('not.exist');
  });
});
