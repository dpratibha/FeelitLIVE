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



describe('Hoho',()=>{

    before(()=>{
        cy.server()
        cy.route('POST','/api/dynamicsections').as('dynamicsections')
        cy.route('POST','/api/event/slug').as('slug')
        cy.route('POST','/api/loginuser/transaction').as('loginuser')


    })
   

    it('should successfully be able to book a hoho place ride',()=>{
        cy.fixture('hoho').then((place)=>{
                let x = Math.floor(Math.random()*place.length)

                cy.fixture('bookTicketsData').then((ticketData)=>{

                    ticketData.forEach((tData)=>{
                   
                    let btnBookWeekday =  Cypress.moment().add(dayPlus,'days').format('dddd')
                    cy.log(btnBookWeekday)
                    cy.visit('/'+place[x].URL)
        
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
                                btnBookDate = Cypress.moment().add(dayPlus,'days').format('YYYY-MM-DDT'+'00:00:00.000')
                                btnBookWeekday =  Cypress.moment().add(dayPlus,'days').format('dddd')
                            }
        
                            }
                            
                    cy.contains(btnBookNowText,{timeout:10000}).click()
                    cy.get('time[datetime="'+btnBookDate+'"]',{timeout:10000}).click()
        

                    cy.get('.react-calendar.shadow-sm.border.mx-auto.mb-3').siblings().each(($el)=>{
                        cy.log($el.attr('class'))
                        if($el.attr('class').includes('form-control shadow-sm mx-auto mb-4')){
                            cy.get('.form-control.shadow-sm.mx-auto.mb-4').children('option').first().next().invoke('val')
                            .then((val)=>{
                                cy.get('.form-control.shadow-sm.mx-auto.mb-4').select(val)
                            })
        
                        }

                     })

                    })    
                    
                    let ticketCat = response.response.body.ticketCategory

                    ticketCat.forEach((tCat)=>{
                        if(tCat.name.includes('Adult')){
                        cy.get('div').contains(tCat.name)
                        .parent().parent().find('.add-to-cart-btns').contains('+').click({force:true})
                        }

                        if(tCat.name.includes('ADULT')){
                            cy.get('div').contains(tCat.name)
                            .parent().parent().find('.add-to-cart-btns').contains('+').click({force:true})
                            }
                    })
        
                })

                    cy.contains(btnContinueText).click({force:true})
                    cy.get(btnPlaceOrder).contains(btnPlaceOrderText).click({force:true})
                    cy.login(Cypress.env('username'),Cypress.env('password'))
                    cy.wait('@loginuser')
                    cy.fillCustomerDetails()
                    cy.get('input[value="Submit"]').click()
                    cy.contains('PrintAtHome').click()
                    cy.contains(btnContinueText).click()
                    cy.url().should('contains',Cypress.config().baseUrl+'payment')
                })
        
            })


            })

    })

    

})

