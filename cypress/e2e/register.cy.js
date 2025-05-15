describe('Registration test',()=>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000/register');
    });

    it('Input fields work properly',()=>{
        
        cy.get('[data-testid="username"]').type('user name');
        cy.get('[data-testid="username"]').should('have.value','user name');
        cy.get('[data-testid="email"]').type('test@example.com');
        cy.get('[data-testid="email"]').should('have.value','test@example.com');
        cy.get('[data-testid="password"]').type('Password123');
        cy.get('[data-testid="password"]').should('have.value','Password123')
    });

    it('Empty Fileds Alerts', () =>{
        cy.get('button[type="submit"]').click();
        cy.on('window.alert',(txt) => {
            expect(txt).to.contains('Please fill in all fields');
        });
    });

    it('Invalid email input', () =>{
        cy.get('[data-testid="username"]').type('UserName');
        cy.get('[data-testid="email"]').type('test');
        cy.get('[data-testid="password"]').type('Password@123');
        cy.get('button[type="submit"]').click();

        cy.on('window:alert',(txt) =>{
            expect(txt).to.contains('Please enter a valid email address.');
        });
    });

    it('Invalid password input', () =>{
        cy.get('[data-testid="username"]').type('UserName');
        cy.get('[data-testid="email"]').type('test@exmple.com');
        cy.get('[data-testid="password"]').type('passwordabcdefgh');
        cy.get('button[type="submit"]').click();

        cy.on('window:alert',(txt) =>{
            expect(txt).to.contains('Password must be at least 12 characters long, contain at least one uppercase letter and one special character (@, #, $, &).');
        });
        
    })
});