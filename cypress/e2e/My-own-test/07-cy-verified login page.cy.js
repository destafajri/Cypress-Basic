/// <reference types="cypress" />

describe('Basic Test', ()=>{
    it('Tets view on macbook', ()=>{

        cy.viewport('macbook-13')
        cy.visit('https://codedamn.com/')
        cy.contains('Programming').should('have.text', 'Learn Programming')
    })

    it('Login button click test', ()=>{
        cy.viewport('macbook-13')
        cy.visit('https://codedamn.com/')
        cy.contains('Sign in').click()
        cy.contains('Sign in to codedamn').should('exist')
        cy.contains('Sign in with Google').should('exist')
        cy.contains('Sign in with GitHub').should('exist')
        cy.contains('Create one').should('exist')
        cy.contains('Forgot your password?').should('exist')
    })
    
})