/// <reference types="cypress" />

describe('Basic Test', ()=>{
    it('We have correct page title', ()=>{
        cy.visit('https://codedamn.com/')

        // mocha library
        cy.contains('Learn Programming').should('exist')
    })
})