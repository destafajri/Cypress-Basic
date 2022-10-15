/// <reference types="cypress" />

/** Example for token acesss 
 *  const token = 'sbabcoanfowi..token here.....kjajcuwhda'
*/

describe('Basic Test', ()=>{

    beforeEach(() =>{
        cy.viewport('macbook-13')
        cy.visit('https://codedamn.com/')
        
        
        /** example token set
        *  cy.then(()=>{
        *   window.localStorage.setItem('__auth__token', token)
        *   })
         */

    })

    it('Login Page redirect link is work', ()=>{
        
        //Sign in page
        cy.contains('Sign in').click()

        cy.wait(5000)
        //cypress type
        cy.get('[data-testid=username]').type('robot', {force: true})
        cy.get('[data-testid=password]').type('robot', {force: true})
        
        cy.get('[data-testid=login]').click({force: true})
        
        cy.wait(5000)
        cy.contains('Unable to authorize').should('exist')
    })

})