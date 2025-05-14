describe('Login Page Test', () => {
  it('Should log in successfully with valid credentials', () => {
    // 1. Visit the login page
    cy.visit('http://localhost:3000/login');

    // 2. Fill in the form
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[type="password"]').type('password123');

    // 3. Click the Login button
    cy.get('button[type="submit"]').click();
  });
});
