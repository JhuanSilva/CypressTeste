describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {

    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
    cy.ContainText('titulo-principal', 'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
})