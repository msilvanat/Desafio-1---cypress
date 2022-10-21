/// <reference types="cypress" />
describe("Desafío 1 Cypress", () => {
  const numero = Math.floor(Math.random() * 1000)
  let tarea = 'Hacer examen de inglés';
  it('Desafío 1', () => {
    cy.visit('https://pushing-front.vercel.app/');
    cy.get('[id="user"]').type(`silvana${numero}`);
    cy.get('[id="user"]').clear();
    cy.get('[id="user"]').type(`silvana${numero}`);
    cy.get('#pass').type('12355edh!');
    cy.get('fieldset').find('input[value="Female"]').check({force: true });
    cy.get('#day').select('15');
    cy.get('#month').select('November');
    cy.get('#year').select(12);
    cy.get('button#submitForm').click();
    cy.wait(5000);
    cy.get('a[id="todolistlink"]').click();
    cy.get('#task').type('Hacer examen de inglés');
    cy.get('#sendTask').click();
    // cy.get('[class="chakra-text css-8atqhb"]').click();
    cy.contains(tarea);
    cy.wait(5000);
    cy.get('#logout').click();
  });
});