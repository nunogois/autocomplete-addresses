import { mount } from '@cypress/react'
import App from '../App'

it('renders title with GitHub link', () => {
  mount(<App />)
  cy.get('a').contains('autocomplete-addresses')
})

it('renders search field', () => {
  mount(<App />)
  cy.get('input').should('have.attr', 'placeholder', 'Search addresses...')
})

it('renders search results (assuming local API connection)', () => {
  mount(<App />)
  cy.get('input').type('oslo')
  cy.get('span', { timeout: 2000 }).should('be.visible')
  cy.contains('Oslo').should('be.visible')
})

it("renders an error message in case we don't get any results (assuming local API connection)", () => {
  mount(<App />)
  cy.get('input').type('abcdefg')
  cy.get('p', { timeout: 2000 }).should('be.visible')
  cy.contains('No addresses found for: abcdefg.').should('be.visible')
})
