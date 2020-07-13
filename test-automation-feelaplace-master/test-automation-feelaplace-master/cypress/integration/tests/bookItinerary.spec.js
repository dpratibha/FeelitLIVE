//Web Elements
const btnBookItinerary = 'imt[alt="Build Your Itinerary with"]'
const inpDestination = '.css-151xaom-placeholder'
const inpStartDate = 'input[placeholder="Start Date"]'
const inpEndDate = 'input[placeholder="End Date"]'
const btnGetYourFeelr = 'a:contains("get your feelr itinerary")'
const lnkBookEntireItineraryText = 'Book Entire Itinerary'
const lnkPlaceOrderText = 'Place Order'
const btnContinueText = 'Continue'
const btnNext = 'button:contains("Next")'
const startDate = Cypress.moment().add(7,'days').format('YYYY-MM-DD')
const endDate = Cypress.moment().add(10,'days').format('YYYY-MM-DD')
const inpTotalPrice = 'h5[class="text-left pr-3 m-0"]'
const selCurrency = 'b:contains("Change Currency")'
const selOptionIndia = 'a[data-reactid="197"]'
const btnPriceRangeBudget = '.w-100.d-block.pt-1.pb-2.btn.btn-outline-dark:contains("Budget ")'
const seetodos = ['Monuments','Attractions','Museums','Castles & Forts','Parks & Sanctuaries','Zoos','Theme Parks'
,'Spiritual','Hop-On Hop-Offs','Hidden Gems']
const lnkAdd = ' Add'
const AddMorePlace = '.form-control.border.bg-white'
const lnkClickAdd = 'Golkonda Fort'
const lnkBoardView = ' Board View'
const Remove = '.sc-kGXeez foOBt'
//Variables for 
let pastStartDate = Cypress.moment().subtract(5,'days').format('YYYY-MM-DD')
let city = "New Delhi"
let totalPrice = 0
let eventNames = []
let eventIds = []
let adult = 2
let children = 0
let iterator = 1



describe('Book itinerary',()=>{

    beforeEach(()=>{
        if(Cypress.config().baseUrl.includes("www.feelitlive"))
        {
        cy.visit('/feel-itineraryplanner',{timeout:100000})
        }
        if(Cypress.config().baseUrl.includes("dev.feelitlive"))
        {
        cy.visit('/feel-itineraryplanner',{timeout:100000})
        }

    })

    // it.skip('should have all currency shown as per selection at bottom of page',()=>{
    //     // cy.get('.pb-3').children('.btn-group.currencyDropdown').click()
    //     cy.get(btnPriceRange,{timeout:10000}).each($el=>{
    //         expect($el).to.contain('₹')
    //     })
      
    //     cy.get('.pb-3').children('.btn-group.currencyDropdown').click()
    //     cy.get('.pb-3').children('div').children('.dropdown-menu.show').children('.dropdown-item').contains('$ - USD - US dollar').click({force:true})
    //     // cy.get('a[data-reactid="206"]').click()
    //     cy.get(btnPriceRange,{timeout:10000}).each($el=>{
    //         expect($el).to.contain('$')
    //     })

    // })

    it('should not allow to click next if all fields are not entered',()=>{

        const stub = cy.stub()  
        cy.on ('window:alert', stub)

        cy.get(inpDestination).click()
        cy.get('.css-1g6gooi').children().children('input').type('Hyderabad')
        cy.get('div:contains("Hyderabad, India")',{timeout:10000})
        cy.get('.css-1g6gooi').children().children('input').type('{enter}')
  
        cy.get(inpStartDate).type(startDate)
        // cy.get(inpEndDate).type(endDate)
        cy.get('button').contains('adult').click()
        cy.contains('Adult').parent().siblings().contains('+').click()
        cy.get(btnPriceRangeBudget).click()
        cy.get(btnNext).click().then(() =>{
            // cy.log(stub.getCall(0))
            expect(stub.getCall(0)).to.be.calledWith('Oops! Looks like you forgot something. Please double check that you\'ve filled in all the required boxes so that you can go forward.')
          })

    })

    it('should not allow to click next when past date is entered',()=>{

        cy.server()
        cy.route('GET','/api/LocationCategories/***').as('locationCategories')

        const stub = cy.stub()  
        cy.on ('window:alert', stub)
        cy.get(inpDestination).click()
        cy.get('.css-1g6gooi').children().children('input').type('London,')
        cy.get('div:contains("London, U.K.")',{timeout:10000})
        cy.get('.css-1g6gooi').children().children('input').type('{enter}')
        cy.get(inpStartDate).type(pastStartDate)
        cy.get(inpEndDate).type(endDate)
        cy.get(btnPriceRangeBudget).click()
        cy.get(btnNext).click()
        cy.wait('@locationCategories').then((response)=>{
            cy.request(response.url).then((res)=>{
                res.body.categories.forEach((cats)=>{
                    let sLength = cats.subCategories.length
                    let x = Math.floor(Math.random()*sLength)
                    if(x==0){
                        x=x+1
                    }
                    cy.get('button').contains(cats.subCategories[x].displayName).click()

                })
            })
        })
        cy.get(btnGetYourFeelr).click().then(() =>{
            // cy.log(stub.getCall(0))
            expect(stub.getCall(0)).to.be.calledWith('Oops! Looks like you forgot something. Please check if you\'ve entered correct start date.')
          })

    })
  
   
    it.only('should be able to book itinerary',()=>{
        cy.server()
        cy.route('GET','/api/LocationCategories/***').as('locationCategories')
        cy.route('POST','/api/v1/getVenueDayByDay/all').as('postvenue')
        cy.route('GET','/api/Itinerary/**').as('getPrice')
        cy.route('POST','/api/loginuser/transaction').as('login')
        cy.route('POST','/api/deliveryoptions').as('deliveryoptions')
        cy.route('GET','/api/get/deliveryoptions/**').as('getdeliveryoptions')
        cy.route('GET','/api/country/all').as('country')
        cy.route('GET','/api/transaction/**').as('transaction')
        cy.route('GET','/api/paymentOptions').as('paymentOptions')

        cy.get(inpDestination,{timeout:5000}).click()
        cy.get('.css-1g6gooi').children().children('input').type('Hyderabad')
        cy.get('div:contains("Hyderabad, India")',{timeout:10000})
        cy.get('.css-1g6gooi').children().children('input').type('{enter}')
        cy.get(inpStartDate).type(startDate)
        cy.get(inpEndDate).type(endDate)

        cy.get('button').contains('adult').click()

        while(iterator<adult){
        cy.contains('Adult').parent().siblings().contains('+').click({force:true})
        iterator++    
    }
    
        cy.get('button').contains('adult').click()
        while(children>0){
        cy.contains('Children').parent().siblings().contains('+').click({force:true})
        children--    
    }
    cy.get(btnPriceRangeBudget).click()

        cy.get(btnNext).click()
        cy.wait('@locationCategories').then((response)=>{
            cy.request(response.url).then((res)=>{
                res.body.categories.forEach((cats)=>{
                    let sLength = cats.subCategories.length
                    let x = Math.floor(Math.random()*sLength)
                    if(x==0){
                        x=x+1
                    }
                    cy.get('button').contains(cats.subCategories[x].displayName).click()

                })
            })
        })
    

        cy.get(btnGetYourFeelr).should('be.visible').focus().click({force: true})

        cy.wait('@postvenue')
        cy.contains(lnkBookEntireItineraryText,{timeout:15000}).click()
        cy.get('a').contains(lnkPlaceOrderText).click({force: true})
        if(Cypress.config().baseUrl.includes("dev.feelaplace")){
            cy.login(Cypress.env('prat_username'),Cypress.env('prat_password'))
        }else{
            cy.login(Cypress.env('username'),Cypress.env('password'))
        }            cy.wait('@login',{timeout:20000})

        cy.wait('@country')
        cy.fillCustomerDetails()
        cy.get('input[value="Next"]').click()
        
        cy.fillCustomerDetails()
        cy.get('input[value="Submit"]').click()
        cy.wait('@getdeliveryoptions')
        cy.wait('@country')
        cy.wait('@transaction')
  
        cy.get('.custom-control-label').each(($el)=>{
            if($el.text().includes('PrintAtHome ')){
                $el.click()
            }
        })

        cy.get('button').contains(btnContinueText).click({force:true})
        cy.wait('@deliveryoptions')
        cy.wait('@paymentOptions')
        cy.wait('@country')
        cy.wait('@transaction')
        cy.url().should('contains',Cypress.config().baseUrl+'payment')

    })  

    it('should be able to add place name',()=>{
    
    
        cy.server()
        cy.route('GET','/api/LocationCategories/***').as('locationCategories')
        cy.route('POST','/api/v1/getVenueDayByDay/all').as('postvenue')
        cy.route('GET','/api/Itinerary/**').as('getPrice')
        cy.route('POST','/api/loginuser/transaction').as('login')
        cy.route('POST','/api/deliveryoptions').as('deliveryoptions')
        cy.route('GET','/api/get/deliveryoptions/**').as('getdeliveryoptions')
        cy.route('GET','/api/country/all').as('country')
        cy.route('GET','/api/transaction/**').as('transaction')
        cy.route('GET','/api/paymentOptions').as('paymentOptions')
    
        cy.get(inpDestination,{timeout:5000}).click()
        cy.get('.css-1g6gooi').children().children('input').type('Hyderabad')
        cy.get('div:contains("Hyderabad, India")',{timeout:10000})
        cy.get('.css-1g6gooi').children().children('input').type('{enter}')
        cy.get(inpStartDate).type(startDate)
        cy.get(inpEndDate).type(endDate)
    
        cy.get('button').contains('adult').click()
    
        while(iterator<adult){
        cy.contains('Adult').parent().siblings().contains('+').click({force:true})
        iterator++    
    }
    
        cy.get('button').contains('adult').click()
        while(children>0){
        cy.contains('Children').parent().siblings().contains('+').click({force:true})
        children--    
    }
    cy.get(btnPriceRangeBudget).click()
    
        cy.get(btnNext).click()
        cy.wait('@locationCategories').then((response)=>{
            cy.request(response.url).then((res)=>{
                res.body.categories.forEach((cats)=>{
                    let sLength = cats.subCategories.length
                    let x = Math.floor(Math.random()*sLength)
                    if(x==0){
                        x=x+1
                    }
                    cy.get('button').contains(cats.subCategories[x].displayName).click()
    
                })
            })
        })
    
    
        cy.get(btnGetYourFeelr).should('be.visible').click({force: true})
    
        cy.wait('@postvenue')
        cy.get('a').contains(lnkAdd).click({force: true})
        cy.get(AddMorePlace).type('Golkonda Fort')
        cy.get('a[href="JavaScript:Void(0)"]').contains('Golkonda Fort')
            .click({force:true})
        })
    
    it('should be able to Board View',()=>{
        
        
            cy.server()
            cy.route('GET','/api/LocationCategories/***').as('locationCategories')
            cy.route('POST','/api/v1/getVenueDayByDay/all').as('postvenue')
            cy.route('GET','/api/Itinerary/**').as('getPrice')
            cy.route('POST','/api/loginuser/transaction').as('login')
            cy.route('POST','/api/deliveryoptions').as('deliveryoptions')
            cy.route('GET','/api/get/deliveryoptions/**').as('getdeliveryoptions')
            cy.route('GET','/api/country/all').as('country')
            cy.route('GET','/api/transaction/**').as('transaction')
            cy.route('GET','/api/paymentOptions').as('paymentOptions')
        
            cy.get(inpDestination,{timeout:5000}).click()
            cy.get('.css-1g6gooi').children().children('input').type('Agra, India')

            cy.get('.css-11unzgr:contains("Agra, India")',{timeout:10000}).click()

            cy.get('.css-1g6gooi').children().children('input').type('Pune, India')
            cy.get('.css-11unzgr:contains("Pune, India")',{timeout:10000}).click()

            cy.get(inpStartDate).type(startDate)
            cy.get(inpEndDate).type(endDate)
        
            cy.get('button').contains('adult').click()
        
            while(iterator<adult){
            cy.contains('Adult').parent().siblings().contains('+').click({force:true})
            iterator++    
        }
        
            cy.get('button').contains('adult').click()
            while(children>0){
            cy.contains('Children').parent().siblings().contains('+').click({force:true})
            children--    
        }
        cy.get(btnPriceRangeBudget).click()
        
            cy.get(btnNext).click()
            cy.wait('@locationCategories').then((response)=>{
                cy.request(response.url).then((res)=>{
                    res.body.categories.forEach((cats)=>{
                        let sLength = cats.subCategories.length
                        let x = Math.floor(Math.random()*sLength)
                        if(x==0){
                            x=x+1
                        }
                        cy.get('button').contains(cats.subCategories[x].displayName).click()
        
                    })
                })
            })
        
        
            cy.get(btnGetYourFeelr).click({force: true})
        
            cy.wait('@postvenue')
            cy.get('a').contains(lnkBoardView).click({force: true})
    
            
    })
    

})

if(Cypress.config().baseUrl.includes("www.feelitlive"))
{
describe('Check itinerary combo',()=>{
    const cData = require('../../fixtures/cityCatCombo.json')


    for(let i=0;i<10;i++){
        let x = Math.floor(Math.random()*cData.length)
        it(`should be able to continue with book itinerary for city ${cData[x].CityName} and categery ${cData[x].Category}`,()=>{
        
            cy.request('POST','/api/v1/getVenueDayByDay/all',
            {"queryString":cData[x].CityName,"startDate":"Wed Feb 26 2020","endDate":"Fri Feb 28 2020","speed":"0","categories":cData[x].Category,"budgetRange":"0","noOfAdults":1,"noOfChilds":0,"cityIds":[cData[x].CityId]})
            .then((response)=>{
                cy.log(response.body)
                expect(response.body).length.greaterThan(0)
            })
                       
        })

    }
})
}

