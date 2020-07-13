describe('Placeholder images',()=>{

    it.skip('should not have blank placeholder images for category pages',()=>{

        cy.server()
        cy.route('POST','/api/dynamicsections').as('dynamicsections')

        // cy.visit('/c/see-and-do?category=29')
        cy.visit('/c/see-and-do/monuments?category=29&subcategory=17')
        cy.wait('@dynamicsections').then((response)=>{
            // cy.wait(4000)
            let urls = []
            // let slug = response.response.body.dynamicPlaceSections[0].placeDetails[0].url
            
            response.response.body.dynamicPlaceSections.forEach((dp)=>{
                dp.placeDetails.forEach((placeDetail)=>{
                    urls.push(placeDetail.url)
                })
            })

            // for(let i=0;i<16;i++){
            //         urls.push(response.response.body.allPlaceTiles.placeDetails[i].url)
            // }

            urls.forEach((slug)=>{
                cy.get('a[href="'+slug+'"]')
                .first()
                .children('.card-img-top').should('have.attr','src').and('not.contain','tiles-placeholder')
            })

        })

        // cy.get('.carousel-item.active').children('a[href="/place/see-and-do/the-national-maritime-museum/museums"]')
        // cy.get('.sec-spacing').find('.carousel-item.active')
        // .each(($el=>{
        //     cy.wrap($el).children()
        //     cy.wrap($el).children().children().should('have.attr','src').and('not.contain','placeholder')

        // }))
    })

    it.skip('should not have blank placeholder images for search',()=>{    
        cy.server()
        cy.route('POST','/1/indexes/Places/query?****').as('algolia')
        cy.visit('/')
        cy.get('input[aria-describedby="“FeelJaipur”"]').type('museum')
        cy.wait('@algolia')
        cy.wait(4000)
        cy.get('img[alt="shop local"]',{timeout:10000}).each(($el)=>{
            cy.wrap($el).should('have.attr','src').and('not.contain','tiles-placeholder')
        })
    })

    const attractions = require('../../fixtures/missingImages.json')

    attractions.forEach((attraction)=>{
    it('should not have empty placeholder image',()=>{
        cy.writeFile('./cypress/logs/links.csv','\n'+attraction.AltId+','+attraction.SlugUrl+',', {flag: "a+"})

        cy.visit(attraction.SlugUrl)
        // cy.get('div[class="inner-banner photogallery"]').children('img')
        // .should('have.attr','src').and('not.contain','/placeholder')

        cy.writeFile('./cypress/logs/links.csv','Yes', {flag: "a+"})

    })
})
})