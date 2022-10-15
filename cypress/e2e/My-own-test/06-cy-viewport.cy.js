/// <reference types="cypress" />

describe('Basic Test', ()=>{
    it('Tets view on macbook', ()=>{

        cy.viewport('macbook-13')

        cy.visit('https://codedamn.com/')
        cy.contains('Programming').should('have.text', 'Learn Programming')

    })

    it('Tets view on specific view', ()=>{

        cy.viewport(1280, 720)
        cy.visit('https://codedamn.com/')
        cy.contains('Programming').should('have.text', 'Learn Programming')
        
    })
})