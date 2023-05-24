describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://practice.expandtesting.com/notes/api/api-docs/#/Notes/post_notes');
    cy.get('.try-out > .btn').click();
    cy.get('[data-param-name="title"] > .parameters-col_description > input').type('test-1');
    cy.get('[data-param-name="description"] > .parameters-col_description > input').type('test1');
    cy.get('.parameters-col_description > select').type('Home');
    cy.get('.execute-wrapper > .btn').click();
});
});