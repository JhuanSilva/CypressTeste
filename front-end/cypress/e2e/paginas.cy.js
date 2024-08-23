describe('Testando multiplas paginas', () => {
  it('Deve conseguir acessar a páginas de cartões', () => {
    cy.visit('/')
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()
    cy.getByData('app-home').find('a').eq(1).click()
    cy.getByData('titulo-cartoes').should('exist').and('have-text', 'Meus cartões')
    cy.getByData('app-home').find('a').eq(1).click()
    cy.getByData('titulo-investimentos').should('exist').and('have-text', 'Investimentos')
  })

})