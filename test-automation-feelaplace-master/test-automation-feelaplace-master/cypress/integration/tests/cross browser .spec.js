

///<refrerence type= "cypress"/>

describe('window',() => {
    beforeEach(()=>{
        cy.visit("/",{timeout:100000})

    })
    it('open in mac 15',()=>{
       cy.viewport('macbook-15')
       cy.screenshot()
       cy.wait(500)
    })

    it('open in mac 13',()=>{
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(500)
     })

     it('open ipad 2',()=>{
        cy.viewport('ipad-2')
        cy.screenshot()
        cy.wait(500)
     })

     
     it('open iphone 3',()=>{
        cy.viewport('iphone-3')
        cy.screenshot()
        cy.wait(500)
     })
 
})