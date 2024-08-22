describe('Página Principal', () => {
  it('Deve renderizar h1 com o texto correto!', () => {
    beforeEach( () => {
			cy.visit('http://localhost:3000/')
		})
    it('Deve renderizar o titulo principal com o texto correto', () => {
      cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
      })
    })

  it('Deve carregar os h2', () => {
    cy.getByData('h2').contains('Vantagens do nosso banco:')
  })

})