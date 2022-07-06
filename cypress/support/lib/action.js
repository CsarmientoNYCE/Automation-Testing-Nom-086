

class Actions {
    
    
    //function to type text in element
    static type(locator, text, i = 0){
        cy.get(locator).eq(i).scrollIntoView().clear({ force: true }).type(text);
        cy.wait(3000);
    }

    //function to click

    static click(locator, i = 0){
        cy.get(locator, {
            timeout: 10000,
        })
            .eq(i)
            .scrollIntoView()
            .should("be.visible", {
                timeout: 6000,
            })
            .should("not.be.disabled", {
                timeout: 10000,
            })
            .click({ force: true });

            cy.wait(5000);
    }

    static noEmpty(locator,i=0){
        cy.get(locator,{
            timeout: 10000,
        })
        .eq(i)
        .invoke('val')
        .should('not.be.empty');

    };
   
    static containVal(locator,contain,i=0){
        cy.get(locator,{
            timeout: 10000,
        })
        .eq(i)
        .invoke('val')
        .should('contain',contain);
    };
    //function to select 
    static select(locator,select,val,i=0){
        cy.get(locator,{
            timeout: 10000,
        })
        .eq(i)
        .select(select,{force:true})
        .invoke('val')
        .should('deep.equal',val)
        cy.wait(4000);
    }
    //function to check
    static check(locator,i=0){
        cy.get(locator,{
            timeout:10000,
        })
        .eq(i)
        .scrollIntoView()
        .should("be.visible", {
            timeout: 6000,
        })
        .should("not.be.disabled", {
            timeout: 10000,
        })
        .check({force:true})
        .should('be.checked');
        cy.wait(3000);
    }

}

export default Actions;


