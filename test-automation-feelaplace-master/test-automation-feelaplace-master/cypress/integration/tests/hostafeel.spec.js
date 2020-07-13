describe.skip('host a feel page tests',()=>{

    before(()=>{
        cy.visit('/login')
        cy.server()
        cy.route('POST','/api/session/login').as('login')
        cy.login(Cypress.env('username'),Cypress.env('password'))
    })

    it('should login to admin page successfully',()=>{

        cy.wait('@login')
        cy.get('span:contains("Host a feel")').parent()
        // .should('have.attr','href')
        // .and('contain','https://host.feelaplace.com')
        .then(($a)=>{
            // extract the fully qualified href property
            const href = $a.prop('href')
    
            // and now visit the href directly
            cy.request(href)
        })
        // cy.url().should('eq',Cypress.env('hostUrl'))
    })

    it.skip('should have all menu items',()=>{
        cy.loginAdmin()
        cy.get('a[href="#feel185"]').click()
    })
})

describe.skip('Go to Host a feel site',()=>{

    it('should open host a feel site',()=>{

        cy.visit('https://host.feelaplace.com')

    // cy.get('span:contains("Host a feel")').parent()
    // // .should('have.attr','href')
    // // .and('contain','https://host.feelaplace.com')
    // .then(($a)=>{
    //     // extract the fully qualified href property
    //     const href = $a.prop('href')

    //     // and now visit the href directly
    //     cy.visit(href)
    // })
})

})

