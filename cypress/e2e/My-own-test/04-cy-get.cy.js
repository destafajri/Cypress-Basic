/// <reference types="cypress" />

describe('Basic Test', ()=>{
    it('We have correct page title', ()=>{
        cy.visit('https://codedamn.com/')

        // mocha library
        cy.contains('Learn Programming').should('exist')

        //cy get div/id:root
        cy.get('div#root').should('exist')
        cy.get('div[id=root]').should('exist')
        cy.get('div#nexttttttt').should('not.exist')
        
        // xpath => //button[@type='submit']
        cy.get('[data-testid=submit-btn]').should('exist')

        //click action
        cy.get('[data-testid=username]').click()
    })
})