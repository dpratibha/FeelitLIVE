describe('Hoho',()=>{

    const hohoPlaces = require('../../fixtures/hoho.json')
    let placeID = Math.floor(Math.random()*hohoPlaces.length)


    beforeEach(()=>{
        cy.server()
        cy.route('POST','/api/dynamicsections').as('dynamicsections')
        cy.route('POST','/api/event/slug').as('slug')
        // cy.route('POST','/api/loginuser/transaction').as('loginuser')


    })

    it.skip('should open HOHO place and have details',()=>{
        cy.visit('/'+hohoPlaces[placeID].URL)
        cy.verifyPlacePage()
    })

    it('should open HOHO landing page and ensure page loads with data and right link to show all',()=>{
        cy.visit('/c/see-and-do/hop-on%20hop-offs?category=29&subcategory=85')
        if(Cypress.config().baseUrl.includes("www.feelaplace"))
        {
        cy.wait('@dynamicsections').then((response)=>{
            expect(response.response.body.geoData.cities.length).to.be.greaterThan(0)
            expect(response.response.body.geoData.states.length).to.be.greaterThan(0)
            expect(response.response.body.geoData.countries.length).to.be.greaterThan(0)
            expect(response.response.body.dynamicPlaceSections.length).to.be.greaterThan(0)
            expect(response.response.body.allPlaceTiles.placeDetails.length).to.be.greaterThan(0)

        })
        cy.get('.inner-banner.photogallery').children('img').should('have.attr','src')
        .and('not.contain','placeholder')
        cy.get('a:contains("Show All")').each(($el)=>{
            let url = $el.prop('href')
            expect(url).includes('hop-offs?category=29&subcategory=85&country=')
            // cy.request(url)
        })
    }
    })

    if(Cypress.config().baseUrl.includes("www.feelaplace"))
    {
    for(let i=0;i<10;i++){
        let x = Math.floor(Math.random()*hohoPlaces.length)

    it(`should successfully random open hoho place${hohoPlaces[x].URL}`,()=>{
        
                cy.visit(hohoPlaces[x].URL)
                cy.wait('@slug')
                // cy.wait('@dynamicsections')

            })

        }    
    }

})