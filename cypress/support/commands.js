// cypress/support/commands.js
import { faker } from '@faker-js/faker';
import 'cypress-xpath';

Cypress.Commands.add('generateFakeData', () => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    businessName: faker.company.name(),
    email: faker.internet.email(),
  };
});
