/// <reference types="cypress" />

describe('Basic Test', ()=>{
    it('We have correct page title', ()=>{
        cy.visit('https://codedamn.com/')

        cy.contains('Programming').should('have.text', 'Learn Programming')

    })
})