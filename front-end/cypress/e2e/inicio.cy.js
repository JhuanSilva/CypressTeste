describe('Página Principal', () => {
  it('Deve renderizar h1 com o texto correto!', () => {
    beforeEach( () => {
			cy.visit('http://localhost:3000/')
		})
    cy.get('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
})