/// <reference types="cypress" />

describe('searching for new city, successful search', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3000/api/weather?location=Dallas,+Texas', {
      statusCode: 200,
      fixture: 'dallas.json',
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
    cy.get('[data-cy="currentOutlook"]').as('currentOutlook');
    cy.get('[data-cy="currentLowTemp"]').as('currentLowTemp');
    cy.get('[data-cy="currentHighTemp"]').as('currentHighTemp');
    cy.get('[data-cy="windSpeed"]').as('windSpeed');
    cy.get('[data-cy="humidity"]').as('humidity');
    cy.get('[data-cy="currentWeatherIcon"]').as('currentWeatherIcon');
  });

  it('search for "london", current weather data is retrieved"', () => {
    cy.get('@citySearch').find('input').clear().type('London{enter}');

    cy.get('@location').should('contain.text', 'London, GB');
    cy.get('@currentTemperature').should('contain.text', '55');
    cy.get('@currentLowTemp').should('contain.text', '51');
    cy.get('@currentHighTemp').should('contain.text', '55');
    cy.get('@windSpeed').should('contain.text', '20mph');
    cy.get('@humidity').should('contain.text', '80%');
    cy.get('@currentWeatherIcon')
      .should('have.attr', 'src')
      .should('include', 'cloudy');
  });

  it('five day forecast for london is displayed, dates verified', () => {
    cy.get('@citySearch').find('input').clear().type('London{enter}');
    cy.get('@location').should('contain.text', 'London, GB');
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

  it('five day forecast for london is displayed, outlook verified', () => {
    cy.get('@citySearch').find('input').clear().type('London{enter}');
    cy.get('@location').should('contain.text', 'London, GB');
    cy.get('@forecastContainer').children().should('have.length', 5);

    cy.get('@forecastContainer')
      .children()
      .then((element) => {
        cy.wrap(element[0])
          .get('[data-cy="forecastOutlook"]')
          .should('contain.text', `overcast clouds`);
        cy.wrap(element[1])
          .get('[data-cy="forecastOutlook"]')
          .should('contain.text', `moderate rain`);
        cy.wrap(element[2])
          .get('[data-cy="forecastOutlook"]')
          .should('contain.text', `light rain`);
        cy.wrap(element[3])
          .get('[data-cy="forecastOutlook"]')
          .should('contain.text', `light rain`);
        cy.wrap(element[4])
          .get('[data-cy="forecastOutlook"]')
          .should('contain.text', `light rain`);
      });
  });

  it('five day forecast for london displayed, correct temps displayed', () => {
    cy.get('@citySearch').find('input').clear().type('London{enter}');
    cy.get('@location').should('contain.text', 'London, GB');
    cy.get('@forecastContainer').children().should('have.length', 5);

    cy.get('@forecastContainer')
      .children()
      .then((element) => {
        cy.wrap(element[0])
          .get('[data-cy="forecastMinTemp"]')
          .should('contain.text', `49`);
        cy.wrap(element[0])
          .get('[data-cy="forecastMaxTemp"]')
          .should('contain.text', `54`);

        cy.wrap(element[1])
          .get('[data-cy="forecastMinTemp"]')
          .should('contain.text', `46`);
        cy.wrap(element[1])
          .get('[data-cy="forecastMaxTemp"]')
          .should('contain.text', `53`);

        cy.wrap(element[2])
          .get('[data-cy="forecastMinTemp"]')
          .should('contain.text', `46`);
        cy.wrap(element[2])
          .get('[data-cy="forecastMaxTemp"]')
          .should('contain.text', `53`);

        cy.wrap(element[3])
          .get('[data-cy="forecastMinTemp"]')
          .should('contain.text', `43`);
        cy.wrap(element[3])
          .get('[data-cy="forecastMaxTemp"]')
          .should('contain.text', `47`);

        cy.wrap(element[4])
          .get('[data-cy="forecastMinTemp"]')
          .should('contain.text', `41`);
        cy.wrap(element[4])
          .get('[data-cy="forecastMaxTemp"]')
          .should('contain.text', `46`);
      });
  });

  it('five day forecast for london displayed, verify weather icons displayed', () => {
    cy.get('@citySearch').find('input').clear().type('London{enter}');
    cy.get('@location').should('contain.text', 'London, GB');
    cy.get('@forecastContainer').children().should('have.length', 5);

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
          .should('include', 'rain');
        cy.wrap(element[2])
          .find('img')
          .should('have.attr', 'src')
          .should('include', 'rain');
        cy.wrap(element[3])
          .find('img')
          .should('have.attr', 'src')
          .should('include', 'rain');
        cy.wrap(element[4])
          .find('img')
          .should('have.attr', 'src')
          .should('include', 'rain');
      });
  });
});
