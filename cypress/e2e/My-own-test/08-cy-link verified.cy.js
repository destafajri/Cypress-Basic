/// <reference types="cypress" />

describe('Basic Test', ()=>{
    it('Login Page redirect link is work', ()=>{
        cy.viewport('macbook-13')
        cy.visit('https://codedamn.com/')
        
        //Sign in page
        cy.contains('Sign in').click()
        
        //register page
        cy.wait(3000)
        cy.contains('Create one').click({force: true})
        cy.url().should('eq', 'https://codedamn.com/register')
        
        
        cy.url().then(value => {
            cy.log('The current URL is ', value)
        })

        //go back to sign in page
        cy.go('back')

        //pasword reset
        cy.contains('Forgot your password?').click({force: true})
        cy.url().should('include', '/password-reset')
    })

})