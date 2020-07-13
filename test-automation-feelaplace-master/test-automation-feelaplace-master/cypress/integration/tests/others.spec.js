

describe('Reviews',()=>{


    before(()=>{
        cy.server()
        cy.route('POST','/api/event/slug').as('slug')
        cy.route('POST','/api/deliveryoptions').as('deliveryOptions')
        cy.route('GET','/api/ticketcategories/97E3AAEA-3F50-42EB-8F72-CC07F988E522').as('ticketCat')

    })

    it('should be able to add reviews',()=>{        

        cy.visit('/place/see-and-do/taj-mahal/monuments',{timeout:100000})
        cy.wait('@slug')

        cy.get('input[name="newReview"]').should('exist')
    //     cy.get('.col-sm-8.review-sec-head').children().find('span[data-index="3"]')
    //    .click()
    //    cy.get('input[placeholder="Please login to add public comment..."]').should('exist')

  })

})


describe.skip('Training',()=>{
    before(()=>{
        cy.server()
        cy.route('POST','/api/session/login').as('login')
        
    })

    it('should login',()=>{
        cy.visit('/login')
        cy.login("pratibha.dhage@zoonga.com","Myname1997@@")
        cy.wait('@login').then((res)=>{
            cy.log(res.response.body.success)
        })
        cy.url().should('eq',Cypress.config().baseUrl)
    })
})
