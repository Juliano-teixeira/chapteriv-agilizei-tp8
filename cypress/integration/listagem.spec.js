/// <reference types="cypress"/>

describe('Listagem', () => {
    it('Quando não houver cadastros, então a listagem deve estar vazia', () => {
        cy.fixture("listagem-vazia").then(data => {
            window.localStorage.setItem('data', JSON.stringify(data))
        })
        cy.viewport(1440, 900)
        cy.visit('https://form-agilizei.netlify.app/listagem.html');
        cy.get('#users tr').should('have.length', 0)

    });

    it('Quando houver um ou mais cadastros, então a listagem deve exibir cada registro', () => {

        cy.fixture("listagem-com-itens").then(data => {
            window.localStorage.setItem('data', JSON.stringify(data))
        })
        cy.viewport(1440, 900)
        cy.visit('https://form-agilizei.netlify.app/listagem.html');
        cy.get('#users tr').should('have.length', 3)

        cy.fixture("listagem-com-itens").then(data => {
            let space = ' '
            for (let index = 0; index < data.length; index++) {
                let payloadEmail = data[index].emailAdress
                let email = space + payloadEmail + space
                cy.get('#users tr')
                    .eq(index)
                    .find('td').first()
                    .should('have.text', email)

                let payloadNome = data[index].firstName
                let nome = space + payloadNome + space
                cy.get('#users tr')
                    .eq(index)
                    .find('td').eq(1)
                    .should('have.text', nome)
            }
        })
    });
});