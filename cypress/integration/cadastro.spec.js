/// <reference types="cypress"/>

var Chance = require('chance');
var chance = new Chance();

describe('Cadastro', () => {
    it('Ao informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.viewport(1440, 900)
        cy.visit('https://form-agilizei.netlify.app');

        cy.get('input[name=firstName]')
            .type(chance.first())
        cy.get('input[name=lastName]')
            .type(chance.last())
        cy.get('textarea[name=adress]')
            .type(chance.address())
        cy.get('input[name=emailAdress]')
            .type(chance.email())
        cy.get('input[type=radio][value=m]')
            .check()
        cy.get('input[type=checkbox]')
            .check('Dormir')
        cy.get('input[type=checkbox]')
            .check('Netflix')

        cy.get('select#countries')
            .select('Japão', { force: true })
        cy.get('select#years')
            .select('1993', { force: true })
        cy.get('select#months')
            .select('Dezembro', { force: true })
        cy.get('select#days')
            .select('28', { force: true })

        cy.get('input#firstpassword')
            .type('aw4F8Z%Lj7hg')
        cy.get('input#secondpassword')
            .type('aw4F8Z%Lj7hg')
        cy.get('button#submitbtn')
            .click()

        cy.url().should('eq', 'https://form-agilizei.netlify.app/listagem.html')
        cy.get('#section h2').should('have.text', 'Listagem')
    });
});