/// <reference types="cypress" />

describe('Basic Test', ()=>{

    beforeEach(() =>{
        cy.viewport('macbook-13')
        cy.visit('https://codedamn.com/')
        
    })

    it('it should be past', ()=>{    
        // cy.visit('https://codedamn.com/playground/html')

        cy.log('Checking for sidebar')
        // cy.get('[data-testid=xterm-controls]').should('exist')

        cy.get('div')
        cy.debug()
    })

})