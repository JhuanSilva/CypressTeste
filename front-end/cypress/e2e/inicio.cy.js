describe('Página Principal', () => {
  it('Deve renderizar h1 com o texto correto!', () => {
    beforeEach( () => {
			cy.visit('http://localhost:3000/')
		})
    cy.get('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })

  it('Deve renderizar textos de vantagens', () => {
    cy.get('semTarifa').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
    cy.get('sacarGratuitamente').contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
    cy.get('acumularPontos').contains('Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
    cy.get('dispositivosProtegidos').contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
  })
})