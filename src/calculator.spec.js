describe('Calculator App', () => {

    beforeEach(() => {
        // Start the application before each test
        cy.visit('/');
    });

    it('should display 0 as the initial value', () => {
        // Check that the initial display value is 0
        cy.get('textarea').should('have.value', '0');
    });

    it('should allow number input', () => {
        // Simulate number button clicks
        cy.get('button').contains('1').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('3').click();
        cy.get('textarea').should('have.value', '123');
    });

    it('should perform addition correctly', () => {
        // Perform 7 + 3 and check result
        cy.get('button').contains('7').click();
        cy.get('button').contains('+').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('=').click();
        cy.get('textarea').should('have.value', '10');
    });

    it('should perform subtraction correctly', () => {
        // Perform 9 - 5 and check result
        cy.get('button').contains('9').click();
        cy.get('button').contains('-').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('=').click();
        cy.get('textarea').should('have.value', '4');
    });

    it('should perform multiplication correctly', () => {
        // Perform 6 * 2 and check result
        cy.get('button').contains('6').click();
        cy.get('button').contains('*').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('=').click();
        cy.get('textarea').should('have.value', '12');
    });

    it('should perform division correctly', () => {
        // Perform 8 / 4 and check result
        cy.get('button').contains('8').click();
        cy.get('button').contains('/').click();
        cy.get('button').contains('4').click();
        cy.get('button').contains('=').click();
        cy.get('textarea').should('have.value', '2');
    });

    it('should clear the display on C button click', () => {
        // Check if C button clears the display
        cy.get('button').contains('5').click();
        cy.get('button').contains('C').click();
        cy.get('textarea').should('have.value', '0');
    });

    it('should calculate percentage correctly', () => {
        // Perform 50% operation
        cy.get('button').contains('5').click();
        cy.get('button').contains('0').click();
        cy.get('button').contains('%').click();
        cy.get('textarea').should('have.value', '0.5');
    });

    it('should handle multiple operations correctly', () => {
        // Perform 5 + 3 * 2 and check result
        cy.get('button').contains('5').click();
        cy.get('button').contains('+').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('=').click();
        cy.get('button').contains('*').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('=').click();
        cy.get('textarea').should('have.value', '16'); // 8 * 2 = 16
    });

});
