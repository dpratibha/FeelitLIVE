//Web Elements for this test
const lnkSeeandDo = 'p:contains("See & Do")'
const lnkEatandDrink = 'p:contains("Eat & Drink")'
const lnkShopLocal = 'p:contains("Shop Local")'
const lnkExpandAct = 'p:contains("Experiences & Activities")'
const lnkAttendEvents = 'p:contains("Attend Events")'
const lnkMoveAround = 'p:contains("Move Around")'
const lnkStayAt = 'p:contains("Stay At")'
const lnkTravelToFrm = 'p:contains("Travel To & From")'
const lnkServiceAndTips = 'p:contains("Services & Tips")'
const txtHomePageTitle='div.subtitle'
const lnkCategory='.btn.btn-sm.btn-outline-secondary.mr-1.ml-1'
let countriesList = ['/country/france?country=75','/country/hongkong?country=44','/country/tunisia?country=222','/country/kenya?country=113','/country/czechia?country=642','/country/argentina?country=10','/country/new-zealand?country=157']
let citiesList = [
    {
      "city": "/country/india/shillong?country=101&city=2931"
    },
    {
      "city": "/country/usa/dallas?country=231&city=46334"
    }
  ]


describe('Verify Home Page and each section landing page',()=>{
    beforeEach(()=>{
        cy.server()
        cy.route('POST','/api/dynamicsections').as('dynamicsections')
        cy.route('POST','/api/event/slug').as('slug')
        // cy.wait(5000)
        // cy.closePopup()
    })
    
    it('should have correct title',()=>{
        cy.visit('/',{timeout:100000})
        cy.get(txtHomePageTitle)
        //   .should('contain','FeelAPlace: discover, plan, book bespoke itineraries, travel, share')
        .should('contain','Online or In-Real-Life.')
        cy.get(txtHomePageTitle).children('div')
        .should('contain','Discover, plan, and experience everything your way.')
    })

    it('should have all slider images working',()=>{
        if(Cypress.config().baseUrl.includes("dev.feelaplace"))
        for(let i=1;i<=6;i++){
            cy.request('https://s3-us-west-2.amazonaws.com/feel-cdn/images/header/slider/feelaplace/feel-home-slider-'+i+'.jpg')
        }

        if(Cypress.config().baseUrl.includes("www.feelaplace"))
        for(let i=1;i<=6;i++){
            cy.request('https://static2.feelaplace.com/images/header/slider/feelaplace/feel-home-slider-'+i+'.jpg')
        }
    })
      
    it('should load all top See & Do attractions',()=>{
        cy.visit('/c/see-and-do?category=29')
        if(Cypress.config().baseUrl.includes("www.feelaplace"))
        {
        cy.verifyDynamicSections()
        cy.get('a:contains("Show All")').each(($el)=>{
            let url = $el.prop('href')
            expect(url).includes('category=29')
            // cy.request(url)
        })
    }
        // cy.wait(3000)
        // cy.get('.card-title.pt-0.m-0').parent().siblings('img').each(($el)=>{
        //     cy.wrap($el).siblings('div').children('h6').invoke('text').then((text)=>{
        //         cy.log(text)
        //     })
        //     cy.wrap($el).invoke('attr','src').should('not.contain','placeholder')
        // })

})
    
    it('should load all top Eat & Drink attractions',()=>{
        cy.visit('c/eat-and-drink?category=30')
        if(Cypress.config().baseUrl.includes("www.feelaplace"))
        {
        cy.verifyDynamicSections()
        cy.get('a:contains("Show All")').each(($el)=>{
            let url = $el.prop('href')
            expect(url).includes('category=30')
            // cy.request(url)
        })
    }
        // cy.wait(3000)
        // cy.get('.card-title.pt-0.m-0').parent().siblings('img').each(($el)=>{
        //     cy.wrap($el).siblings('div').children('h6').invoke('text').then((text)=>{
        //         cy.log(text)
        //     })
        //     cy.wrap($el).invoke('attr','src').should('not.contain','placeholder')
        // })
    })
    
    it('should load all top Shop Local attractions',()=>{
        cy.visit('c/shop-local?category=31')
        if(Cypress.config().baseUrl.includes("www.feelaplace"))
        {
        cy.verifyDynamicSections()
        cy.get('a:contains("Show All")').each(($el)=>{
            let url = $el.prop('href')
            expect(url).includes('category=31')
            // cy.request(url)
        })
    }
        // cy.wait(3000)
        // cy.get('.card-title.pt-0.m-0').parent().siblings('img').each(($el)=>{
        //     cy.wrap($el).siblings('div').children('h6').invoke('text').then((text)=>{
        //         cy.log(text)
        //     })
        //     cy.wrap($el).invoke('attr','src').should('not.contain','placeholder')
        // })
    })
    it('should load all top Experiences & Activities attractions',()=>{
        cy.visit('c/experience-explore?category=32',{timeout:100000})
        if(Cypress.config().baseUrl.includes("www.feelaplace"))
        {
        cy.verifyDynamicSections()
        cy.get('a:contains("Show All")').each(($el)=>{
            let url = $el.prop('href')
            expect(url).includes('category=32')
            // cy.request(url)
        })
    }
        // cy.wait(3000)
        // cy.get('.card-title.pt-0.m-0').parent().siblings('img').each(($el)=>{
        //     cy.wrap($el).siblings('div').children('h6').invoke('text').then((text)=>{
        //         cy.log(text)
        //     })
        //     cy.wrap($el).invoke('attr','src').should('not.contain','placeholder')
        // })
        // cy.verifyDynamicSectionsNew()
    })
    it('should load all top Attend Events attractions',()=>{
        cy.visit('c/attend-events?category=33')
        if(Cypress.config().baseUrl.includes("www.feelaplace"))
        {
        cy.verifyDynamicSections()
        cy.get('a:contains("Show All")').each(($el)=>{
            let url = $el.prop('href')
            expect(url).includes('category=33')
            // cy.request(url)
        })
    }
       
    })
    it('should load all top Move Around attractions',()=>{
        cy.visit('c/move-around?category=34')
        if(Cypress.config().baseUrl.includes("www.feelaplace"))
        {
        cy.verifyDynamicSections()
        cy.get('a:contains("Show All")').each(($el)=>{
            let url = $el.prop('href')
            expect(url).includes('category=34')
            // cy.request(url)
        })
    }
        // cy.wait(3000)
        // cy.get('.card-title.pt-0.m-0').parent().siblings('img').each(($el)=>{
        //     cy.wrap($el).siblings('div').children('h6').invoke('text').then((text)=>{
        //         cy.log(text)
        //     })
        //     cy.wrap($el).invoke('attr','src').should('not.contain','placeholder')
        // })
        // cy.verifyDynamicSectionsNew()
    })
    it.skip('should load all top Stay At attractions',()=>{
        cy.visit('c/stay-at?category=35')
        if(Cypress.config().baseUrl.includes("www.feelaplace"))
        {
        cy.verifyDynamicSections()
        cy.get('a:contains("Show All")').each(($el)=>{
            let url = $el.prop('href')
            expect(url).includes('category=35')
            // cy.request(url)
        })
    }
        // cy.wait(3000)
        // cy.get('.card-title.pt-0.m-0').parent().siblings('img').each(($el)=>{
        //     cy.wrap($el).siblings('div').children('h6').invoke('text').then((text)=>{
        //         cy.log(text)
        //     })
        //     cy.wrap($el).invoke('attr','src').should('not.contain','placeholder')
        // })
        // cy.verifyDynamicSections()
    })
    it('should load all top Travel To & From attractions',()=>{
        cy.visit('c/travel-to-from?category=36')
        if(Cypress.config().baseUrl.includes("www.feelaplace"))
        {
        cy.verifyDynamicSections()
        cy.get('a:contains("Show All")').each(($el)=>{
            let url = $el.prop('href')
            expect(url).includes('category=36')
            // cy.request(url)
        })
    }
        // cy.wait(3000)
        // cy.get('.card-title.pt-0.m-0').parent().siblings('img').each(($el)=>{
        //     cy.wrap($el).siblings('div').children('h6').invoke('text').then((text)=>{
        //         cy.log(text)
        //     })
        //     cy.wrap($el).invoke('attr','src').should('not.contain','placeholder')
        // })
        // cy.verifyDynamicSectionsNew()
    })
    it('should open any event live stream page and verify the content',()=>{
        cy.server()
        cy.route('POST','/api/dynamicsections').as('dynamicsections')
        cy.route('POST','/api/event/slug').as('slug')
        cy.route('POST','/api/loginuser/transaction').as('loginuser')

        cy.visit('/c/live-stream?category=98')
        cy.verifyLiveStream()

        
    })

    it('should be able to verify the event categories on live stream page',()=>{
        cy.visit('/c/live-stream?category=98')
        cy.request({
            method: 'POST',
            url: '/api/dynamicsections',
            auth: {
                bearer: window.sessionStorage.getItem('auth_token')
            },
            body: {
                "category":98,"city":0,"country":0,"pageType":1,"pagePath":"/c/live-stream","state":0,"subCategory":0
            },
            failOnStatusCode: false
        }).then((liveEventCats)=>{
            cy.log(liveEventCats)
            liveEventCats.body.subCategories.forEach((cat)=>{
            cy.get(lnkCategory).contains(cat.displayName).should('exist')
            })
            
        })
    })
})

if(Cypress.config().baseUrl.includes("www.feelaplace"))
{
describe('Verify Country and City Landing Pages',()=>{

    beforeEach(()=>{
        cy.server()
        cy.route('POST','/api/dynamicsections').as('dynamicsections')
        cy.route('https://dataservice.accuweather.com/forecasts/v1/daily/1day/***')
        .as('weather')
        cy.route('GET','/api/weather/getconfig').as('weatherconfig')
        cy.route('GET','/locations/v1/cities/**').as('locations')
        cy.route('https://restcountries.eu/rest/v2/name/***').as('fullText')
    })
    countriesList.forEach((country)=>{
        let countryName = country.split('/')[2].split('?')[0]

        it('should open page correctly for '+countryName,()=>{

                cy.visit(''+country)
                cy.wait('@dynamicsections').then((response)=>{
                    //Verifying description is loaded in screen
                    let cDescription = response.response.body.contryPageDetails.description.split('</p>')[0].replace('<p>','')
                    cy.log(cDescription)
                    if(cDescription==''){

                    }else{
                        // cy.contains(cDescription).should('exist')   
                    }
                })
                cy.wait('@weatherconfig')
                cy.wait('@fullText')
                cy.wait('@locations')
                cy.wait('@weather',{timeout:10000}).then((response)=>{
                    cy.request(response.url).then((res)=>{
                      cy.contains(res.body.DailyForecasts[0].Temperature.Maximum.Value+"℉",{timeout:30000})
                      .should('exist')
                      cy.contains(res.body.DailyForecasts[0].Temperature.Minimum.Value+"℉",{timeout:30000})
                      .should('exist')
                  })
                  })
                cy.wait(3000)
                cy.get('iframe[class="iframes"]').then(($iframe)=>{
                    const $doc = $iframe.contents()
                    cy.log($doc[0].documentElement)

                    cy.wrap($doc[0].documentElement).find('.place-name',{timeout:10000}).invoke('text').then(($text)=>{
                        expect($text.replace(' ','').toLowerCase()).equal(countryName.replace('-','').toLowerCase())
                        // if(countryName.toLowerCase()==$text.toLowerCase()){
                        //     cy.log("hi")
                        // }
                    })


                })
                // .contains(country.split('/')[2].split('?')[0])

            })
    
})

citiesList.forEach((cityData)=>{
    it('should not display 0F for city '+cityData.city.split('/')[3].split('?')[0],()=>{
        cy.visit(cityData.city)
        cy.wait('@dynamicsections')
        cy.wait('@weatherconfig')
        cy.wait('@weather').then((response)=>{
          cy.request(response.url).then((res)=>{
            cy.contains(res.body.DailyForecasts[0].Temperature.Maximum.Value+"℉")
            .should('exist')
            cy.contains(res.body.DailyForecasts[0].Temperature.Minimum.Value+"℉")
            .should('exist')
          })
        })
        
    })
})
})
}
