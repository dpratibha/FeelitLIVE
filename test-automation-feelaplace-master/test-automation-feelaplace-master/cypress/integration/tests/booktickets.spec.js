//Monument Name

let monumentName = 'Taj Mahal'
let btnBookNowText = 'Book Now'
let dayPlus = 2
let btnBookDate = Cypress.moment().add(dayPlus,'days').format('MMMM D, YYYY')
const inpFirstName = 'input[placeholder="First Name"]'
const inpLastName = 'input[placeholder="Last Name"]'
const selNationDocument = 'select[id="inputState"]'
const inpIdNumber = 'input[placeholder="ID Number"]'
const btnContinue = '.btn-lg.site-primery-btn'
const btnPlaceOrder = '.btn.site-primery-btn.text-uppercase'
const btnPlaceOrderText = 'Place Order'
const btnContinueText = 'Continue'
const imgFeelCart = 'img[alt="FIL Shoping Bag"]'
let places = [
    {
        'name':'Taj Mahal',
        'url':'place/see-and-do/taj-mahal/monuments'
    },
    {
        'name':'Charminar',
        'url':'/place/see-and-do/charminar/monuments'},
    {
        'name':'Golconda Fort',
        'url':'/place/see-and-do/golkonda-fort/castles-and-forts'
    }
]


describe('Book Tickets',()=>{

    beforeEach(()=>{
        cy.server()
        cy.route('POST','/api/event/slug').as('slug')
        cy.route('GET','/api/get/deliveryoptions/**').as('deliveryOptions')
        cy.route('GET','/api/ticketcategories/**').as('ticketCat')
        cy.route('POST','/api/loginUserToDeliveryOption/transaction').as('loginUser')
        cy.route('GET','/api/availability/**').as('availability')
        cy.route('GET','/api/country/all').as('country')
        cy.route('https://dataservice.accuweather.com/forecasts/v1/daily/1day/***')
        .as('weather')
        cy.route('GET','/locations/v1/cities/**').as('locations')

    })

    it('should be able to book monument tickets',()=>{        

        cy.visit('/place/see-and-do/taj-mahal/monuments')

        cy.fixture('bookTicketsData').then((ticketData)=>{

            ticketData.forEach((tData)=>{
           
            // cy.get('a').contains(tData.monumentName).click({force:true})    
            let btnBookWeekday =  Cypress.moment().add(dayPlus,'days').format('dddd')
            cy.log(btnBookWeekday)
            // cy.wait(3000)

            cy.wait('@slug',{timeout:15000})
            .then((response)=>{
                let availableDays = []
                cy.wrap(response.response.body.regularTimeModel.customTimeModel).then(($customTime)=>{
                    if($customTime.length>0){
                        $customTime.forEach((days)=>{
                            availableDays.push(days.day)
                    })
                    // cy.log(availableDays)
                    // cy.log(!availableDays.includes(btnBookWeekday))
                    while(!availableDays.includes(btnBookWeekday)){
                        cy.log('true')
                        dayPlus++
                        btnBookDate = Cypress.moment().add(dayPlus,'days').format('MMMM D, YYYY')
                        btnBookWeekday =  Cypress.moment().add(dayPlus,'days').format('dddd')
                    }

                    }


            cy.log(btnBookDate)      
            let btnBookDay=btnBookDate.split(',')[0].split(' ')[1]
            cy.log(btnBookDate.split(',')[0].split(' ')[1])
            cy.contains(btnBookNowText,{timeout:10000}).click()
            cy.wait('@ticketCat')
            cy.wait('@locations')
            cy.wait('@weather')
            // cy.closeChatPopup()
          //  cy.get('abbr[aria-label="'+btnBookDate+'"]').click()
            cy.get('.rdrDayNumber').children('span:contains("'+btnBookDay+'")').then((res)=>{
                if(res.length>0){
                    cy.get('.rdrDayNumber').children('span:contains("'+btnBookDay+'")').eq(0).click()
                }else{
                    cy.get('.rdrDayNumber').children('span:contains("'+btnBookDay+'")').click()
                }
            })
            cy.wrap(response.response.body.regularTimeModel.timeModel).then(($timeModel)=>{
                if($timeModel.length>0){
                cy.get('h5').contains('Select Time: ').children('div').click()
                }
            })
                })


        })
            cy.get('h5').contains('Select Ticket Category').next().next().children()
            .find('.add-to-cart-btns').contains('+').click({force:true})
            cy.contains(btnContinueText).click()
            cy.get(btnPlaceOrder).contains(btnPlaceOrderText).click({force:true})
            cy.wait('@country')

            if(Cypress.config().baseUrl.includes("dev.feelaplace")){
                cy.login(Cypress.env('prat_username'),Cypress.env('prat_password'))
            }else{
                cy.login(Cypress.env('username'),Cypress.env('password'))
            }          
            cy.wait('@loginUser',{timeout: 15000})
            cy.wait('@country')
            cy.fillCustomerDetails()
            cy.get('input[value="Submit"]').click()
            cy.wait('@deliveryOptions')
            cy.wait('@country')
            cy.get('p[class="mb-2"]').contains(monumentName).parent().children().contains(tData.deliveryType).click()
            cy.contains(btnContinueText).click()
            cy.url().should('contains',Cypress.config().baseUrl+'payment')
        })

    })


    })

    it('should be add and remove items from cart and feel more again',()=>{

        cy.server()
        cy.route('POST','/api/dynamicsections').as('dynamicsections')
        cy.route('POST','/api/event/slug').as('slug')
        cy.route('POST','/api/loginuser/transaction').as('loginuser')
        cy.route('GET','/api/country/all').as('country')
        // let placeName = []
        
          places.forEach((place)=>{
            let btnBookWeekday =  Cypress.moment().add(dayPlus,'days').format('dddd')
            // cy.log(btnBookWeekday)
            cy.visit(place.url)

            cy.wait('@slug',{timeout:15000})
            .then((response)=>{
                let availableDays = []
                cy.wrap(response.response.body.regularTimeModel.customTimeModel).then(($customTime)=>{
                    if($customTime.length>0){
                        $customTime.forEach((days)=>{
                            availableDays.push(days.day)
                    })

                    while(!availableDays.includes(btnBookWeekday)){
                        cy.log('true')
                        dayPlus++
                        btnBookDate = Cypress.moment().add(dayPlus,'days').format('MMMM D, YYYY')
                        btnBookWeekday =  Cypress.moment().add(dayPlus,'days').format('dddd')
                    }

                    }
            let btnBookDay=btnBookDate.split(',')[0].split(' ')[1]                    
            cy.contains(btnBookNowText,{timeout:10000}).click()
            cy.wait('@ticketCat')
            cy.wait('@locations')
            cy.wait('@weather')
            //cy.get('abbr[aria-label="'+btnBookDate+'"]').click()
            cy.get('.rdrDayNumber').children('span:contains("'+btnBookDay+'")').then((res)=>{
                if(res.length>0){
                    cy.get('.rdrDayNumber').children('span:contains("'+btnBookDay+'")').eq(0).dblclick()
                }else{
                    cy.get('.rdrDayNumber').children('span:contains("'+btnBookDay+'")').dblclick()
                }
            })

            cy.get('.mb-3.pink-color.text-center').parent().children().each(($el)=>{
                cy.log($el)
                if($el.attr('class').includes('text-center pb-4')){
                    cy.get('h5').contains('Select Time: ').children('div').click()
                }
               // $el.children('div').includes('text-center pb-4')
                //cy.get('h5').contains('Select Time: ').children('div').click()
            })
           // cy.get('.calendar-picker.col-sm-4').parent().siblings().each(($el)=>{
                // cy.log($el.attr('class'))
            //     cy.log($el)
            //     if($el.attr('class').includes('form-control shadow-sm mx-auto mb-4')){
            //         cy.get('.form-control.shadow-sm.mx-auto.mb-4').children('option').first().next().invoke('val')
            //         .then((val)=>{
            //             cy.get('.form-control.shadow-sm.mx-auto.mb-4').select(val)
            //         })

            //     }

            //     if($el.attr('class').includes('text-center pb-4')){
            //         cy.get('h5').contains('Select Time: ').children('div').click()
            //     }

            //  })

            })    
  //            cy.get('.badge.badge-secondary.mr-1').click()
         
            
            let ticketCat = response.response.body.ticketCategory
            let ticketSelected = 'no'


            ticketCat.forEach((tCat)=>{
                if(tCat.name.includes('Adult') && ticketSelected=='no'){
                ticketSelected ='yes'
                cy.get('h5').contains('Select Ticket Category').siblings('div').contains(tCat.name)
                .parent().parent().find('.add-to-cart-btns').contains('+').click({force:true})
                }else if(tCat.name.includes('ADULT')){
                    ticketSelected ='yes'
                    cy.get('h5').contains('Select Ticket Category').siblings('div').contains(tCat.name)
                    .parent().parent().find('.add-to-cart-btns').contains('+').click({force:true})
                    }
            })

        })

            cy.contains(btnContinueText).click({force:true})

          })
          cy.get(imgFeelCart).eq(0).click()
          cy.get('.header-list').children('a').contains('Bag').click()

          places.forEach((place)=>{
              cy.get('.mb-2').contains(place.name).should('exist')
          })
            
    })

    it('should be able to continue booking for tickets with date and time',()=>{        

      //  cy.visit('/ticket-purchase-selection/14C77392-C127-45B7-B9AF-1387B5EB7975')
        cy.visit('/ticket-purchase-selection/28B2B0A0-E6EA-4C9D-A032-8AC4015D9D7A')
        cy.fixture('bookTicketsData').then((ticketData)=>{

            ticketData.forEach((tData)=>{
           
            let btnBookWeekday =  Cypress.moment().add(dayPlus,'days').format('dddd')
            cy.log(btnBookWeekday)

            cy.wait('@ticketCat',{timeout:15000})
            .then((res)=>{
                cy.request('GET',res.url).then((response)=>{


                cy.log(response)
                let availableDays = []
                cy.wrap(response.body.regularTimeModel.customTimeModel).then(($customTime)=>{
                    if($customTime.length>0){
                        $customTime.forEach((days)=>{
                            availableDays.push(days.day)
                    })
                    // cy.log(availableDays)
                    // cy.log(!availableDays.includes(btnBookWeekday))
                    while(!availableDays.includes(btnBookWeekday)){
                        cy.log('true')
                        dayPlus++
                        btnBookDate = Cypress.moment().add(dayPlus,'days').format('MMMM D, YYYY')
                        btnBookWeekday =  Cypress.moment().add(dayPlus,'days').format('dddd')
                    }

                    }
            let btnBookDay=btnBookDate.split(',')[0].split(' ')[1]          
            // cy.contains(btnBookNowText,{timeout:10000}).click()
            // cy.wait('@ticketCat')
            // cy.closeChatPopup()
           // cy.get('abbr[aria-label="'+btnBookDate+'"]').click()
           cy.get('.rdrDayNumber').children('span:contains("'+btnBookDay+'")').then((res)=>{
            if(res.length>0){
                cy.get('.rdrDayNumber').children('span:contains("'+btnBookDay+'")').eq(0).click()
            }else{
                cy.get('.rdrDayNumber').children('span:contains("'+btnBookDay+'")').click()
            }
        })
            //cy.wait('@availability')

            cy.wrap(response.body.regularTimeModel.timeModel).then(($timeModel)=>{
                if($timeModel.length>0){
                cy.get('h5').contains('Select Time: ').children('div').click()
                }
            })

            cy.get('.mb-3.pink-color.text-center').parent().children().each(($el)=>{
                cy.log($el)
                if($el.attr('class').includes('text-center pb-4')){
                    cy.get('h5').contains('Select Time: ').children('div').click()
                }
            })
            // cy.get('.react-calendar.shadow-sm.border.mx-auto.mb-3').parent().siblings().each(($el)=>{
            //     // cy.log($el.attr('class'))
            //     if($el.attr('class').includes('form-control shadow-sm mx-auto mb-4')){
            //         cy.get('.form-control.shadow-sm.mx-auto.mb-4').children('option').first().next().invoke('val')
            //         .then((val)=>{
            //             cy.get('.form-control.shadow-sm.mx-auto.mb-4').select(val)
            //         })

            //     }

            //     if($el.attr('class').includes('text-center pb-4')){
            //         cy.get('h5').contains('Select Time: ').children('div').click()
            //     }

            //  })

            })    


            let ticketCat = response.body.ticketCategory
            cy.log(ticketCat.length)
            let iter

            for(iter=0;iter<ticketCat.length;iter++){
                if(ticketCat[iter].name.includes('Adult')){
                cy.get('div').contains(ticketCat[iter].name)
                .parent().parent().find('.add-to-cart-btns').contains('+').click({force:true})
                break
                }

                if(ticketCat[iter].name.includes('ADULT')){
                    cy.get('div').contains(ticketCat[iter].name)
                    .parent().parent().find('.add-to-cart-btns').contains('+').click({force:true})
                    break
                    }                    
            }
        })

        })
            cy.contains(btnContinueText).click()
        })
        cy.get(btnPlaceOrder).should('exist')

    })


    })    

    it('should throw error when trying to book tickets for only children',()=>{        

        const stub = cy.stub()  
        cy.on ('window:alert', stub)
        //cy.visit('/ticket-purchase-selection/14C77392-C127-45B7-B9AF-1387B5EB7975')
        cy.visit('/ticket-purchase-selection/28B2B0A0-E6EA-4C9D-A032-8AC4015D9D7A')
        cy.fixture('bookTicketsData').then((ticketData)=>{

            ticketData.forEach((tData)=>{
           
            let btnBookWeekday =  Cypress.moment().add(dayPlus,'days').format('dddd')
            cy.log(btnBookWeekday)

            cy.wait('@ticketCat',{timeout:15000})
            .then((res)=>{
                cy.request('GET',res.url).then((response)=>{


                cy.log(response)
                let availableDays = []
                cy.wrap(response.body.regularTimeModel.customTimeModel).then(($customTime)=>{
                    if($customTime.length>0){
                        $customTime.forEach((days)=>{
                            availableDays.push(days.day)
                    })

                    while(!availableDays.includes(btnBookWeekday)){
                        cy.log('true')
                        dayPlus++
                        btnBookDate = Cypress.moment().add(dayPlus,'days').format('MMMM D, YYYY')
                        btnBookWeekday =  Cypress.moment().add(dayPlus,'days').format('dddd')
                    }

                    }
            let btnBookDay=btnBookDate.split(',')[0].split(' ')[1]  
           // cy.get('abbr[aria-label="'+btnBookDate+'"]').click()
           cy.get('.rdrDayNumber').children('span:contains("'+btnBookDay+'")').then((res)=>{
                if(res.length>0){
                    cy.get('.rdrDayNumber').children('span:contains("'+btnBookDay+'")').eq(0).click()
                }else{
                    cy.get('.rdrDayNumber').children('span:contains("'+btnBookDay+'")').click()
                }
            })
            cy.wrap(response.body.regularTimeModel.timeModel).then(($timeModel)=>{
                if($timeModel.length>0){
                cy.get('h5').contains('Select Time: ').children('div').click()
                }
            })
//            cy.wait('@availability')
            cy.get('.mb-3.pink-color.text-center').parent().children().each(($el)=>{
                cy.log($el)
                if($el.attr('class').includes('text-center pb-4')){
                    cy.get('h5').contains('Select Time: ').children('div').click()
                }
            })
            // cy.get('.react-calendar.shadow-sm.border.mx-auto.mb-3').parent().siblings().each(($el)=>{
            //     // cy.log($el.attr('class'))
            //     if($el.attr('class').includes('form-control shadow-sm mx-auto mb-4')){
            //         cy.get('.form-control.shadow-sm.mx-auto.mb-4').children('option').first().next().invoke('val')
            //         .then((val)=>{
            //             cy.get('.form-control.shadow-sm.mx-auto.mb-4').select(val)
            //         })

            //     }

            //     if($el.attr('class').includes('text-center pb-4')){
            //         cy.get('h5').contains('Select Time: ').children('div').click()
            //     }

            //  })

            })     

            let ticketCat = response.body.ticketCategory
            cy.log(ticketCat.length)
            let iter

            for(iter=0;iter<ticketCat.length;iter++){
                if(ticketCat[iter].name.includes('CHILD')){
                cy.get('div').contains(ticketCat[iter].name)
                .parent().parent().find('.add-to-cart-btns').contains('+').click({force:true})
                break
                }

                if(ticketCat[iter].name.includes('Child')){
                    cy.get('div').contains(ticketCat[iter].name)
                    .parent().parent().find('.add-to-cart-btns').contains('+').click({force:true})
                    break
                    }                    
            }
        })

        })
            // cy.contains(btnContinueText).click().then(() =>{
            //     expect(stub.getCall(0)).to.be.calledWith('Please select at least one adult')
            //   })
            cy.get('a:contains("Continue")').should('have.class','btn-lg btn btn-light opacity-disabled')
        })

    })


    })    

    it('should throw error when trying to book tickets for only infant',()=>{        

        const stub = cy.stub()  
        cy.on ('window:alert', stub)
        //cy.visit('/ticket-purchase-selection/14C77392-C127-45B7-B9AF-1387B5EB7975')
        cy.visit('/ticket-purchase-selection/28B2B0A0-E6EA-4C9D-A032-8AC4015D9D7A')

        cy.fixture('bookTicketsData').then((ticketData)=>{

            ticketData.forEach((tData)=>{
           
            let btnBookWeekday =  Cypress.moment().add(dayPlus,'days').format('dddd')
            cy.log(btnBookWeekday)

            cy.wait('@ticketCat',{timeout:15000})
            .then((res)=>{
                cy.request('GET',res.url).then((response)=>{


                cy.log(response)
                let availableDays = []
                cy.wrap(response.body.regularTimeModel.customTimeModel).then(($customTime)=>{
                    if($customTime.length>0){
                        $customTime.forEach((days)=>{
                            availableDays.push(days.day)
                    })

                    while(!availableDays.includes(btnBookWeekday)){
                        cy.log('true')
                        dayPlus++
                        btnBookDate = Cypress.moment().add(dayPlus,'days').format('MMMM D, YYYY')
                        btnBookWeekday =  Cypress.moment().add(dayPlus,'days').format('dddd')
                    }

                    }
            let btnBookDay=btnBookDate.split(',')[0].split(' ')[1]  
            // cy.get('abbr[aria-label="'+btnBookDate+'"]').click()
            cy.get('.rdrDayNumber').children('span:contains("'+btnBookDay+'")').then((res)=>{
                if(res.length>0){
                    cy.get('.rdrDayNumber').children('span:contains("'+btnBookDay+'")').eq(0).click()
                }else{
                    cy.get('.rdrDayNumber').children('span:contains("'+btnBookDay+'")').click()
                }
            })

            cy.wrap(response.body.regularTimeModel.timeModel).then(($timeModel)=>{
                if($timeModel.length>0){
                cy.get('h5').contains('Select Time: ').children('div').click()
                }
            })
            //cy.wait('@availability')
            cy.get('.mb-3.pink-color.text-center').parent().children().each(($el)=>{
                cy.log($el)
                if($el.attr('class').includes('text-center pb-4')){
                    cy.get('h5').contains('Select Time: ').children('div').click()
                }
            })
            // cy.get('.react-calendar.shadow-sm.border.mx-auto.mb-3').parent().siblings().each(($el)=>{
            //     // cy.log($el.attr('class'))
            //     if($el.attr('class').includes('form-control shadow-sm mx-auto mb-4')){
            //         cy.get('.form-control.shadow-sm.mx-auto.mb-4').children('option').first().next().invoke('val')
            //         .then((val)=>{
            //             cy.get('.form-control.shadow-sm.mx-auto.mb-4').select(val)
            //         })

            //     }

            //     if($el.attr('class').includes('text-center pb-4')){
            //         cy.get('h5').contains('Select Time: ').children('div').click()
            //     }

            //  })

            })    


            let ticketCat = response.body.ticketCategory
            cy.log(ticketCat)
            cy.log(ticketCat.length)
            let iter

            for(iter=0;iter<ticketCat.length;iter++){
                if(ticketCat[iter].name.includes('Child')){
                cy.get('span').contains(ticketCat[iter].name)
                .parent().parent().find('.add-to-cart-btns').contains('+').click({force:true})
                break
                }

                if(ticketCat[iter].name.includes('CHILD')){
                    cy.get('div').contains(ticketCat[iter].name)
                    .parent().parent().find('.add-to-cart-btns').contains('+').click({force:true})
                    break
                    }                    
            }
        cy.get('a:contains("Continue")').should('have.class','btn-lg btn btn-light opacity-disabled')

        for(iter=0;iter<ticketCat.length;iter++){
            if(ticketCat[iter].name.includes('Adult')){
            cy.get('span').contains(ticketCat[iter].name)
            .parent().parent().find('.add-to-cart-btns').contains('+').click({force:true})
            cy.get('span').contains(ticketCat[iter].name)
            .parent().parent().find('.add-to-cart-btns').contains('-').click({force:true})
            }

            if(ticketCat[iter].name.includes('Child')){
                cy.get('div').contains(ticketCat[iter].name)
                .parent().parent().find('.add-to-cart-btns').contains('+').click({force:true})
                break
                }                    
        }
    })

    })
            // cy.contains(btnContinueText).click().then(() =>{
            //     expect(stub.getCall(0)).to.be.calledWith('Please select at least one adult')
              //})
              cy.contains('Adult (18+) to continue').should('exist')
        })

    })


    })    



})