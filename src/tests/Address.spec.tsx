import { mount } from '@cypress/react'
import Address from '../components/Address'

it('renders street, post number and city', () => {
  const address: Address = {
    street: 'Sentrum Postboks 1500',
    postNumber: 1,
    city: 'OSLO'
  }
  mount(<Address {...address} />)
  cy.contains('Street: Sentrum Postboks 1500')
  cy.contains('Post Nr: 1')
  cy.contains('City: OSLO')
})
