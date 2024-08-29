describe('Testando dispositivos móveis', () => {
  context('Resolução de 720p', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
    })
  })

  context('Resolução de macbook-11', () => {
    beforeEach(() => {
      cy.viewport(1366, 756)
      cy.viewport('macbook-11')
    })
  })

  context('Resolução de iphone-5', () => {
    beforeEach(() => {
      cy.viewport('iphone-5')
    })
  })

  context('Resolução de ipad-mini', () => {
    beforeEach(() => {
      cy.viewport(2266, 1488)
      cy.viewport('ipad-mini')
    })
  })

  it('Deve existir um menu burguer', () => {
    cy.visit('/')

    cy.viewport('ipad-mini', 'landscape')
    
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()
    
    cy.location('pathname').should('eq','/home')

    cy.getByData('menu-burguer').click()
    cy.getByData('menu-lateral').find('a').eq(3).click()			

    cy.location('pathname').should('eq','/home/investimentos')			
  })
})