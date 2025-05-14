describe('Login Page Test', () => {
  it('Should log in successfully with valid credentials', () => {
    
    cy.visit('http://localhost:3000/login');
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[type="password"]').type('password123');
    cy.get('button[type="submit"]').click();
  });
});
