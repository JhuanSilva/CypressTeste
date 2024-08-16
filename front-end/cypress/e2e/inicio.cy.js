describe('Página Principal', () => {
  it('Deve renderizar h1 com o texto correto!', () => {
    beforeEach( () => {
			cy.visit('http://localhost:3000/')
		})
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })

  it('Deve renderizar textos de vantagens', () => {
    cy.getByData('semTarifa').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
    cy.getByData('sacarGratuitamente').contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
    cy.getByData('acumularPontos').contains('Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
    cy.getByData('dispositivosProtegidos').contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
  })

  it('Deve renderizar os h3', () => {
    cy.getByData('h3ContaGratuita').contains('Conta e cartão gratuitos')
    cy.getByData('h3SacarGratuitamente').contains('Saques sem custo')
    cy.getByData('h3AcumularPontos').contains('Programa de pontos')
    cy.getByData('h3SeguroDispositivos').contains('Seguro Dispositivos')
  })
})