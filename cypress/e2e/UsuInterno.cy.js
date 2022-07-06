describe('Usuario Interno', () => {
    it('Inicio de Sesion', () => {
        cy.visit('http://148.244.173.87/paginas/interno.aspx');
        Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            })
            
              
              
        cy.contains('Usuario interno').click().then(function(){
            it.only('', () =>
        {
            cy.on('window:alert',alertText => {
                expect(alertText).to.eql('Iniciar sesión')
            });
        });
        });
        
        
        });
   });