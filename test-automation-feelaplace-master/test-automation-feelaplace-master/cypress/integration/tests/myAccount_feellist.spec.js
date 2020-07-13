const imgUserIcon = 'img[alt="Feel User Icon"]'
const btnEdit = '.btn.btn-success:contains("Edit")'
const selCountryCodeMyProfile = 'select[id="phoneCode"]'
const inpPhoneNumber = 'input[id="phoneNumber"]'
const radMale = 'input[value="male"]'
const btnSave = '.btn.btn-success:contains("Save")'
const lnkSignOut = 'a:contains("Sign out")'
const lnkMyAccount = '.btn.btn-link.p-0.ml-4.site-text-link:contains("My Account")'
const lnkMyfeelList = '.btn.btn-block.btn-outline-secondary.text-left:contains("My feelList")'
const lnkAddress = '.btn.btn-block.btn-outline-secondary.text-left:contains("Addresses")'
const lnkSavedCards = '.btn.btn-block.btn-outline-secondary.text-left:contains("Saved Cards")'
const btnAddAddress = '.btn.btn-outline-secondary:contains(" Add New Address")'
const inpFirstName = 'input[name="firstName"]'        
const inpLastName = 'input[name="lastName"]'   
const inpEmail = 'input[id="email"]'   
const inpPhoneNumberAddress = 'input[name="phoneNumber"]'
const inpDateOfBirth = 'input[id="dob"]'
const selPhoneCode = 'select[name="phoneCode"]'    
const selCountry = 'select[name="country"]'      
const inpAddressLine = 'input[name="addressLine1"]'   
const inpZipCode = 'input[name="zipcode"]'   
const btnSubmit = 'button[type="submit"]'
let phnNumber = Math.round(Math.random()*10000000000)
const btnAddCard = '.btn.btn-outline-secondary:contains(" Add New Card")'
const inpCardNumber ='input[name="cardNumber"]' 
const inpNameonCard = 'input[name="nameOnCard"]' 
const selMonth = 'select[name="expiryMonth"]'
const selYear ='select[name="expiryYear"]'
const inpCardlabel ='input[name="description"]' 
const lnkLogin='a:contains("Log in")'
const lnkHost='a[id="myHostbtn"]'
const lnkHostOnline='a:contains("Host Online")'
const lnkHostReal='a:contains("Host in-real-life")'
const lnkReports='a:contains("Reports")'
const btnClose='a.close-popup.btn-primary.rounded-circle:contains("X")'

describe('My Account Verification',()=>{
    beforeEach(()=>{
        cy.server()
        cy.route('POST','/api/session/login').as('login')
        cy.route('POST','/api/userprofile').as('userprofile')
        cy.route('POST','/api/userprofile/updatedetails').as('updateDetails')
        cy.route('POST','/api/useraddress').as('useraddress')
        cy.route('POST','api/useraddress/all').as('useraddressall')
        cy.route('POST','/api/usercard').as('usercard')
        cy.route('POST','/api/usercard/all').as('usercardall')
        cy.route('POST','/api/usercard/delete').as('usercarddelete')
        
    })

    it('should open my account verify fields are not blank and edit my account info',()=>{

        cy.visit('/') 
        // cy.get(btnClose).parent().parent().then(($res)=>{
        //     cy.log($res)
        //     if($res.attr('style').includes('hidden')){
    
        //     }else{
        //           cy.get(btnClose).should('exist').click()
        //     }
        //   })
        cy.get(lnkLogin).should('exist').click()
        cy.login(Cypress.env('username'),Cypress.env('password'))
        cy.wait('@login')
        // cy.wait(2000)
        cy.url().should('eq',Cypress.config().baseUrl)
        //cy.get(imgUserIcon).click()
        cy.get(lnkMyAccount).should('exist').click()
        cy.wait('@userprofile')
        // cy.url().should('contains',Cypress.config().baseUrl+'account')
        cy.get(inpFirstName).should('have.attr','value').and('not.equals','')
        cy.get(inpLastName).should('have.attr','value').and('not.equals','')
        cy.get(inpEmail).should('have.attr','value').and('not.equals','')
        // cy.get(inpPhoneNumber).should('have.attr','value').and('not.equals','')
        cy.get(inpDateOfBirth).should('have.attr','value').and('not.equals','')
        cy.get('a:contains("support@feelitLIVE.com")').should('exist')
        .and('have.attr','href')
        .and('equal','mailto:support@feelitLIVE.com')
        cy.get(btnEdit).click()
        cy.get(selCountryCodeMyProfile).select('91')
        cy.get(inpPhoneNumber).clear()
        cy.get(inpPhoneNumber).type(phnNumber)
        cy.get(radMale).click()
        cy.get(btnSave).click()
        cy.wait('@updateDetails')
        cy.get(inpPhoneNumber,{timeout:10000}).should('have.attr','value').and('contain',phnNumber)
       // cy.get(imgUserIcon).click()
        cy.get(lnkSignOut).click()

        // verify details on re login
        cy.visit('/')
        cy.get(lnkLogin).should('exist').click() 
        cy.login(Cypress.env('username'),Cypress.env('password'))
        cy.wait('@login')
        // cy.wait(2000)
        // cy.url().should('eq',Cypress.config().baseUrl)
        // cy.get(imgUserIcon).click()
        // cy.contains('My Account').should('exist').click()
        cy.visit('/account  ')

        cy.wait('@userprofile')
        cy.get(inpPhoneNumber).should('have.attr','value').and('contain',phnNumber)
   
    })

    
    it('should be able to add address',()=>{
        
        cy.visit('/')
        // cy.get(btnClose).parent().parent().then(($res)=>{
        //     cy.log($res)
        //     if($res.attr('style').includes('hidden')){
    
        //     }else{
        //           cy.get(btnClose).should('exist').click()
        //     }
        //   })
        cy.get(lnkLogin).should('exist').click() 
        cy.login(Cypress.env('username'),Cypress.env('password'))
        cy.wait('@login')
        // cy.wait(2000)
        // cy.url().should('eq',Cypress.config().baseUrl)
        // cy.get(imgUserIcon).click()
        // cy.contains('My Account').should('exist').click()
        // cy.get(lnkAddress).click()
        cy.visit('/account/addresses')
        cy.wait('@useraddressall')
        cy.get(btnAddAddress).click()
        cy.get(inpFirstName).type('Ayan')
        cy.get(inpLastName).type('Test')
        cy.get(selPhoneCode).select('91')
        cy.get(inpPhoneNumberAddress).type('9123022532')
        cy.get(selCountry).select('India')
        cy.get(inpAddressLine).type('Hitech City Main Road{enter}')
        cy.wait(3000)
        cy.get('.autocomplete-dropdown-container.list-group').children().first().click()
        // cy.get(inpAddressLine).type('{downarrow}')
        // .click()
        cy.get(inpZipCode).type('500081',{force:true})

        cy.get(btnSubmit).click({force:true})
        cy.wait('@useraddress')
        cy.wait('@useraddressall')

        cy.get('p').contains('Ayan Test').should('exist')
        cy.get('p').contains('9123022532').should('exist')
        cy.get('p').contains('Hitech City Main Road').should('exist')
        // cy.get('a').contains(' Remove').click()
    })

    it('should remove address',() =>{
        cy.route('POST','/api/useraddress/delete').as('deleteAddress')
        cy.visit('/')
        // cy.get(btnClose).parent().parent().then(($res)=>{
        //     cy.log($res)
        //     if($res.attr('style').includes('hidden')){
    
        //     }else{
        //           cy.get(btnClose).should('exist').click()
        //     }
        //   })
        cy.get(lnkLogin).should('exist').click() 
        cy.login(Cypress.env('username'),Cypress.env('password'))
        cy.wait('@login')
        // cy.url().should('eq',Cypress.config().baseUrl)
        // cy.get(imgUserIcon).click()
        // cy.contains('My Account').should('exist').click()
        // cy.get(lnkAddress).click()
        cy.visit('/account/addresses')

        cy.wait('@useraddressall')
        cy.get('button:contains(" Remove")').each(($el)=>{
            $el.click()
            cy.wait('@deleteAddress')
        })

       })

    it('should save cards',() =>{
        let cardNo= Math.floor(Math.random()*10000000000000000)
        cy.visit('/')
        // cy.get(btnClose).parent().parent().then(($res)=>{
        //     cy.log($res)
        //     if($res.attr('style').includes('hidden')){
    
        //     }else{
        //           cy.get(btnClose).should('exist').click()
        //     }
        //   })
        cy.get(lnkLogin).should('exist').click()
        cy.login(Cypress.env('username'),Cypress.env('password'))
        cy.wait('@login')
        cy.visit('/account/saved-cards')
            // cy.get(imgUserIcon).click()
            // cy.contains('My Account').click({force:true})
        // cy.get(lnkSavedCards).click()
        cy.wait('@usercardall')
        cy.get(btnAddCard).click()
        cy.get(inpCardNumber).type(cardNo)
        cy.get(inpNameonCard).type('Pratibha')
        cy.get(selMonth).select('08')
        cy.get(selYear).select('2025')
        cy.get(inpCardlabel).type('Test Card')
        cy.get(btnSubmit).click({force:true})
         cy.wait('@usercard')
         cy.wait('@usercardall')
        cy.get('li').contains(cardNo).should('exist')    
    })
    
    it('should remove cards',() =>{
        cy.visit('/')
        // cy.get(btnClose).parent().parent().then(($res)=>{
        //     cy.log($res)
        //     if($res.attr('style').includes('hidden')){
    
        //     }else{
        //           cy.get(btnClose).should('exist').click()
        //     }
        //   })
        cy.get(lnkLogin).should('exist').click()
        cy.login(Cypress.env('username'),Cypress.env('password'))
        cy.wait('@login')
        // cy.url().should('eq',Cypress.config().baseUrl)
        // cy.get(imgUserIcon).click()
        // cy.contains('My Account').should('exist').click()
        // cy.get(lnkSavedCards).click()
        cy.visit('/account/saved-cards')
        cy.wait('@usercardall')
       //cy.get('a').contains(' Remove') another way
       cy.get('a:contains("Remove")')     
      .click({ multiple: true })
    })

    it('should be able to verify the links under the Host section',()=>{
        cy.visit('/') 
        // cy.get(btnClose).parent().parent().then(($res)=>{
        //     cy.log($res)
        //     if($res.attr('style').includes('hidden')){
    
        //     }else{
        //           cy.get(btnClose).should('exist').click()
        //     }
        //   })
        cy.get(lnkLogin).should('exist').click()
        cy.login(Cypress.env('username'),Cypress.env('password'))
        cy.wait('@login')
        cy.get(lnkMyAccount).should('exist').click()
        cy.wait('@userprofile')
        cy.get(lnkHost).should('exist').click()
        cy.get(lnkHostOnline).should('exist')
        cy.get(lnkHostReal).should('exist')
        cy.get(lnkReports).should('exist')

    })

    after(()=>{

    })
})

describe('feellist verification',()=>{

    beforeEach(()=>{

        cy.server()
        cy.route('POST','/api/session/login').as('login')
        cy.route('GET','/api/category/all-top-29').as('top29')
        cy.route('GET','/api/category').as('category')
        cy.route('GET','/api/section/1').as('sections')



    })

    it('should successfully add items to feellist',()=>{


        cy.visit('/')
        // cy.get(btnClose).parent().parent().then(($res)=>{
        //     cy.log($res)
        //     if($res.attr('style').includes('hidden')){
    
        //     }else{
        //           cy.get(btnClose).should('exist').click()
        //     }
        //   })
        cy.wait('@category')
        cy.wait('@top29')
        cy.wait('@sections')
        cy.request('GET','/api/category/all-top-29').then((response)=>{
            // cy.get('.card.fil-tils.border-0.h-100').eq(1)
            // .children
            cy.get('a:contains('+response.body.categoryEvents[0].categoryEvent.name+')',{timeout:10000})
            // .parent().parent().parent().children('.tinerary-box').click()
            .parent().parent().children('.feellist-tag').children('img').click()
            cy.login(Cypress.env('username'),Cypress.env('password'))
            cy.wait('@login')
            cy.wait(5000)
            cy.get('a:contains('+response.body.categoryEvents[0].categoryEvent.name+')',{timeout:10000})
            .parent().parent().children('.feellist-tag').children('img').click()
            cy.get('a:contains('+response.body.categoryEvents[1].categoryEvent.name+')',{timeout:10000})
            .parent().parent().children('.feellist-tag').children('img').click()
           // cy.get('img[src="https://static7.feelaplace.com/images/icons/feellist.svg"]').parent().click()
            cy.get('img[alt="FIL Shoping Bag"]').eq(1).should('be.visible').parent().click()
            cy.get('li[class="clearfix"]').contains(response.body.categoryEvents[0].categoryEvent.name)
            .should('exist')
            cy.get('li[class="clearfix"]').contains(response.body.categoryEvents[1].categoryEvent.name)
            .should('exist')
            cy.visit('/account/feellist')
            cy.get('a:contains('+response.body.categoryEvents[0].categoryEvent.name+')')
            .should('exist')
            cy.get('a:contains('+response.body.categoryEvents[1].categoryEvent.name+')')
            .should('exist')        
        
            })
  
        })

    it('should successfully remove added items to feellist',()=>{
        cy.visit('/') 
        // cy.get(btnClose).parent().parent().then(($res)=>{
        //     cy.log($res)
        //     if($res.attr('style').includes('hidden')){
    
        //     }else{
        //           cy.get(btnClose).should('exist').click()
        //     }
        //   })
        cy.get(lnkLogin).should('exist').click()
        cy.login(Cypress.env('username'),Cypress.env('password'))
        cy.wait('@login')
        
    })

})



    
    
