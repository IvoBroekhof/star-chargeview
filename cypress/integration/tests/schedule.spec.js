

describe('Schedule page tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/schedule')
        cy.waitForReact()
        // Fix the date and time to 8 November 2021, 9:00
        var now = new Date(2021, 10, 8, 9, 0)
        var clock = cy.clock(now)

        cy.viewport(480, 1600)
    })

    it('shows graph and price/emission when preferences are filled in', () => {
        // Skip setting time
        // Set energy to 50 kWh
        cy.react("EnergySelector").react("StyledSlider").type(50000)

        // Set mode to Solar
        cy.get('.modeSelector .solarCol button')
            .click()

        // Check that the price changed, so is not €0
        cy.get('nav.navbarSchedule')
            .contains('Price')
            .invoke('text')
            .should('not.eq', 'Price: €0')

        // Check that the CO2 emissions changed, so not equal to 0g
        cy.get('nav.navbarSchedule')
            .contains('CO2')
            .invoke('text')
            .should('not.eq', 'CO2: 0g')

        // Check that the graph has charging data in it
        // cy.react("Graph").react("ComposedChart").invoke('attr', )
    })
    //Test cases
    //This should fail
    it('Balanced Mode Selected', () => {
        cy.get('.modeSelector .balancedCol button')
            .click()
    })
    // Should fail
    it('Balanced Button changes text when clicked', () => {
        cy.get('.balancedCol button').click().should('have.text', 'New Text')
    })
    //Should fail
    it('Balanced button\'s icon changes icon when clicked', () => {
        cy.get('.balancedCol button').click()
        cy.get('.modeIcon').should('have.class', 'newIconClass')
    })
    it('Balanced is clickable', () => {
        cy.get('.balancedCol button').should('be.enabled').click()
    })
    it('Balanced button has the correct border radius', () => {
        cy.get('.balancedCol button').should('have.css', 'border-top-left-radius', '0')
        cy.get('.balancedCol button').should('have.css', 'border-bottom-left-radius', '0')
    })
    it('Balanced button has the correct class name', () => {
        cy.get('.balancedCol button').should('have.class', 'balanced')
    })
    it('Balanced button sets the correct mode when clicked', () => {
        cy.spy(window, 'setMode')
        cy.get('.balancedCol button').click()
        expect(window.mode === ChargingMode.Balanced)
    })
    it('Balanced button has the correct text size', () => {
        cy.get('.balancedCol button .modeText').should('have.css', 'font-size', '20px')
    })
    it('Balanced button does not change the mode when clicked again', () => {
        const initialMode = ChargingMode.Balanced
        cy.spy(window, 'setMode')
        cy.get('.balancedCol button').click()
        expect(window.mode === ChargingMode.Balanced)
        cy.get('.balancedCol button').click()
        expect(window.mode === initialMode)
    })
    it('Balanced button\'s text is not bold when clicked', () => {
        cy.get('.balancedCol button').click()
        cy.get('.balancedCol button .modeText').should('have.css', 'font-weight', 'bold')

    })


})
