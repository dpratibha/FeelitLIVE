let btnBookNowText = 'Book Now'
let dayPlus = 2
let btnBookDate = Cypress.moment().add(dayPlus,'days').format('YYYY-MM-DDT'+'00:00:00.000')
const inpFirstName = 'input[placeholder="First Name"]'
const inpLastName = 'input[placeholder="Last Name"]'
const selNationDocument = 'select[id="inputState"]'
const inpIdNumber = 'input[placeholder="ID Number"]'
const btnContinue = '.btn-lg.site-primery-btn'
const btnPlaceOrder = '.btn.site-primery-btn.text-uppercase'
const btnPlaceOrderText = 'Place Order'
const btnContinueText = 'Continue'


describe('City Sight Seeings Api',()=>{
    it('should get city sightseeing locations',()=>{
        cy.request('https://feelaplace.com/api/get-hoho-locations')
        .then((response)=>{
            expect(response.status).to.be.equal(200)
            expect(response.body.locationResponse.locations.length).to.be.greaterThan(0)
        })

    })
    it('should get tiqets',()=>{
        cy.request('https://www.feelaplace.com/api/sync-data/Funchal/Portugal')
        .then((response)=>{
            expect(response.body.isSuccess).to.be.true
        })

    })
})

describe.skip('Tiqets Api',()=>{
    it('should get success for sync-tiqets',()=>{
        cy.request('https://www.feelaplace.com/api/sync-tiqets/products/1/1/true/1')
        .then((response)=>{
            expect(response.status).to.be.equal(200)
        })

    })
    it('should get true for update product details',()=>{
        cy.request('https://www.feelaplace.com/api/update-product-details/1')
        .then((response)=>{
            expect(response.body.success).to.be.true
        })

    })
})

describe.skip('Value Retail Api',()=>{
    it('should get true for vr villages',()=>{
        cy.request('https://feelaplace.com/api/get-vr-villages')
        .then((response)=>{
            expect(response.body.success).to.be.true
        })

    })
    it('should get true for vr express route',()=>{
        cy.request('https://feelaplace.com/api/get-vr-express-route')
        .then((response)=>{
            expect(response.body.success).to.be.true
        })

    })
    it('should get true for vr package route',()=>{
        cy.request('https://feelaplace.com/api/get-vr-package-route')
        .then((response)=>{
            expect(response.body.success).to.be.true
        })
    })
    it('should get true for vr express',()=>{
        cy.request('https://feelaplace.com/api/get-vr-express')
        .then((response)=>{
            expect(response.body.success).to.be.true
        })
    })    
    it.skip('should get true for vr package',()=>{
        cy.request('https://feelaplace.com/api/get-vr-package')
        .then((response)=>{
            expect(response.body.success).to.be.true
        })
    })  
    it.skip('should get true for vr chauffeur package',()=>{
        cy.request('https://feelaplace.com/api/get-vr-chauffeur-service')
        .then((response)=>{
            expect(response.body.success).to.be.true
        })
    })   
})


describe('Google geocode Api',()=>{
    it('should identify the location based on lat lng with the auth key',()=>{
        cy.request('https://maps.googleapis.com/maps/api/geocode/json?latlng=18.499,73.866&key='+Cypress.env('googleAuthKey'))
        .then((response)=>{
            expect(response.body.results.length).to.be.greaterThan(0)
        })
    })
    it('should identify address auth key',()=>{
        cy.request('https://maps.googleapis.com/maps/api/geocode/json?address=charminar%20hyderabad&key='+Cypress.env('googleAuthKey'))
        .then((response)=>{
            expect(response.body.results.length).to.be.greaterThan(0)
        })
    })
})

describe('Forex Api',()=>{
    it('should return conversion rage',()=>{
        cy.request('https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml')
        .then((response)=>{
            expect(response.status).to.be.equal(200)
        })
    })
})

describe('Google Distance Api',()=>{
    it('should find google directions with auth key',()=>{
        cy.request('https://maps.googleapis.com/maps/api/distancematrix/json?origins=%22dallas%20tx%22&destinations=%22plano%20tx%22&mode=driving&language=en-EN&sensor=false&key='+Cypress.env('googleAuthKey'))
        .then((response)=>{
            expect(response.status).to.be.equal(200)
        })
    })
})



describe.skip('Experience & Activities',()=>{

    before(()=>{
        cy.server()
        cy.route('POST','/api/dynamicsections').as('dynamicsections')
        cy.route('POST','/api/event/slug').as('slug')
        cy.route('POST','/api/loginuser/transaction').as('loginuser')

        cy.visit('/c/experience-explore?category=32')

    })
    it('should open Experience & Actvities and have all details displayed',()=>{
        cy.verifyCategoryPage()
    })
    

})


describe.skip('VR',()=>{

    before(()=>{
        cy.server()
        cy.route('POST','/api/dynamicsections').as('dynamicsections')
        cy.route('POST','/api/event/slug').as('slug')
        cy.route('POST','/api/loginuser/transaction').as('loginuser')

    })
    it('should open Experience & Actvities and have all details displayed',()=>{
        cy.visit('/c/move-around?category=34')

        cy.verifyCategoryPage()

    })
    

})
