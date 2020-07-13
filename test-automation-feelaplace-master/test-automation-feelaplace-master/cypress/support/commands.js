import 'cypress-file-upload';

Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    const opts = Object.assign({}, options = {}, {
      onBeforeLoad: (window, ...args) => {
        window.fetch = null;
        if (options.onBeforeLoad) {
          return options.onBeforeLoad(window, ...args);
        }
      },
    })
    return originalFn(url, opts);
  })

Cypress.Commands.add("login", (uname,pwd)=>{
    // cy.server()
    // cy.route('POST','/api/session/login').as('login')

    const txtemail = 'input[name="email"]'        
    const txtpassword = 'input[name="password"]'  

    cy.get(txtemail,{timeout:10000}).type(uname)
    cy.get(txtpassword,{timeout:10000}).type(pwd)
    .type('{enter}')
    // cy.wait('@login')

})

Cypress.Commands.add("closePopup",()=>{

    const iframePopup = 'iframe[name="intercom-tour-frame"]'        


    cy.get(iframePopup,{timeout: 60000}).then(($iframe)=>{
        const doc = $iframe.contents()
        doc.find('span').click()
    })

})

Cypress.Commands.add("closeChatPopup",()=>{
const iframeChatPopup = 'iframe[name="intercom-borderless-frame"]'        

cy.get(iframeChatPopup,{timeout: 20000}).then(($iframe)=>{
    const doc = $iframe.contents()
    doc.find('span').click()
})

})

Cypress.Commands.add('loginAdmin',(uname,pwd)=>{
    cy.server()
    cy.route('POST','/api/session/login').as('adminLogin')
    
    cy.get('input[name="email"]').type(uname)
    cy.get('input[name="password"]').type(pwd +'{enter}')
    cy.wait('@adminLogin')
})

Cypress.Commands.add('fillCustomerDetails',()=>{
    cy.get('div:contains("First Name* ")',{timeout:10000}).children('input').type('Ayan')
    cy.get('div').contains('Last Name* ').children('input').type('Test')
    cy.get('.input-group-prepend').children('select').select('9fa4ae43-f84c-4d55-99ad-54bd0a29d1ab')
    cy.get('.input-group-prepend').next('input').type('912305532')
    cy.get('div').contains('Email').children('input').type('test.dst@Gmail.com',{force:true})
    cy.get('div').contains('Country of origin').children('select').select('India',{force:true})
})

Cypress.Commands.add('verifyCategoryPage',()=>{
    cy.wait('@dynamicsections').then((response)=>{
        
        let dynamicPlaceSections = response.response.body.dynamicPlaceSections
    
        dynamicPlaceSections.forEach((dynamicPlaceSection)=>{
            if(dynamicPlaceSection.placeDetails.length>2){
                cy.get('h4.m-0').contains(dynamicPlaceSection.sectionDetails.heading).should('exist')
                dynamicPlaceSection.placeDetails.forEach((placeDetail)=>{
                    cy.get('h6.card-title.m-0').contains(placeDetail.name).should('exist')
                })
            }
        })
    
        let cities = response.response.body.geoData.cities 
        if(cities.length>1){
        cities.forEach((city)=>{
            cy.get('h6.card-title.pt-0.m-0').contains(city.name).should('exist')
        })
        }
    
     
        let states = response.response.body.geoData.states 
        if(states.length>1){
        states.forEach((state)=>{
            cy.get('h6.card-title.pt-0.m-0').contains(state.name).should('exist')
        })
        }
    
        let countries = response.response.body.geoData.countries 
        if(countries.length>1){
    
        countries.forEach((country)=>{
            cy.get('h6.card-title.pt-0.m-0').contains(country.name).should('exist')
        })
        }

    })
        
})

Cypress.Commands.add('verifyPlacePage',()=>{
    cy.wait('@slug').then((slug)=>{
        cy.wait('@dynamicsections')
        let addressline = slug.response.body.venue.addressLineOne
        let city = slug.response.body.city.name
        let timeStartDate = slug.response.body.eventDetail.startDateTime.split('T')[1].split(':')[0]+':'+slug.response.body.eventDetail.startDateTime.split('T')[1].split(':')[1]
        let timeEndDate = slug.response.body.eventDetail.endDateTime.split('T')[1].split(':')[0]+':'+slug.response.body.eventDetail.endDateTime.split('T')[1].split(':')[1]
        let address = addressline
        // if(addressline.includes(city+',')){
        //     address=addressline+', '+slug.response.body.state.name+', '+slug.response.body.country.name
        // }else{
        // address=addressline+', '+city+', '+slug.response.body.state.name+', '+slug.response.body.country.name
        // // }
        // cy.log(address)

        cy.get('.col-sm-4.more-checklist').children('.mb-2').first().children('span')
        .children('.fa.fa-map-marker').should('exist')
        cy.get('.col-sm-4.more-checklist').children('.mb-2').first().children('span')
        .contains(address).should('exist')
        cy.get('.col-sm-4.more-checklist').children('.mb-2').children('span')
        .children('.fa.fa-clock-o').should('exist')
        cy.get('.col-sm-4.more-checklist').children('.mb-2')
        .contains(timeStartDate)
        cy.get('.col-sm-4.more-checklist').children('.mb-2')
        .contains(timeEndDate)
        cy.get('.col-sm-4.more-checklist').children('.mb-2').children('span')
        .children('.fa.fa-cloud').should('exist')


    })
})

Cypress.Commands.add('verifyDynamicSections',()=>{

    cy.wait('@dynamicsections').then((response)=>{
        expect(response.response.body.geoData.cities.length).to.be.greaterThan(0)
        expect(response.response.body.geoData.states.length).to.be.greaterThan(0)
        expect(response.response.body.geoData.countries.length).to.be.greaterThan(0)
        expect(response.response.body.dynamicPlaceSections.length).to.be.greaterThan(0)
        expect(response.response.body.allPlaceTiles.placeDetails.length).to.be.greaterThan(0)

    })
    cy.get('.inner-banner.photogallery').children('img').should('have.attr','src')
    .and('not.contain','placeholder')
    
})

Cypress.Commands.add('verifyDynamicSectionsNew',()=>{
    cy.wait('@dynamicsections')
    .then((response)=>{
     
        let dynamicPlaceSections = response.response.body.dynamicPlaceSections
    
        dynamicPlaceSections.forEach((dynamicPlaceSection)=>{
            if(dynamicPlaceSection.placeDetails.length>2){
                cy.get('h4.m-0').contains(dynamicPlaceSection.sectionDetails.heading).should('exist')
                dynamicPlaceSection.placeDetails.forEach((placeDetail)=>{
                    cy.get('h6.card-title.m-0').contains(placeDetail.name).should('exist')
                })
            }
        })
    
        let cities = response.response.body.geoData.cities 
        if(cities.length>1){
        cities.forEach((city)=>{
            cy.get('h6.card-title.pt-0.m-0').contains(city.name).should('exist')
        })
        }
    
     
        let states = response.response.body.geoData.states 
        if(states.length>1){
        states.forEach((state)=>{
            cy.get('h6.card-title.pt-0.m-0').contains(state.name).should('exist')
        })
        }
    
        let countries = response.response.body.geoData.countries 
        if(countries.length>1){
    
        countries.forEach((country)=>{
            cy.get('h6.card-title.pt-0.m-0').contains(country.name).should('exist')
        })
        }

        cy.get('a.text-dark').contains(dynamicPlaceSections[0].placeDetails[0].name).click({force:true})
        // cy.visit('https://www.feelaplace.co.in/place/see-and-do/Hop-on-Hop-off-Bus-River-Cruise-24-48H/hop-on%20hop-offs')
        cy.wait('@slug').then((slug)=>{
            let addressline = slug.response.body.venue.addressLineOne
            let city = slug.response.body.city.name
            let time
            if(slug.response.body.regularTimeModel.timeModel.length>0){
                time = slug.response.body.regularTimeModel.timeModel[0].from+'-'+slug.response.body.regularTimeModel.timeModel[0].to
            }
            else{
                time = slug.response.body.eventDetail.startDateTime.split('T')[1].split(':')[0]+':'+slug.response.body.eventDetail.startDateTime.split('T')[1].split(':')[1]+'-'+slug.response.body.eventDetail.endDateTime.split('T')[1].split(':')[0]+':'+slug.response.body.eventDetail.endDateTime.split('T')[1].split(':')[1]
            }
            cy.log(time)
            let address 
            if(slug.response.body.state.name.includes(city)){
                address=addressline+', '+city+', '+slug.response.body.country.name
            }else{
            address=addressline+', '+city+', '+slug.response.body.state.name+', '+slug.response.body.country.name
            }
            cy.log(address)

            cy.get('.col-sm-4.more-checklist').children('.mb-2').first().children('span')
            .children('.fa.fa-map-marker').should('exist')

            cy.get('.col-sm-4.more-checklist').children('.mb-2').first().children('span')
            .contains(address).should('exist')
            if(time=='-'){

            }else{
                cy.get('.mb-2').children('span').children('.fa.fa-clock-o').should('exist')
                cy.get('.mb-2').contains(time.split('-')[0]).should('exist')
                cy.get('.mb-2').contains(time.split('-')[1]).should('exist')

            }
            
            cy.get('.mb-2').children('span')
            .children('.fa.fa-cloud').should('exist')
            // cy.wait(3000)

            // cy.contains('Min').invoke('text')
            // .should('not.contain',':0℉')

        })
    })
})

Cypress.Commands.add('verifyLiveStream',()=>{
    const MyshareArray=['facebook','linkedin','twitter','whatsapp']
    cy.wait('@dynamicsections')
    .then((response)=>{
        
        let dynamicPlaceSections = response.response.body.dynamicPlaceSections
    
        dynamicPlaceSections.forEach((dynamicPlaceSection)=>{
            if(dynamicPlaceSection.placeDetails.length>2){
                cy.get('h4.m-0').contains(dynamicPlaceSection.sectionDetails.heading).should('exist')
                dynamicPlaceSection.placeDetails.forEach((placeDetail)=>{
                    //cy.log(placeDetail.name.trim())
                    cy.get('h6.card-title.m-0').contains(placeDetail.name.trim()).should('exist')
                })
            }
        })
    
        let cities = response.response.body.geoData.cities 
        if(cities.length>1){
        cities.forEach((city)=>{
            cy.get('h6.card-title.pt-0.m-0').contains(city.name).should('exist')
        })
        }
    
     
        let states = response.response.body.geoData.states 
        if(states.length>1){
        states.forEach((state)=>{
            cy.get('h6.card-title.pt-0.m-0').contains(state.name).should('exist')
        })
        }
    
        let countries = response.response.body.geoData.countries 
        if(countries.length>1){
    
        countries.forEach((country)=>{
            cy.get('h6.card-title.pt-0.m-0').contains(country.name).should('exist')
        })
        }

        cy.get('a.text-dark').contains(dynamicPlaceSections[0].placeDetails[0].name).click({force:true})

        cy.wait('@slug').then((slug)=>{
            
            let startDate=slug.response.body.onlineStreamStartTime
            startDate=Cypress.moment(startDate.split('T')[0]).format('DD MMM, YYYY')
          
            let timezone=slug.response.body.onlineEventTimeZone

            cy.get('.text-left.pr-4').children().children('.d-inline-block').children('small').should('exist')

            let startTime=slug.response.body.onlineStreamStartTime
            startTime=startTime.split('T')[1]
            let startHour=startTime.split(':')[0]
            let startMin=startTime.split(':')[1]
            let AMorPM=startHour>= 12 ? 'PM' : 'AM'
            startHour = (startHour % 12) || 12
            let finalTime=startHour + ':' + startMin + ' ' + AMorPM

            cy.get('.text-left.pr-4').children().children('.d-inline-block').children('small').contains(finalTime).should('exist')
            cy.get('.text-left.pr-4').children().children('.d-inline-block').children('small').contains(startDate).should('exist')
            cy.get('.text-left.pr-4').children().children('.d-inline-block').children('small').contains(timezone).should('exist')
            cy.get('i.fa.fa-share-alt-square.text-success').should('exist').click()
            cy.get('div.dropdown-menu.p-2.show').should('exist')
             for(let i=0;i<MyshareArray.length;i++){
                 cy.get('div.dropdown-menu.p-2.show').children('button').eq(i).should('have.attr','aria-label',MyshareArray[i])
            }
            // MyshareArray.forEach((shareopt)=>{
            //     cy.get('div.dropdown-menu.p-2.show').children('button').should('have.attr','aria-label',shareopt)
            // })
            let tickets=slug.response.body.eventTicketAttribute
            let tempprice=0
            tickets.forEach((ticket)=>{
                if(tempprice==0){
                    tempprice=ticket.price
                }else if(tempprice>ticket.price){
                    tempprice=ticket.price
                }
            })
            tempprice=tempprice.toFixed(2)

            if(tempprice.includes(".00")){
                tempprice=Math.round(tempprice)
            }

            let currency=slug.response.body.currencyType.code
            cy.get('div[data-for="priceTooltip"]').children().children('small').eq(0).contains('From').should('exist')
            cy.get('div[data-for="priceTooltip"]').children().contains(tempprice + ' ' + currency).should('exist')
            cy.get('div[data-for="priceTooltip"]').children().children('small').eq(1).contains('per person').should('exist')
            cy.get('div.tinerary-box').should('exist').should('have.attr','title','Add to your feelList')

        })
    })
})