import { mount } from '@cypress/react'
import Addresses from '../components/Addresses'

it('renders a loading message if loading', () => {
  mount(<Addresses addresses={[]} loading={true} />)
  cy.get('p').contains('Loading...')
})

it('renders an error message if error', () => {
  mount(<Addresses addresses={[]} error={'Something went wrong'} />)
  cy.get('p').contains('Error: Something went wrong')
})

it('renders a no results found message if no results found but valid search', () => {
  mount(<Addresses addresses={[]} search={true} />)
  cy.get('p').contains('No addresses found.')
})

it('renders results', () => {
  const address: Address = {
    street: 'Sentrum Postboks 1500',
    postNumber: 1,
    city: 'OSLO'
  }
  mount(<Addresses addresses={[address]} />)
  cy.contains('Street: Sentrum Postboks 1500')
  cy.contains('Post Nr: 1')
  cy.contains('City: OSLO')
})
