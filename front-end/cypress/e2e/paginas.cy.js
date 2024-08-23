describe('Testando multiplas paginas', () => {
  it('Deve conseguir acessar a páginas de cartões', () => {
    cy.visit('/')
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()

    cy.location('pathname').should('eq', '/home')

    cy.getByData('app-home').find('a').eq(1).click()
    cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões')

    cy.location('pathname').should('eq', '/home/cartoes')
    
  })

  it('Deve conseguir acessar a páginas de investimentos', () => {
    cy.visit('/')
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()

    cy.getByData('app-home').find('a').eq(3).click()
    cy.getByData('app-home').find('h2').contains('Investimentos')

    cy.location('pathname').should('eq', '/home/investimentos')
    
  })

})