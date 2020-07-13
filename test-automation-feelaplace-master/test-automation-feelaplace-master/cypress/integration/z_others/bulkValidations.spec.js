let countryCode = 68
let pagePath = "/country/estonia"

describe('Verify Images are loaded',()=>{

  
    const attractions = require('../../fixtures/allAttractions.json')

    attractions.forEach((attraction)=>{
        it(`should load right image for attractions`,()=>{  
            cy.writeFile('./cypress/logs/brokenurlhoho.csv','\n'+attraction.Slug+','+'https://www.feelaplace.com'+attraction.URL+',', {flag: "a+"})
            cy.server()
            cy.route('POST','/api/event/slug').as('slug')
            cy.visit(attraction.URL)


                  cy.wait('@slug').then((response)=>{
                    expect(response.status).to.eq(200)
                })

                         cy.writeFile('./cypress/logs/brokenurlhoho.csv','Yes', {flag: "a+"})
    
            })

        it(`should load tile image for attractions`,()=>{   
                cy.server()

                let x = Math.floor((Math.random() * 10) + 1)
                let servName
                if(x<4){
                    servName = 'static1'
                }else if(x<7){
                    servName = 'static2'
                }else{
                    servName = 'static3'
                }
    
                        let attractionUrl = 'https://'+servName+'.feelaplace.com/images/places/tiles/'+attraction.AltId+'-ht-c1.jpg'
                        cy.writeFile('./cypress/logs/Images_tile_validation.csv', '\n'+attraction.SN+','+attraction.AltId+','+attraction.Name+','+attractionUrl+',', { flag: "a+"})
    
                    cy.request(attractionUrl)
                    cy.writeFile('./cypress/logs/Images_tile_validation.csv','Yes', {flag: "a+"})

                   })
        })
  


})


describe.skip('Verify description exist',()=>{

    it(`should find ones without description for city,state,country`,()=>{   

        cy.request('POST','https://www.feelaplace.co.in/api/dynamicsections',{category: 0, city: 0, country: countryCode, pageType: 2, pagePath: pagePath, state: 0, subCategory: 0})
        .then((response)=>{
            //Verifying description is loaded in screen
            let cDescription = response.body.contryPageDetails.description
            if(cDescription==''){
                cy.log('Its Empty')

            }
        })


            })

    it(`should find ones without description for city,state,country`,()=>{   

        cy.request('POST','https://www.feelaplace.co.in/api/dynamicsections',{category: 0, city: 0, country: countryCode, pageType: 2, pagePath: pagePath, state: 0, subCategory: 0})
        .then((response)=>{
            //Verifying description is loaded in screen
            let cDescription = response.body.contryPageDetails.description
            if(cDescription==''){
                cy.log('Its Empty')

            }
        })

            })

})


describe.skip('Book itinerary combinations',()=>{
    
    const sDatas = require('../../fixtures/stateCatCombo.json')


    sDatas.forEach((sData)=>{
        it(`should be able to continue with book itinerary for city ${sData.StateName} and categery ${sData.Category}`,()=>{

            cy.writeFile('./cypress/logs/getvenue.csv','\n'+sData.StateName+','+sData.StateId+','+sData.Category+',', {flag: "a+"})
        
            cy.request('POST','/api/v1/getVenueDayByDay/all',
            {"queryString":sData.StateName,"startDate":"Wed Jan 22 2020","endDate":"Fri Jan 24 2020","speed":"0","categories":sData.Category,"budgetRange":"0","noOfAdults":1,"noOfChilds":0,"cityIds":[sData.StateId]})
            .then((response)=>{
                cy.log(response.body)
                expect(response.body).length.greaterThan(0)
            })
            
            cy.writeFile('./cypress/logs/getvenue.csv','Yes', {flag: "a+"})

        })

    })
    
})

describe.skip('Weather',()=>{
    
    const cDatasCity = require('../../fixtures/citycountry.json')


    cDatasCity.forEach((cData)=>{
            it(`should be able to get weather for city ${cData.CityName}`,()=>{
                cy.writeFile('./cypress/logs/cityweather.csv','\n'+cData.CityName+','+cData.CityId+',', {flag: "a+"})
                cy.server()
                cy.route('POST','/api/dynamicsections').as('dynamicsections')
                cy.route('https://dataservice.accuweather.com/forecasts/v1/daily/1day/***').as('weather')
                cy.visit('/country/'+cData.CountryName+'/'+cData.CityName+'?country='+cData.CountryId+'&city='+cData.CityId)
                cy.wait('@dynamicsections')
                cy.wait('@weather').then((response)=>{
                  cy.request(response.url).then((res)=>{
                    cy.contains(res.body.DailyForecasts[0].Temperature.Maximum.Value+"℉")
                    .should('exist')
                    cy.contains(res.body.DailyForecasts[0].Temperature.Minimum.Value+"℉")
                    .should('exist')
                  })
                })
                cy.writeFile('./cypress/logs/cityweather.csv','Yes', {flag: "a+"})

                
            })
    
})
const cDatas = require('../../fixtures/countriesData.json')


        cDatas.forEach((cData)=>{
            it(`should be able to get weather for country ${cData.CountryName}`,()=>{
                cy.writeFile('./cypress/logs/countryweather.csv','\n'+cData.CountryName+','+cData.CountryId+',', {flag: "a+"})
                cy.server()
                cy.route('POST','/api/dynamicsections').as('dynamicsections')
                cy.route('https://dataservice.accuweather.com/forecasts/v1/daily/1day/***').as('weather')
                cy.visit('/country/'+cData.CountryName+'?country='+cData.CountryId)
                cy.wait('@dynamicsections')
                cy.wait('@weather').then((response)=>{
                  cy.request(response.url).then((res)=>{
                    cy.contains(res.body.DailyForecasts[0].Temperature.Maximum.Value+"?")
                    .should('exist')
                    cy.contains(res.body.DailyForecasts[0].Temperature.Minimum.Value+"?")
                    .should('exist')
                  })
                })
                cy.writeFile('./cypress/logs/countryweather.csv','Yes', {flag: "a+"})

                
            })
    
})
})
describe.only('Feel-itineraryplanner location Api for City',()=>{
    const cDatas = require('../../fixtures/citiesLocationData.json')
    cDatas.forEach((cData)=>{
      it(`should be able to get location for city ${cData.CityId} ${cData.CityName} `,()=>{
        cy.writeFile('./cypress/logs/getlocation.csv','\n'+cData.CityId+','+cData.CityName+',', {flag: "a+"})
        cy.request('https://www.feelaplace.co.in/api/LocationCategories/'+cData.CityId)
        .then((response)=>{
            expect(response.status).to.be.equal(200)
            expect(response.body.categories.length).to.be.greaterThan(0)
        })
        cy.writeFile('./cypress/logs/getlocation.csv','Yes', {flag: "a+"})
      })
  })
  })