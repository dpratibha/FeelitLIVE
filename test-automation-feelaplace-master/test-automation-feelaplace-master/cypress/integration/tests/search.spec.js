//Web Elements

const inpSearchBar = 'input[aria-describedby="“FeelJaipur”"]'

//Test Data
let country = 'India'

describe.skip('Search Functionality',()=>{
    beforeEach(()=>{
        cy.visit('/')

    })

    it('should return search results',()=>{
        cy.get(inpSearchBar,{timeout:10000}).type('Hyderabad{enter}')
        cy.get('span:contains("India")',{timeout:3000}).should('exist')
        cy.get('img[src="https://static1.feelaplace.com/images/flags/flag-india.jpg"]').should('exist')
       
        cy.get('a[href="https://dev.feelaplace.co.in/place/see-and-do/buddhist-monuments/monuments"]')
        .children('img[src="https://static1.feelaplace.com/images/places/tiles/D7754E6D-2001-49D0-8873-7077336BC854-ht-c1.jpg"]')
        .should('exist')
        cy.get('div:contains("Buddhist monuments")').should('exist')
        cy.get('div:contains("Hyderabad, India")').should('exist')
        cy.get('img[src="https://static1.feelaplace.com/images/places/tiles/D7754E6D-2001-49D0-8873-7077336BC854-ht-c1.jpg"]').should('exist')

        cy.get('b:contains("Buddhist monuments")').should('exist')
        cy.get('div:contains("Hyderabad, India")').should('exist')
        // cy.get('img[src="https://static1.feelaplace.com/images/places/tiles/D7754E6D-2001-49D0-8873-7077336BC854-ht-c1.jpg"]').should('exist')


    })

    it('should have all countries as filter options',()=>{
        cy.get(inpSearchBar).trigger('mouseover')
        if(Cypress.config().baseUrl.includes("dev.feelaplace")){
            cy.fixture('countriesDataDev.json').then((countries)=>{
                countries.forEach((country)=>{
                    cy.get('.btn.btn-sm.btn-outline-secondary.mr-1.ml-1.mb-2').contains(country.country).should('exist')
                })      
    })
        }else{
            cy.fixture('countriesData.json').then((countries)=>{
                countries.forEach((country)=>{
                    cy.get('.btn.btn-sm.btn-outline-secondary.mr-1.ml-1.mb-2').contains(country.country).should('exist')
                })      
    })
    }
    })
    
    
    it('should filter based on button selected',()=>{
        cy.server()
        cy.get(inpSearchBar).click()
        cy.get('.btn.btn-sm.btn-outline-secondary.mr-1.ml-1.mb-2').contains(country).click()
        //need to updated below step to make it regexp
        cy.url().should('include','/india?country=101')

    })
})

describe.skip('Search API Validations',()=>{
    it('should return results containing search value',()=>{
        cy.request('GET','/api/placeByIndex/1?slug=all-top-29?'+encodeURIComponent('New York'))
        .then((response)=>{
            const categoryEvents = response.body.categoryEvents
            categoryEvents.forEach((categoryEvent)=>{
                let cEvent = JSON.stringify(categoryEvent)
                expect(cEvent).to.contains('New York')
            })
        })
    })
    it.skip('should return results for advance search',()=>{
        cy.request('GET','/api/searchcategory/Hyderabad')
    })
})
