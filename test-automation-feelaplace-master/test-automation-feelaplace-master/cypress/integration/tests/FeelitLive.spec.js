let dayPlus = 2
let btnEventDate = Cypress.moment().add(dayPlus,'days').format('DD/MM/YYYY')
const header='div[class="container-fluid"]'
const inpEmail = 'input[name="email"]'        
const inpPassword = 'input[name="password"]' 
const btnSubmit='button[type="submit"]'
const lnkFeelitlive='img[alt="Live Stream Logo"]'
const btnAddNewEvent='a[href="/createplace"]'
const inpEventTitle='input[placeholder="Enter Event Title"]'
const selEventCat='.ant-select-selection__placeholder'
const selArrow='span[class="ant-select-arrow"]'
const imgnoData='img[alt="No Data"]'
const selListsVal='.ant-select-dropdown-menu.ant-select-dropdown-menu-root.ant-select-dropdown-menu-vertical'
const iframeDesc='.cke_wysiwyg_frame.cke_reset'
const secDateTime='a[href="#DateTime"]'
const datepicSelectDate='.ant-calendar-picker-input.ant-input'
const inpdate='.ant-calendar-input'
const selectTimeZone='.form-group.mb-2.position-relative.col-sm-6'
const inpFromDate='div[class="d-inline-block"]'
const inpToDate='div[class="d-inline-block ml-2"]'
const timepicker='.ant-time-picker-panel-combobox'
const timepicker1='.ant-time-picker-panel-combobox'
const lnkEventImages='.place-listing'
const lnkImages='.col-12.multi-collapse.pt-3.collapse.in.show'
const btnCrop='.ant-btn.btn-primary.text-white'
const btnIndGroup='.btn.btn-outline-primary'
const selPerformanceType='.pl-4'
const fileUpload='input[type="file"]'
const radiobtnHost='button[class="ant-switch"]'
const inpHostFirstName='input[placeholder="Enter First Name"]'
const inpHostLastName='input[placeholder="Enter Last Name"]'
const inpHostEmail='input[placeholder="Enter Email"]'
const formAddanotherhost='.ant-drawer-title'
const btnAdd='button[class="btn btn-primary mt-2"]'
const tabActive='.tab-pane.fade.show.active'
const menuTicket='.css-kj6f9i-menu'
const alrConfirmation='div[class="ant-notification-notice-message"]'
const selTickets='.css-11unzgr'
const inpPrice='input[name="price"]'
const inpQuantity='input[name="quantity"]'
const inpAccPhNo='input[name="phoneNumber"]'
const btnNext='button[type="submit"]'
const tabAddOns='div[id="Addons"]'
const inpAccountName='input[placeholder="Enter Account Name"]'
const inpBankName='div[title="Select Bank Name"]'
const selValues='li[role="option"]'
const inpIFSCCode='input[aria-label="Enter Branch Code"]'
const inpAccountNumber='input[placeholder="Enter Account Number"]'
const inpConfirmAccNo='input[placeholder="Confirm Account Number"]'
const selGSTState='div[title="Select State"]'
const inpGSTNumber='input[placeholder="Enter GST Number"]'
const alreventsubmit='.ant-modal-confirm-title'
const inpCompanyName='input[placeholder="Enter Company Name"]'
const btnSmall='small'
const tableMyFeels='.rt-table'
const contentMyFeels='.rt-tbody'
const rowMyFeels='.rt-tr-group'
const colsMyFeels='.rt-tr.-odd'
const colMyFeels='.rt-td'
const alrTimeVal='div.text-danger'
const btndeleteHost='.fa.fa-trash-o.text-danger'
const tblhosts='div[id="Host"]'
const alrAddAnoHostVal='span.command-message-text:contains("Please fill out this field")'
const lnkEventtabs='a.nav-item.nav-link'
const iframeWel='iframe[aria-label="Appcues modal, providing in-app guidance"]'
const btnWelClose='a[aria-label="Close Appcues modal"]'
//admin page
const lnksLeftPane='.ant-menu.ant-menu-light.ant-menu-root.ant-menu-inline'
const lnkApproveModerate='a[href="/approve-moderate"]'
const inpSearchByPlaceName='.rt-thead.-filters'
const tableSrhResults='.rt-table'
const btnAction='button[id="placeSubmitButton"]'
const selApprovePublish='.dropdown-item'
const alrmsg='.ant-modal-confirm-title'
const btnOK='.ant-btn.ant-btn-primary'

//Live Stream 
const lnkEvent='.text-dark'
const lnkCategory='.btn.btn-sm.btn-outline-secondary.mr-1.ml-1'
const txtEventContent='div.row.pb-3.hoho-content'
const btnBookNow='.btn.site-primery-btn.text-uppercase'
const secTicketCats='.h6'
const txtPrice='span.pink-color.pr-3.h5'
const btnIncrement='.rounded-circle.border.increase-item'
const alrValidation='.text-center.text-danger'
const btnContinue='.btn-lg.site-primery-btn.px-5'
const iframePayment='iframe[name="__privateStripeFrame5"]'
const inpCardNumber='input[name="cardnumber"]'
const inpMMYY='input[name="exp-date"]'
const inpCVV='input[name="cvc"]'
const inpAddress='input[name="address"]'
const inpCity='input[name="city"]'
const inpState='input[name="state"]'
const inpCntry='input[name="country"]'
const inpZipcode='input[name="zipcode"]'
const inpPostal='input[name="postal"]'
const btnGoogle = 'button:contains("Log in with Google")'
const btnClose='a.close-popup.btn-primary.rounded-circle:contains("X")'
const lnkLogin='a:contains("Log in")'
const lnkLiveStream='a:contains("Online Live-Stream")'
const lnkSignup='a:contains("Sign up")'
const lnkAddToFL='div[title="Add to your feelList"]'
const imgCart='img[alt="FIL Shoping Bag"]'
const lnkCartBaglist='a[href="/itinerary"]:contains("Bags")'
const inpAddReview='input[name="newReview"]'
const secHeader='div.col-xl-5.col-lg-5.col-sm-12'
const secRevRat='div.col-sm-8.review-sec-head'
const secStars='div.rating'
const btnReviewSubmit='button[value="submit"]'
const txtReviews='span.review-text'
const inpSearchRev='input[name="search"]'
const srchResult='.col-sm-12.pt-3.mt-3.border-top.user-reviews'
const chkRatings='input[name="ratingFilterValue"]'
const lnkHostOnline='a:contains("Host online")'
const btnGetStarted='button[class="btn btn-primary"]:contains("GET STARTED FOR FREE")'
const inpFirstName = 'input[name="firstName"]'        
const inpLastName = 'input[name="lastName"]'   
const inpConfirmPassword = 'input[name="confirmPassword"]'  
const selPhoneCode = 'select[name="phoneCode"]'  
const inpInviteCode = 'input[name="inviteCode"]'
const inpPhoneNumber = 'input[name="phoneNumber"]' 
const btnAgreeContinue='button:contains("Agree and Continue")'
const alrDesc='span.ant-alert-description'
const btnSuccessContinue='a.btn.bnt-lg.site-primery-btn.mt-4:contains("Continue")'
const lnkfooterFeelitLive='a:contains("Host an online experience")'
const lnkRemFeelList='a.close'

//new user book tickets
let FName='TestFName'
let LName='TestLName'
let email='test.automation.cypress+'+Math.floor(Math.random()*100000)+'+@gmail.com'
let countryCode='India (91)'
let phNo='9999999999'
let password='Hello#123'
//===================================Functions==========================================================
function enterEventDetails(cat,eventDesc,iamHost,hostFName,hostLName,hostEmail,sechostFName,sechostLName,sechostEmail){

}

function signUpandActivate(FName,LName,Email,CountryCode,PhNum,password){

    cy.server()
    cy.route('POST','/api/account/register').as('register')
    cy.visit('/')

    // cy.get(btnClose).parent().parent().then(($res)=>{
    //     cy.log($res)
    //     if($res.attr('style').includes('hidden')){

    //     }else{
    //           cy.get(btnClose).should('exist').click()
    //     }
    //   })

        cy.get(lnkSignup).should('exist').click()
        cy.get(inpFirstName).type(FName)
        cy.get(inpLastName).type(LName)
        cy.get(inpEmail).type(Email)
        cy.get(inpPassword).type(password)
        cy.get(inpConfirmPassword).type(password)
        cy.get(selPhoneCode).select(CountryCode)
        cy.get(inpPhoneNumber).type(PhNum)
        cy.get(inpInviteCode).should('not.exist')

         // Checking email if its dev environment

        if(Cypress.config().baseUrl.includes("dev.feelitlive"))
        {
        cy.get(btnAgreeContinue).click()
        cy.wait('@register')
        cy.get(alrDesc)
            .should('contain','Thank you for registering with us! Please use the account activation link sent to you at '+Email+' in order to log in')
                    
                   
        cy.log("email is "+Email)

        cy.task("gmail:check", {
          from: "no-reply@feelitlive.com",
          to: Email,
          subject: "Thank you for joining feelaplace"
        })
        .then(email => {
          assert.isNotNull(email, `Email was not found`)
        })

          cy.task("gmail:get-messages", {
            options: {
              from: "no-reply@feelitlive.com",
              to:Email,
              subject: "Thank you for joining feelaplace",
              include_body: true
              // before: new Date(2020, 1, 10, 12, 31, 13), // Before September 24rd, 2019 12:31:13
              // after: new Date(2020, 1, 2) // After August 23, 2019
            }
          }).then(emails => {
            assert.isAtLeast(
              emails.length,
              1,
              "Expected to find at least one email, but none were found!"
            );
            const body = emails[0].body.html;
            // cy.log(body)
          
            assert.isTrue(
              body.indexOf(
                "/activate/"
              ) >= 0,
              "Found activate link!"
            )        
            cy.visit('/activate/'+body.split('/activate/')[1].split('\' style')[0])
            cy.contains(' Woohoo! Your account has now been created. Have a great experience as you feelitLIVE and tell us how you feel. You can also refer your friends to feelitLIVE by sending out invites from your “My account” section. ')
            .should('exist')
            cy.writeFile('./cypress/fixtures/registeredEmails.csv', Email+'\n', { flag: "a+"})

          })
        }
}


//====================================End Functions======================================================

describe('FeelitLive Testing',()=>{
    // beforeEach(()=>{

    //     cy.server()
    //     cy.route('https://admin.feelaplace.com/api/get/Currencies').as('event')
    //     if(Cypress.config().baseUrl.includes("dev.feelitlive")){
    //         cy.visit(Cypress.env('adminUrl') + 'create-event')
    //     }else if(Cypress.config().baseUrl.includes("www.feelitlive")){
    //         cy.visit(Cypress.env('hostfeelUrl') + 'host-online/details')            
    //     }
    //     cy.wait('@event')
    //     cy.get(iframeWel).its('0.contentDocument.body').should('not.be.empty')
    //     cy.get(iframeWel).should('exist').then(($res)=>{
    //         let iframeWelCon=$res.contents()
    //         cy.wrap(iframeWelCon[0].body).find(btnWelClose).should('exist').click()
    //     })
    // })

    
    it('Verify all Event categories',()=>{
        const arrEventCats = ["Art","Coaching","Conferences","Culinary","Fitness","Galleries","Literature","Meditation","Museums","Music",
        "Seminars","Spiritual","Tours","Worship","Yoga","eSports"]
        cy.server()
        cy.route('https://admin.feelaplace.com/api/get/Currencies').as('event')
        if(Cypress.config().baseUrl.includes("dev.feelitlive")){
            cy.visit(Cypress.env('adminUrl') + 'create-event')
        }else if(Cypress.config().baseUrl.includes("www.feelitlive")){
            cy.visit(Cypress.env('hostfeelUrl') + 'host-online/details')            
        }
        // cy.get(iframeWel).its('0.contentDocument.body').should('not.be.empty')
        // cy.get(iframeWel).should('exist').then(($res)=>{
        //     let iframeWelCon=$res.contents()
        //     cy.wrap(iframeWelCon[0].body).find(btnWelClose).should('exist').click()
        // })
        cy.wait('@event')
        cy.get(selArrow).click()
        cy.get(imgnoData).should('not.be.visible')
        cy.get(selListsVal).should('exist')
        arrEventCats.forEach((EventCat)=>{
            cy.log(EventCat)
            cy.get('li[role="option"]').contains(EventCat).should('exist')
                
        })

    }) 

    it('Verification of TimeZones in Event create page',()=>{
        cy.server()
        cy.route('https://admin.feelaplace.com/api/get/Currencies').as('event')
        if(Cypress.config().baseUrl.includes("dev.feelitlive")){
            cy.visit(Cypress.env('adminUrl') + 'create-event')
        }else if(Cypress.config().baseUrl.includes("www.feelitlive")){
            cy.visit(Cypress.env('hostfeelUrl') + 'host-online/details')            
        }
        cy.wait('@event')
        // cy.get(iframeWel).its('0.contentDocument.body').should('not.be.empty')
        // cy.get(iframeWel).should('exist').then(($res)=>{
        //     let iframeWelCon=$res.contents()
        //     cy.wrap(iframeWelCon[0].body).find(btnWelClose).should('exist').click()
        // })
        cy.get(inpEventTitle).type('Testing Timezones')
        cy.get(selArrow).click()
        cy.get(imgnoData).should('not.be.visible')
        cy.get(selValues).contains('Art').should('exist').click()
        // cy.get(iframeDesc).then((iframeDet)=>{
        //     const iframecontents=iframeDet.contents()
        //     cy.log(iframecontents)
        //     cy.wrap(iframecontents[0].documentElement).type('testing')
        // })
        cy.get(secDateTime).should('exist').click()
          .get(datepicSelectDate).click()
          .get(inpdate).should('exist').type(Cypress.moment().format('MM/DD/YYYY'))
          .type('{enter}')
        
          cy.get(selectTimeZone).should('be.visible').children().children().children('.ant-select-arrow').click()
          cy.get(imgnoData).should('not.be.visible')
          cy.get(selListsVal).should('exist').then((cats)=>{
            cy.log(cats)
            let childNodes=cats[1].childNodes
            cy.log(childNodes)
            childNodes.forEach((child) => {
                cy.log(child.innerText)
                cy.get('li[role="option"]').contains(child.innerText).should('exist')
                
            })

        })

    
    })

    it("should not be able to enter end time same as start time",()=>{
        cy.server()
        cy.route('https://admin.feelaplace.com/api/get/Currencies').as('event')
        if(Cypress.config().baseUrl.includes("dev.feelitlive")){
            cy.visit(Cypress.env('adminUrl') + 'create-event')
        }else if(Cypress.config().baseUrl.includes("www.feelitlive")){
            cy.visit(Cypress.env('hostfeelUrl') + 'host-online/details')            
        }
        cy.wait('@event')
        // cy.get(iframeWel).its('0.contentDocument.body').should('not.be.empty')
        // cy.get(iframeWel).should('exist').then(($res)=>{
        //     let iframeWelCon=$res.contents()
        //     cy.wrap(iframeWelCon[0].body).find(btnWelClose).should('exist').click()
        // })

        //Date & Time Section 
        cy.get(secDateTime).should('exist').click()
        .get(datepicSelectDate).click()
        .get(inpdate).should('exist').type(Cypress.moment().format('MM/DD/YYYY'))
        .type('{enter}')
        
        cy.get(selectTimeZone).should('be.visible').children().children().children('.ant-select-arrow').click()
        cy.get(imgnoData).should('not.be.visible')
        cy.get(selValues).contains('UTC-11 (UTC-11:00) Coordinated Universal Time-11').should('exist').click()
        cy.get(inpFromDate).click()
        let fromTime=(Cypress.moment().format('HH'))
        fromTime=parseInt(fromTime)+1
        let pmFound=0
        if(fromTime>12){
            fromTime=fromTime-12
            pmFound=1
        }
        if(fromTime<10){
            fromTime='0' + fromTime
        }
        cy.log(fromTime)
        cy.get(timepicker).children().eq(0).children().contains(fromTime).click()
        cy.get(timepicker).children().eq(1).children().contains('30').click()
        if(pmFound=1){
            cy.get(timepicker).children().eq(2).children().contains('pm').click()
        }else{
            cy.get(timepicker).children().eq(2).children().contains('am').click()

        }
        cy.get("label").contains("To").click()
        
        cy.get(inpToDate).click()
        cy.get(timepicker1).children().eq(0).children().contains(fromTime).click()
        cy.get(timepicker1).children().eq(1).children().contains('30').click()
        if(pmFound=1){
            cy.get(timepicker1).children().eq(2).children().contains('pm').click()
        }else{
            cy.get(timepicker1).children().eq(2).children().contains('am').click()

        }
        cy.get(alrTimeVal).contains('Start time should be less than end time').should('exist')

    })

    it("should not be able to enter end time lesser than start time",()=>{
        cy.server()
        cy.route('https://admin.feelaplace.com/api/get/Currencies').as('event')
        if(Cypress.config().baseUrl.includes("dev.feelitlive")){
            cy.visit(Cypress.env('adminUrl') + 'create-event')
        }else if(Cypress.config().baseUrl.includes("www.feelitlive")){
            cy.visit(Cypress.env('hostfeelUrl') + 'host-online/details')            
        }
        cy.wait('@event')
        // cy.get(iframeWel).its('0.contentDocument.body').should('not.be.empty')
        // cy.get(iframeWel).should('exist').then(($res)=>{
        //     let iframeWelCon=$res.contents()
        //     cy.wrap(iframeWelCon[0].body).find(btnWelClose).should('exist').click()
        // })
        //Date & Time Section 
        cy.get(secDateTime).should('exist').click()
        .get(datepicSelectDate).click()
        .get(inpdate).should('exist').type(Cypress.moment().format('MM/DD/YYYY'))
        .type('{enter}')
        
        cy.get(selectTimeZone).should('be.visible').children().children().children('.ant-select-arrow').click()
        cy.get(imgnoData).should('not.be.visible')
        cy.get(selValues).contains('UTC-11 (UTC-11:00) Coordinated Universal Time-11').should('exist').click()
        cy.get(inpFromDate).click()
        let fromTime=(Cypress.moment().format('HH'))
        fromTime=parseInt(fromTime)+2
        let pmFound=0
        if(fromTime>12){
            fromTime=fromTime-12
            pmFound=1
        }
        if(fromTime<10){
            fromTime='0' + fromTime
        }
        cy.log(fromTime)
        cy.get(timepicker).children().eq(0).children().contains(fromTime).click()
        cy.get(timepicker).children().eq(1).children().contains('30').click()
        if(pmFound=1){
            cy.get(timepicker).children().eq(2).children().contains('pm').click()
        }else{
            cy.get(timepicker).children().eq(2).children().contains('am').click()

        }
        let pmFound1=0
        fromTime=parseInt(fromTime)-1
        if(fromTime>12){
            fromTime=fromTime-12
            pmFound1=1
        }
        if(fromTime<10){
            fromTime='0' + fromTime
        }
        cy.get("label").contains("To").click()
        cy.get(inpToDate).click()
        cy.get(timepicker1).children().eq(0).children().contains(fromTime).click()
        cy.get(timepicker1).children().eq(1).children().contains('30').click()
        if(pmFound1=1){
            cy.get(timepicker1).children().eq(2).children().contains('pm').click()
        }else{
            cy.get(timepicker1).children().eq(2).children().contains('am').click()

        }
        cy.get(alrTimeVal).contains('Start time should be less than end time').should('exist')        

    })

    it('should get validation message when firstName,LastName,Email is not entered',()=>{
        cy.server()
        cy.route('https://admin.feelaplace.com/api/get/Currencies').as('event')
        if(Cypress.config().baseUrl.includes("dev.feelitlive")){
            cy.visit(Cypress.env('adminUrl') + 'create-event')
        }else if(Cypress.config().baseUrl.includes("www.feelitlive")){
            cy.visit(Cypress.env('hostfeelUrl') + 'host-online/details')            
        }
        cy.wait('@event')
        // cy.get(iframeWel).its('0.contentDocument.body').should('not.be.empty')
        // cy.get(iframeWel).should('exist').then(($res)=>{
        //     let iframeWelCon=$res.contents()
        //     cy.wrap(iframeWelCon[0].body).find(btnWelClose).should('exist').click()
        // })
        //About the host Section
        cy.get(lnkEventImages).contains('About the host').should('exist').click()

        cy.get(inpHostFirstName).should('exist').type('First Host')
        cy.get(inpHostLastName).should('exist').type('First host LName')
        cy.get(inpHostEmail).should('exist').type('firsthost@gmail.com')

        cy.get('label').contains('Bio').parent().children('div').children('div').children('div').children('div').children('iframe')
        .then((iframedesc1)=>{
            const iframecontents1=iframedesc1.contents()
            cy.log(iframecontents1)
            cy.wrap(iframecontents1[0].documentElement).type('desc1')

        })

        cy.get(btnSmall).contains('Add Another Host').should('exist').click()                        
        cy.get(btnAdd).should('exist').click()
        cy.get(formAddanotherhost).contains('Host Information').parent().parent().children('.ant-drawer-body').children().children().children('div')
        .children('div').eq(0).children().children().eq(0).find(inpHostFirstName).then(($val)=>{
            cy.log($val[0])
            expect($val[0].validationMessage).to.eq('Please fill out this field.')
        })
        cy.get(formAddanotherhost).contains('Host Information').parent().parent().children('.ant-drawer-body').children().children().children('div')
        .children('div').eq(0).children().children().eq(0).find(inpHostFirstName).type("another host first name ")  
        cy.get(btnAdd).should('exist').click()  
        cy.get(formAddanotherhost).contains('Host Information').parent().parent().children('.ant-drawer-body').children().children().children('div')
        .children('div').eq(0).children().children().eq(1).find(inpHostLastName).should('exist').then(($val)=>{
            cy.log($val[0])
            expect($val[0].validationMessage).to.eq('Please fill out this field.')
        })
        cy.get(formAddanotherhost).contains('Host Information').parent().parent().children('.ant-drawer-body').children().children().children('div')
        .children('div').eq(0).children().children().eq(1).find(inpHostLastName).should('exist').type("another host last name")
        cy.get(btnAdd).should('exist').click()
        cy.get(formAddanotherhost).contains('Host Information').parent().parent().children('.ant-drawer-body').children().children().children('div')
        .children('div').eq(1).children().children().find(inpHostEmail).should('exist').then(($val)=>{
            cy.log($val[0])
            expect($val[0].validationMessage).to.eq('Please fill out this field.')
        })
        cy.get(formAddanotherhost).contains('Host Information').parent().parent().children('.ant-drawer-body').children().children().children('div')
        .children('div').eq(1).children().children().find(inpHostEmail).should('exist').type('test123@gmail.com')
        cy.get(btnAdd).should('exist').click()
        cy.get(tblhosts).should('exist').children().children('.card.col-sm-6.p-0.mb-2').eq(0).should('exist')
        cy.get(tblhosts).should('exist').children().children('.card.col-sm-6.p-0.mb-2').eq(1).should('exist')

    })

    it('should get validation message when ticket type/currency/price is not entered',()=>{
        cy.server()
        cy.route('https://admin.feelaplace.com/api/get/Currencies').as('event')
        if(Cypress.config().baseUrl.includes("dev.feelitlive")){
            cy.visit(Cypress.env('adminUrl') + 'create-event')
        }else if(Cypress.config().baseUrl.includes("www.feelitlive")){
            cy.visit(Cypress.env('hostfeelUrl') + 'host-online/details')            
        }
        cy.wait('@event')
        // cy.get(iframeWel).its('0.contentDocument.body').should('not.be.empty')
        // cy.get(iframeWel).should('exist').then(($res)=>{
        //     let iframeWelCon=$res.contents()
        //     cy.wrap(iframeWelCon[0].body).find(btnWelClose).should('exist').click()
        // })
        cy.get(lnkEventtabs).contains('TICKETS').should('exist').click()
        cy.get('div[id="Ticket"]').should('exist').should('be.visible')
        cy.get(tabActive).should('exist').should('be.visible').children().children().children().children().children().children().eq(0).children()
        .children().eq(0).children('div').children('div').children('.css-1wy0on6').children('div').click()
        cy.get(menuTicket).should('be.visible')
        cy.get(selTickets).children().contains('General Admission').click()

        //select currency
        cy.get(tabActive).children().children().children().children().children().children().eq(0).children()
        .children().eq(1).children('div').children('div').children('.css-1wy0on6').children('div').click()
        cy.get(menuTicket).should('be.visible')
        cy.get(selTickets).children().contains('INR').click()

        //enter price
        cy.get('label').contains('Price').parent().children('input').type('100')

        cy.get(btnSmall).contains('Add Another Ticket Category').should('exist').click()
        cy.get('.ant-drawer.ant-drawer-right.ant-drawer-open').children('.ant-drawer-content-wrapper').children().children()
        .children('.ant-drawer-body').children().children().children('.form-group.my-2').children('button').click()
        cy.get('.ant-drawer.ant-drawer-right.ant-drawer-open').children('.ant-drawer-content-wrapper').children().children()
        .children('.ant-drawer-body').children().children().children('.collapse.multi-collapse.show.pt-3')
        .children('.form-group').eq(0).children().children('.col-sm-4').eq(2).children('input').then(($val)=>{
            expect($val[0].validationMessage).to.equal('Please fill out this field.')
        })

        //enter the price
        cy.get('.ant-drawer.ant-drawer-right.ant-drawer-open').children('.ant-drawer-content-wrapper').children().children()
        .children('.ant-drawer-body').children().children().children('.collapse.multi-collapse.show.pt-3')
        .children('.form-group').eq(0).children().children('.col-sm-4').eq(2).children('input').type('200')

        cy.get('.ant-drawer.ant-drawer-right.ant-drawer-open').children('.ant-drawer-content-wrapper').children().children()
        .children('.ant-drawer-body').children().children().children('.form-group.my-2').children('button').click()


        cy.get('.ant-drawer.ant-drawer-right.ant-drawer-open').children('.ant-drawer-content-wrapper').children().children()
        .children('.ant-drawer-body').children().children().children('.collapse.multi-collapse.show.pt-3')
        .children('.form-group').eq(0).children().children('.col-sm-4').eq(0).children('div').children('div').children('.css-1wy0on6')
        .children('div').children('svg').should('exist').click()
        cy.get(selTickets).children().contains('VIP').click()

        cy.get('.ant-drawer.ant-drawer-right.ant-drawer-open').children('.ant-drawer-content-wrapper').children().children()
        .children('.ant-drawer-body').children().children().children('.form-group.my-2').children('button').click()

        cy.get(tabActive).children().children('div').eq(0).children('.card.col-sm-6.p-0.my-2').eq(0).should('exist')
        cy.get(tabActive).children().children('div').eq(0).children('.card.col-sm-6.p-0.my-2').eq(1).should('exist')

    })
   
    if(Cypress.config().baseUrl.includes("dev.feelitlive")){
        it('should be able to create event with existing user',()=>{
        
            cy.server()
            cy.route('POST','/api/session/login').as('login')
            cy.route('https://admin.feelaplace.com/api/get/Currencies').as('event')
            cy.route('POST',Cypress.env('adminUrl') +'api/save/eventDetail').as('saveEvent')
            cy.route('POST',Cypress.env('adminUrl') + 'api/save/inventory').as('Inventory')
            cy.route('POST',Cypress.env('adminUrl') + 'api/save/event/finance').as('eventSubmit')
            
            cy.visit(Cypress.env('adminUrl'))
            cy.loginAdmin(Cypress.env("username"),Cypress.env("password"))
            cy.fixture('eventCreation').then((dataEvents)=>{

                dataEvents.forEach((dataEvent)=>{

                    cy.visit(Cypress.env('adminUrl') + 'create-event')
                    cy.wait('@event')
                    // cy.get(iframeWel).its('0.contentDocument.body').should('not.be.empty')
                    // cy.get(iframeWel).should('exist').then(($res)=>{
                    //     let iframeWelCon=$res.contents()
                    //     cy.wrap(iframeWelCon[0].body).find(btnWelClose).should('exist').click()
                    // })
                    //Title and Description Section
                    let strDate=btnEventDate
                    strDate=strDate.split('/')
                    strDate=strDate[0]+strDate[1]+strDate[2]
                    
                    cy.get(inpEventTitle).type(dataEvent.title + '_' + dataEvent.category + '_' + strDate)
                    cy.get(selArrow).click()
                    cy.get(imgnoData).should('not.be.visible')
                    //first().click
                    cy.get(selValues).contains(dataEvent.category).should('exist').click()
                    cy.get(iframeDesc).then((iframeDet)=>{
                        const iframecontents=iframeDet.contents()
                        cy.log(iframecontents)
                        cy.wrap(iframecontents[0].documentElement).type(dataEvent.description)
                    })

                    //Date & Time Section 
                    cy.get(secDateTime).should('exist').click()
                    .get(datepicSelectDate).click()
                    .get(inpdate).should('exist').type(Cypress.moment().format('MM/DD/YYYY'))
                    .type('{enter}')
                    
                    cy.get(selectTimeZone).should('be.visible').children().children().children('.ant-select-arrow').click()
                    cy.get(imgnoData).should('not.be.visible')
                    cy.get(selValues).contains(dataEvent.timezone).should('exist').click()
                    cy.get(inpFromDate).click()
                    let fromTime=(Cypress.moment().format('HH'))
                    fromTime=parseInt(fromTime)+1
                    let pmFound=0
                    if(fromTime>12){
                        fromTime=fromTime-12
                        pmFound=1
                    }
                    if(fromTime<10){
                        fromTime='0' + fromTime
                    }
                    cy.log(fromTime)
                    cy.get(timepicker).children().eq(0).children().contains(fromTime).click()
                    cy.get(timepicker).children().eq(1).children().contains('30').click()
                    if(pmFound=1){
                        cy.get(timepicker).children().eq(2).children().contains('pm').click()
                    }else{
                        cy.get(timepicker).children().eq(2).children().contains('am').click()

                    }
                    cy.get("label").contains("To").click()
                    cy.get(inpToDate).should('exist').click()
                    let toTime=(Cypress.moment().format('HH'))
                    toTime=parseInt(toTime)+2
                    let pmFound1=0
                    if(toTime>12){
                        toTime=toTime-12
                        pmFound1=1
                    }
                    if(toTime<10){
                        toTime='0' + toTime
                    }
                    cy.log(toTime)
                    cy.get(timepicker1).children().eq(0).children().contains(toTime).click()
                    cy.get(timepicker1).children().eq(1).children().contains('30').click()
                    if(pmFound1=1){
                        cy.get(timepicker1).children().eq(2).children().contains('pm').click()
                    }else{
                        cy.get(timepicker1).children().eq(2).children().contains('am').click()

                    }
                    //Event Images Section
                    cy.get(lnkEventImages).contains('Event Images').should('exist').click()
                    cy.get(lnkImages).children().eq(0).children(fileUpload).attachFile('upload.jpg')
                    cy.get('button[class="ant-btn btn-primary text-white"]').should('be.visible').click()

                    cy.get(lnkImages).children().eq(1).children(fileUpload).attachFile('upload.jpg')
                    cy.wait(500)
                    cy.get('body').children('div').children().children('.ant-modal-wrap').should('exist').eq(1).should('exist')
                    .children().children('.ant-modal-content').children('.ant-modal-footer').children(btnCrop).click()
                    
                    //Performance Details Section
                    cy.get(lnkEventImages).contains('Performance Details').should('exist').click()
                    cy.log(dataEvent.performanceDet)
                    cy.get(btnIndGroup).contains(dataEvent.performanceDet).should('exist').click()
                    dataEvent.performanceTypes.forEach((pertype)=>{
                        cy.get(selPerformanceType).contains(pertype).should('exist').click()
                        if(pertype=='Pre-recorded video'){
                            cy.get('label').contains('Upload Video File').parent().children('div').children('div').eq(0).children(fileUpload)
                            .attachFile('videoclip.mp4')
                        }
                    })  

                    //About the host Section
                    cy.get(lnkEventImages).contains('About the host').should('exist').click()

                    if(dataEvent.iamHost='NO'){
                        cy.get(inpHostFirstName).should('exist').type(dataEvent.hostFirstName)
                        cy.get(inpHostLastName).should('exist').type(dataEvent.hostLastName)
                        cy.get(inpHostEmail).should('exist').type(dataEvent.hostEmail)
                
                        cy.get('label').contains('Bio').parent().children('div').children('div').children('div').children('div').children('iframe')
                        .then((iframedesc1)=>{
                            const iframecontents1=iframedesc1.contents()
                            cy.log(iframecontents1)
                            cy.wrap(iframecontents1[0].documentElement).type(dataEvent.hostBio)
        
                        })

                    }else{
                        cy.get(radiobtnHost).should('exist').click()
                    }

                    if(dataEvent.addAnotherhost=="YES"){
                        cy.get(btnSmall).contains('Add Another Host').should('exist').click()
                        cy.get(formAddanotherhost).contains('Host Information').parent().parent().children('.ant-drawer-body').children().children().children('div')
                        .children('div').eq(0).children().children().eq(0).find(inpHostFirstName).should('exist').type(dataEvent.sechostFirstName)
                        cy.get(formAddanotherhost).contains('Host Information').parent().parent().children('.ant-drawer-body').children().children().children('div')
                        .children('div').eq(0).children().children().eq(1).find(inpHostLastName).should('exist').type(dataEvent.sechostLastName)
                        cy.get(formAddanotherhost).contains('Host Information').parent().parent().children('.ant-drawer-body').children().children().children('div')
                        .children('div').eq(1).children().children().find(inpHostEmail).should('exist').type(dataEvent.sechostEmail)                          
                        cy.get(btnAdd).should('exist').click()

                    }
                        
                    //Hit Save and Continue
                    cy.get(tabActive).children().children('.text-center.pt-4.pb-4').children('div').children(btnIndGroup)
                    .contains('Save & continue').click()

                    cy.wait('@saveEvent')
                    cy.get(alrConfirmation).contains("Event details saved successfully!").should('exist')

                    //Enter all the details in Ticket Info tab

                    let intTicketCat=0
                    //Select ticket category
                    cy.log(intTicketCat)
                    dataEvent.tickets.forEach((ticketCat)=>{
                        if(intTicketCat==1){

                            //select ticket category
                            cy.get(btnSmall).contains('Add Another Ticket Category').should('exist').click()
                            cy.get('.ant-drawer.ant-drawer-right.ant-drawer-open').children('.ant-drawer-content-wrapper').children().children()
                            .children('.ant-drawer-body').children().children().children('.collapse.multi-collapse.show.pt-3')
                            .children('.form-group').eq(0).children().children('.col-sm-4').eq(0).children('div').children('div').children('.css-1wy0on6')
                            .children('div').children('svg').click()
                            cy.get(selTickets).children().contains(ticketCat.category).click()

                            //select currency
                            cy.get('.ant-drawer.ant-drawer-right.ant-drawer-open').children('.ant-drawer-content-wrapper').children().children()
                            .children('.ant-drawer-body').children().children().children('.collapse.multi-collapse.show.pt-3')
                            .children('.form-group').eq(0).children().children('.col-sm-4').eq(1).children('div').children('div').children('.css-1wy0on6')
                            .children('div').children('svg').click()
                            cy.get(selTickets).children().contains(ticketCat.currency).click()  
                            
                            //enter the price
                            cy.get('.ant-drawer.ant-drawer-right.ant-drawer-open').children('.ant-drawer-content-wrapper').children().children()
                            .children('.ant-drawer-body').children().children().children('.collapse.multi-collapse.show.pt-3')
                            .children('.form-group').eq(0).children().children('.col-sm-4').eq(2).children('input').type(ticketCat.price)

                            cy.get('.ant-drawer.ant-drawer-right.ant-drawer-open').children('.ant-drawer-content-wrapper').children().children()
                            .children('.ant-drawer-body').children().children().children('.form-group.my-2').children('button').click()
                        }else{
                            //select ticket category
                            cy.get(tabActive).children().children().children().children().children().children().eq(0).children()
                            .children().eq(0).children('div').children('div').children('.css-1wy0on6').children('div').click()
                            cy.get(menuTicket).should('be.visible')
                            cy.get(selTickets).children().contains(ticketCat.category).click()

                            //select currency
                            cy.get(tabActive).children().children().children().children().children().children().eq(0).children()
                            .children().eq(1).children('div').children('div').children('.css-1wy0on6').children('div').click()
                            cy.get(menuTicket).should('be.visible')
                            cy.get(selTickets).children().contains(ticketCat.currency).click()

                            //enter price
                            cy.get('label').contains('Price').parent().children('input').type(ticketCat.price)
                        }
                        intTicketCat++
                    })
                    
                    //Hit Save and Continue
                    cy.get(tabActive).children().children('.text-center.pt-4.pb-4').children('div').children(btnIndGroup)
                    .contains('Save & continue').click()

                    cy.wait('@Inventory')
                    cy.get(alrConfirmation).contains("Your ticket information has been saved successfully!").should('exist')

                    //Select add-ons
                    if(dataEvent.skipAddons!="YES"){
                        let inaddons=0
                        let inaddonAdd=0                    
                        dataEvent.addOns.forEach((addon)=>{
                            if(inaddons>0){
                                inaddonAdd=1
                                cy.get(btnSmall).contains('Add More Add-Ons').should('exist').click()
                                cy.get(tabAddOns).eq(1).children().children('div').eq(0).children().children('input').should('exist').type(addon.title)
                                //cy.get('.css-bgvzuu-indicatorSeparator').eq(1).should('exist').click()
                                //cy.get('.css-11unzgr').children().contains(addon.currency).should('exist').click() 
                                cy.get(inpPrice).eq(1).should('exist').type(addon.price)
                                cy.get(inpQuantity).eq(1).should('exist').type(addon.quantity)
                                cy.get(tabAddOns).eq(1).children().children().eq(3).children().children().children(fileUpload)
                                .attachFile('AddonImage.jpg')                    
                                cy.get('div[class="ant-modal-mask"]').parent().children('.ant-modal-wrap').should('exist')
                                .children().children('.ant-modal-content').children('.ant-modal-footer')
                                .children(btnCrop).should('exist').click()

                                cy.get('div[class="ant-drawer-body"]').children('div').children('div').children('button').contains('Add')
                                .should('exist').click({force: true})  
                                cy.get(alrConfirmation).contains('Add-on added!').should('exist')

                            }else{
                                cy.get(tabAddOns).children().children('div').eq(0).children().children('input').should('exist').type(addon.title)
                                //cy.get('.css-bgvzuu-indicatorSeparator').should('exist').click()
                                //cy.get('.css-11unzgr').children().contains(addon.currency).should('exist').click() 
                                cy.get(inpPrice).should('exist').type(addon.price)
                                cy.get(inpQuantity).should('exist').type(addon.quantity)
                                cy.get(tabAddOns).children().children().eq(3).children().children().children(fileUpload).attachFile('AddonImage.jpg')
                                cy.get('div[class="ant-modal-mask"]').parent().children('.ant-modal-wrap').should('exist')
                                .children().children('.ant-modal-content').children('.ant-modal-footer')
                                .children(btnCrop).should('exist').click()
                            }
                            inaddons++

                        })

                        //Submit Addons
                        cy.get(btnIndGroup).contains('Submit').should('exist').click()
                        cy.wait('@Inventory')
                        cy.get(alrConfirmation).contains('Your Add-ons have been saved successfully!').should('exist')    
                        
                    }else{
                        cy.get('a').contains('Skip').should('exist').click()
                    }    
                    //Entering the Financial Info
                    cy.get('b').contains(dataEvent.accountType).should('exist').parent().parent().children('.ant-radio').click()
                    cy.get(inpHostFirstName).parent('.form-group.col-12').children('input').should('exist').type(dataEvent.hostFirstName)
                    cy.get(inpHostLastName).parent('.form-group.col-12').children('input').should('exist').type(dataEvent.hostLastName)
                    cy.get(inpHostEmail).parent('.form-group.col-12').children('input').should('exist').type(dataEvent.hostEmail)
                    dataEvent.accountType
                    if(dataEvent.accountType=="Company"){
                        cy.get(inpCompanyName).should('exist').type(dataEvent.companyName)
                    }
                    cy.get(inpAccPhNo).should('exist').type(dataEvent.accPhNo)
                    cy.get(btnNext).contains('Next').should('exist').click()

                    //Enter Account Details
                    cy.get(inpAccountName).should('exist').type(dataEvent.accountName)
                    cy.get(tabActive).children().children().children('div').eq(0).children().eq(1).children('div').children('div')
                    .children('span').click()
                    cy.get(selValues).contains(dataEvent.bankName).click()
                    cy.get(inpIFSCCode).should('exist').type(dataEvent.ifscCode)
                    cy.get(inpAccountNumber).should('exist').type(dataEvent.accountno)
                    cy.get(inpConfirmAccNo).should('exist').type(dataEvent.accountno)
                    cy.get(inpGSTNumber).should('exist').type(dataEvent.GSTNo)
                    cy.get(btnNext).contains("Done").click()
                    cy.wait('@eventSubmit')

                    //verify the alert message
                    cy.get(alreventsubmit).contains('Event submitted successfully for approval.').should('exist')
                    cy.get('span').contains("OK").should('exist').click({force: true})

                    //Verify the event creation in My Feels 
                    cy.get('.nav-item.nav-link.active').contains('Awaiting Approval').should('be.visible')
                    cy.get(tableMyFeels).should('be.visible')
                    cy.get(tableMyFeels).children(contentMyFeels).children(rowMyFeels).eq(0).children(colsMyFeels).children(colMyFeels)
                    .contains(dataEvent.title + '_' + dataEvent.category + '_' + strDate).should('exist')

                    //check for confirmation email
                    cy.task("gmail:check", {
                        from: "no-reply@feelitlive.com",
                        to: Cypress.env('username'),
                        subject: "FeelitLIVE : Confirmation of your experience/event on FeelitLIVE"
                    })
                    .then(email => {
                        assert.isNotNull(Cypress.env('username'), 'FeelitLIVE : Confirmation of your experience/event on FeelitLIVE')
                    })
                    
                })
            })
        })
    }

    if(Cypress.config().baseUrl.includes("dev.feelitlive")){
        it('should be able to approve the event',()=>{
            cy.server()
            cy.route('/api/feeladmin/place/false').as('approve')
            cy.visit(Cypress.env('adminUrl'))
            cy.loginAdmin(Cypress.env("adminUsername"),Cypress.env("adminPassword"))

            cy.fixture('eventCreation').then((dataEvents)=>{
                dataEvents.forEach((dataEvent)=>{
                    cy.get(lnksLeftPane).should('exist')
                    cy.get('span').contains('Feel Management').should('be.visible').should('exist').click()
                    cy.get(lnkApproveModerate).click()
                    //cy.wait(1000)
                    cy.wait('@approve')
                    let strDate=btnEventDate
                    strDate=strDate.split('/')
                    strDate=strDate[0]+strDate[1]+strDate[2]

                    cy.get(inpSearchByPlaceName).should('be.visible').children().children().eq(1).children('input')
                    .type(dataEvent.title + '_' + dataEvent.category + '_' + strDate)
                    cy.get(tableSrhResults).children('.rt-tbody').children().should('exist')
                    cy.get(btnAction).should('exist').click()
                    cy.get(selApprovePublish).contains('Approve and Publish').should('exist').click()
                    cy.get(alrmsg).contains('Congratulations! Your Feel has been reviewed and approved by our team. Go check it out on feelaplace.com!')
                    .should('exist')
                    cy.get(btnOK).should('exist').click()
                    //check for confirmation email
                    cy.task("gmail:check", {
                        from: "no-reply@feelitlive.com",
                        to: Cypress.env('username'),
                        subject: "FeelitLIVE : Approval of your experience/event on FeelitLIVE"
                    })
                    .then(email => {
                        assert.isNotNull(Cypress.env('username'), 'FeelitLIVE : Approval of your experience/event on FeelitLIVE')
                    })
                })
            })
        })
    }
    if(Cypress.config().baseUrl.includes("dev.feelitlive"))
    {
        it('should be able to book the tickets using existing user',()=>{
            cy.server()
            cy.route('POST','/api/session/login').as('login')
            cy.route('/api/session').as('session')
            cy.route('POST','/api/dynamicsections').as('livestream')
            cy.route('POST','/api/event/slug').as('event')
            cy.route('/api/category').as('booknow')
            cy.route('POST','/api/deliveryoptions').as('ticketconfirm')
            cy.route('api/transaction/**').as('transaction')

            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (let i = 0; i < 8; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            
            cy.route({
                method: 'POST',
                url: '/api/payment',
                status: 200,
                response: {"success":true,"errorMessage":"","method":"","action":"","formFields":{},
                "transactionAltId":text}
            }).as('success')

            cy.visit('/')
            cy.wait('@session',{timeout:15000})
            cy.get(btnClose).parent().parent().then(($res)=>{
                cy.log($res)
                if($res.attr('style').includes('hidden')){
    
                }else{
                    cy.get(btnClose).should('exist').click()
                }
            })
            cy.get(lnkLogin).should('exist').click()
            cy.login(Cypress.env('username'),Cypress.env('password'))
            cy.wait('@login')
            cy.fixture('eventCreation').then((dataEvents)=>{
                dataEvents.forEach((dataEvent)=>{
                    cy.visit('/')
                    cy.wait('@session',{timeout:15000})
                    cy.get(lnkLiveStream).should('exist').click()
                    cy.wait('@livestream')
                    let strDate=btnEventDate
                    strDate=strDate.split('/')
                    strDate=strDate[0]+strDate[1]+strDate[2]
                    //cy.wait('@livestream').then((res)=>{
                    cy.get(lnkCategory).contains(dataEvent.category).should('exist').click({force: true})
                    cy.wait('@livestream')
                    cy.get(lnkEvent).contains(dataEvent.title + '_' + dataEvent.category + '_' + strDate).should('exist').click({force: true})
                    //})
                    cy.wait('@event').then((eventres)=>{
                        cy.log(eventres)
                        cy.get(txtEventContent).children().children().children('p').children('p').contains(dataEvent.description).should('exist')
                        cy.get(txtEventContent).children().children().children('div').children('div').children('div').children('p')
                        .contains(dataEvent.hostBio).should('exist')
                    })

                    cy.get(btnBookNow).should('exist').click()
                    //cy.wait('@booknow')
                    dataEvent.tickets.forEach((ticketCat)=>{
                        cy.get(secTicketCats).contains(ticketCat.category).should('exist')
                        cy.get(txtPrice).contains(ticketCat.price).should('exist')
                        cy.get(txtPrice).contains(ticketCat.currency).should('exist')
                    })

                    cy.get(secTicketCats).contains(dataEvent.tickets[0].category).parent().parent().children('div').eq(1).children('div')
                    .children(btnIncrement).dblclick()
                    cy.get(alrValidation)
                    .contains('You need only 1 ticket when viewing from one location. If you wish to buy for someone else who is not collocated with you, please make a separate purchase')
                    .should('exist')
                    cy.get(btnContinue).should('exist').click()
                    cy.wait('@ticketconfirm',{timeout:15000})
                    cy.wait('@transaction',{timeout:15000})
                    cy.get(iframePayment).its('0.contentDocument.body').should('not.be.empty')
                    cy.get(iframePayment).should('exist').then((iframepay)=>{
                        let iframecont=iframepay.contents()
                        cy.log(iframecont)

                        cy.wrap(iframecont[0].body).find(inpCardNumber).click().focus().type(dataEvent.cardNumber,{delay: 100})
                        cy.wrap(iframecont[0].body).find(inpMMYY).should('exist').click().focus().type(dataEvent.expiryMMYY,{delay: 100})
                        cy.wrap(iframecont[0].body).find(inpCVV).should('exist').focus().type(dataEvent.CVV)
                    })
                    cy.get(iframePayment).then((iframepin)=>{
                        const iframecont1=iframepin.contents()
                        cy.wrap(iframecont1.find(inpPostal)).should('exist').type(dataEvent.zipCode)
                    })
                    cy.get(inpAddress).should('exist').type(dataEvent.address)
                    cy.get(inpCity).should('exist').type(dataEvent.city)
                    cy.get(inpState).should('exist').type(dataEvent.state)
                    cy.get(inpCntry).should('exist').type(dataEvent.country)
                    cy.get(inpZipcode).should('exist').click().type(dataEvent.pincode)
                    cy.get(inpZipcode).invoke('text').then((text)=>{
                        cy.log(text)
                    })

                    cy.get(btnNext).contains('Continue').should('exist').click()
                    cy.wait('@success')

                })
            })
        })
    }

    it('should be able to book the tickets without user login',()=>{

            cy.server()
            cy.route('POST','/api/session/login').as('login')
            cy.route('/api/session').as('session')
            cy.route('POST','/api/dynamicsections').as('livestream')
            cy.route('POST','/api/event/slug').as('event')
            cy.route('/api/category').as('booknow')
            cy.route('POST','/api/deliveryoptions').as('ticketconfirm')
            cy.route('api/transaction/**').as('transaction')

            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (let i = 0; i < 8; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            
            cy.route({
                method: 'POST',
                url: '/api/payment',
                status: 200,
                response: {"success":true,"errorMessage":"","method":"","action":"","formFields":{},
                "transactionAltId":text}
            }).as('success')

            cy.visit('/')
            cy.wait('@session',{timeout:15000})
            // cy.get(btnClose).parent().parent().then(($res)=>{
            //     cy.log($res)
            //     if($res.attr('style').includes('hidden')){
    
            //     }else{
            //         cy.get(btnClose).should('exist').click()
            //     }
            // })
            
            cy.get(lnkLiveStream).should('exist').click({force:true})
            cy.wait('@livestream').then((res)=>{
                cy.log(res)
                cy.get(lnkEvent).contains((res.response.body.dynamicPlaceSections[1].placeDetails[0].name).trim()).should('exist').click({force: true})
                    
            })     
            cy.wait('@session')
            cy.wait('@event')
            cy.get(btnBookNow).should('exist').click()
            cy.get(secTicketCats).eq(0).parent().parent().children('div').eq(1).children('div')
            .children(btnIncrement).dblclick()
            cy.get(alrValidation)
            .contains('You need only 1 ticket when viewing from one location. If you wish to buy for someone else who is not collocated with you, please make a separate purchase')
            .should('exist')
            cy.get(btnContinue).should('exist').click()
            cy.login(Cypress.env('username'),Cypress.env('password'))
            cy.wait('@login')
            cy.wait('@ticketconfirm',{timeout:15000})
            cy.wait('@transaction',{timeout:15000})

            cy.get(iframePayment).its('0.contentDocument.body').should('not.be.empty')
            cy.get(iframePayment).should('exist').then((iframepay)=>{
                let iframecont=iframepay.contents()
                cy.log(iframecont)
                cy.wrap(iframecont[0].body).find(inpCardNumber).click().focus().type('4242424242424242',{delay: 100})
                cy.wrap(iframecont[0].body).find(inpMMYY).should('exist').click().focus().type('0525',{delay: 100})
                cy.wrap(iframecont[0].body).find(inpCVV).should('exist').focus().type('321')
            })
            cy.get(iframePayment).then((iframepin)=>{
                const iframecont1=iframepin.contents()
                cy.wrap(iframecont1.find(inpPostal)).should('exist').type('500034')
            })
            cy.get(inpAddress).should('exist').type('Telangana Bhavan, Road Number 10, Bhclickavani Nagar, Banjara Hills')
            cy.get(inpCity).should('exist').type('Hyderabad')
            cy.get(inpState).should('exist').type('Telangana')
            cy.get(inpCntry).should('exist').type('India')
            cy.get(inpZipcode).should('exist').click().type('500034')
            cy.get(inpZipcode).invoke('text').then((text)=>{
                cy.log(text)
            })
           cy.get(btnNext).contains('Continue').should('exist')//.click()
            //cy.wait('@success')
    })

    if(Cypress.config().baseUrl.includes("dev.feelitlive"))
    {
        it('should be able to book the tickets using new user',()=>{
        cy.server()
        cy.route('POST','/api/session/login').as('login')
        cy.route('POST','/api/dynamicsections').as('livestream')
        cy.route('POST','/api/event/slug').as('event')
        cy.route('/api/category').as('booknow')
        cy.route('POST','/api/deliveryoptions').as('ticketconfirm')
        cy.route('api/transaction/**').as('transaction')

        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 8; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        
        cy.route({
            method: 'POST',
            url: '/api/payment',
            status: 200,
            response: {"success":true,"errorMessage":"","method":"","action":"","formFields":{},
            "transactionAltId":text}
        }).as('success')
            
        signUpandActivate(FName,LName,email,countryCode,phNo,password)
        cy.get(btnSuccessContinue).should('exist').click()

        cy.get(btnClose).parent().parent().then(($res)=>{
            cy.log($res)
            if($res.attr('style').includes('hidden')){
    
            }else{
                cy.get(btnClose).should('exist').click()
            }
        })
        cy.get(lnkLogin).should('exist').click()
        cy.login(email,password)
        cy.wait('@login')
        cy.fixture('eventCreation').then((dataEvents)=>{
            dataEvents.forEach((dataEvent)=>{
                cy.visit('/')
                cy.get(lnkLiveStream).should('exist').click()
                cy.wait('@livestream')
                let strDate=btnEventDate
                strDate=strDate.split('/')
                strDate=strDate[0]+strDate[1]+strDate[2]
                cy.get(lnkCategory).contains(dataEvent.category).should('exist').click()
                cy.wait('@livestream')
                cy.get(lnkEvent).contains(dataEvent.title + '_' + dataEvent.category + '_' + strDate).should('exist').click({force: true})
                cy.wait('@event').then((eventres)=>{
                    cy.log(eventres)
                    cy.get(txtEventContent).children().children().children('p').children('p').contains(dataEvent.description).should('exist')
                    cy.get(txtEventContent).children().children().children('div').children('div').children('div').children('p')
                    .contains(dataEvent.hostBio).should('exist')
                })
        
                cy.get(btnBookNow).should('exist').click()        
                dataEvent.tickets.forEach((ticketCat)=>{
                            cy.get(secTicketCats).contains(ticketCat.category).should('exist')
                            cy.get(txtPrice).contains(ticketCat.price).should('exist')
                            cy.get(txtPrice).contains(ticketCat.currency).should('exist')
                })
                cy.get(secTicketCats).contains(dataEvent.tickets[0].category).parent().parent().children('div').eq(1).children('div')
                .children(btnIncrement).dblclick()
                cy.get(alrValidation)
                .contains('You need only 1 ticket when viewing from one location. If you wish to buy for someone else who is not collocated with you, please make a separate purchase')
                .should('exist')
     
                cy.get(btnContinue).should('exist').click()
                cy.wait('@ticketconfirm',{timeout:15000})
                cy.wait('@transaction',{timeout:15000})
                cy.get(iframePayment).its('0.contentDocument.body').should('not.be.empty')
                cy.get(iframePayment).should('exist').then((iframepay)=>{
                    let iframecont=iframepay.contents()
                    cy.log(iframecont)
                    cy.wrap(iframecont[0].body).find(inpCardNumber).click().focus().type(dataEvent.cardNumber,{delay: 100})
                    cy.wrap(iframecont[0].body).find(inpMMYY).should('exist').click().focus().type(dataEvent.expiryMMYY,{delay: 100})
                    cy.wrap(iframecont[0].body).find(inpCVV).should('exist').focus().type(dataEvent.CVV)
                })
                cy.get(iframePayment).then((iframepin)=>{
                    const iframecont1=iframepin.contents()
                    cy.wrap(iframecont1.find(inpPostal)).should('exist').type(dataEvent.zipCode)
                    
                })
                cy.get(inpAddress).should('exist').type(dataEvent.address)
                cy.get(inpCity).should('exist').type(dataEvent.city)
                cy.get(inpState).should('exist').type(dataEvent.state)
                cy.get(inpCntry).should('exist').type(dataEvent.country)
                cy.get(inpZipcode).should('exist').click().type(dataEvent.pincode)
                cy.get(inpZipcode).invoke('text').then((text)=>{
                    cy.log(text)
                })
                cy.get(btnNext).contains('Continue').should('exist').click()
                cy.wait('@success')
              })
            })
        })
    }

    it('should be able to add the event to feel list from Live Stream page/Event Catgeory Page/Event Page',()=>{
        cy.server()
        cy.route('POST','/api/session/login').as('login')
        cy.route('POST','/api/dynamicsections').as('livestream')
        cy.route('POST','/api/event/slug').as('event')

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
        cy.get(lnkLiveStream).should('exist').click({force: true})
        cy.wait('@livestream').then(($dySes)=>{
            let eventName=$dySes.response.body.dynamicPlaceSections[0].placeDetails[0].name
            cy.get(lnkEvent).contains(eventName).parent().parent().parent().children('div[title="Add to your feelList"]').click()
            cy.get(imgCart).eq(1).should('be.visible').parent().click()
            cy.get('span:contains("'+eventName+'")').should('exist')
            cy.get(lnkRemFeelList).should('exist').click()
        })
        
        cy.visit('/')
        cy.get(lnkLiveStream).should('exist').click()
        cy.wait('@livestream')
        cy.get(lnkCategory).contains('Music').should('exist').click({force: true})
        cy.wait('@livestream').then(($res)=>{
            let eventName=$res.response.body.dynamicPlaceSections[0].placeDetails[0].name
            eventName=eventName
            cy.get(lnkEvent).contains(eventName).parent().parent().parent().children('div[title="Add to your feelList"]').click()
            cy.get(imgCart).eq(1).should('be.visible').parent().click()
            cy.get('span:contains("'+eventName+'")').should('exist')
            cy.get(lnkRemFeelList).should('exist').click()

            cy.get(lnkEvent).contains(eventName).should('exist').click({force: true})
            cy.get(lnkAddToFL).should('exist').should('be.visible').click()
            cy.get(imgCart).eq(1).should('be.visible').parent().click()
            cy.get('span:contains("'+eventName+'")').should('exist')
            cy.get(lnkRemFeelList).should('exist').click()
        })

    })

    if(Cypress.config().baseUrl.includes("dev.feelitlive")){    
        it('should be able to add the review and star ratings for the event',()=>{
    
            cy.server()
            cy.route('POST','/api/session/login').as('login')
            cy.route('POST','/api/dynamicsections').as('livestream')
            cy.route('POST','/api/event/slug').as('event')

            cy.visit('/')
            cy.get(btnClose).parent().parent().then(($res)=>{
                cy.log($res)
                if($res.attr('style').includes('hidden')){

                }else{
                    cy.get(btnClose).should('exist').click()
                }
            })
            cy.get(lnkLogin).should('exist').click()
            cy.login(Cypress.env('username'),Cypress.env('password'))
            cy.wait('@login')
            cy.get(lnkLiveStream).should('exist').click()
            cy.wait('@livestream')
            cy.fixture('eventCreation').then((dataEvents)=>{

                let strDate=btnEventDate
                strDate=strDate.split('/')
                strDate=strDate[0]+strDate[1]+strDate[2]
                cy.get(lnkCategory).contains(dataEvents[0].category).should('exist').click({force: true})
                cy.wait('@livestream')

                cy.get(lnkEvent).contains(dataEvents[0].title + '_' + dataEvents[0].category + '_' + strDate).should('exist').click({force: true})
                cy.wait('@event')
                for(let i=0;i<3;i++){
                    let rat=i+2
                    cy.get(inpAddReview).should('exist').should('be.visible').type('Event is good'+i)
                    cy.get(secRevRat).children(secStars).children('span').children('div').children('span[data-index="'+rat+'"]').should('exist').click()
                    cy.get(btnReviewSubmit).should('exist').click()
                }
        
                let inStarCount=0
                cy.get(secHeader).children(secStars).children('span').children('div').children('span').then(($stars)=>{
                    cy.log($stars.length)
                    for(let i=0;i<$stars.length;i++){
                        if($stars[i].outerHTML.includes('color: rgb(87, 36, 131)')){
                            inStarCount=inStarCount+1
                        }

                    }
                    
                    expect(inStarCount).is.equal(4)
                })
                cy.get(secHeader).children(secStars).children(txtReviews).contains('3').should('exist')
                cy.get(secHeader).children(secStars).children(txtReviews).contains('+ Reviews').should('exist')

            })
        })
    }
    if(Cypress.config().baseUrl.includes("dev.feelitlive")){

        it('should be able to search the reviews and filter using rating',()=>{

            cy.server()
            cy.route('POST','/api/session/login').as('login')
            cy.route('POST','/api/dynamicsections').as('livestream')
            cy.route('POST','/api/event/slug').as('event')

            cy.visit('/')
            cy.get(btnClose).parent().parent().then(($res)=>{
                cy.log($res)
                if($res.attr('style').includes('hidden')){

                }else{
                    cy.get(btnClose).should('exist').click()
                }
            })
            cy.get(lnkLogin).should('exist').click()
            cy.login(Cypress.env('username'),Cypress.env('password'))
            cy.wait('@login')
            cy.get(lnkLiveStream).should('exist').click()
            cy.wait('@livestream')
            cy.fixture('eventCreation').then((dataEvents)=>{

                let strDate=btnEventDate
                strDate=strDate.split('/')
                strDate=strDate[0]+strDate[1]+strDate[2]
                cy.get(lnkCategory).contains(dataEvents[0].category).should('exist').click({force: true})
                cy.wait('@livestream')

                cy.get(lnkEvent).contains(dataEvents[0].title + '_' + dataEvents[0].category + '_' + strDate).should('exist').click({force: true})
                cy.wait('@event').then(()=>{
                    cy.get(inpSearchRev).should('exist').type('Event is good0')
                    cy.get(srchResult).then((res)=>{
                        expect((res.length)-1).to.equal(1)
                    })
            
                    cy.get(inpSearchRev).should('exist').type('{selectall}{backspace}').type('Event is good') 
                    cy.get(srchResult).then((res)=>{
                        expect((res.length)-1).to.equal(3)
                    })
            
                    cy.get(inpSearchRev).should('exist').type('{selectall}{backspace}') 
                    cy.get(srchResult).then((res)=>{
                        expect((res.length)-1).to.equal(3)
                    })
                })
            })

            cy.get(chkRatings).should('exist').eq(2).click()
            cy.get(srchResult).then((res)=>{
                expect((res.length)-1).to.equal(1)
            })

            cy.get(chkRatings).should('exist').eq(1).click()
            cy.get(srchResult).then((res)=>{
                expect((res.length)-1).to.equal(2)
            })

            cy.get(inpSearchRev).should('exist').type('{selectall}{backspace}').type('Event is good0') 
            cy.get(srchResult).then((res)=>{
                expect((res.length)-1).to.equal(1)
            })

            cy.get(inpSearchRev).should('exist').type('{selectall}{backspace}')        
            cy.get(chkRatings).should('exist').eq(2).click()
            cy.get(srchResult).then((res)=>{
                expect((res.length)-1).to.equal(1)
            })
        })
    }

    it('should be able to verify the footer link FeelitLIVE on home page',()=>{
        cy.visit('/')
        // cy.get(btnClose).parent().parent().then(($res)=>{
        //     cy.log($res)
        //     if($res.attr('style').includes('hidden')){
    
        //     }else{
        //           cy.get(btnClose).should('exist').click()
        //     }
        //   })
        cy.scrollTo('bottom')
        cy.get(lnkfooterFeelitLive).should('exist').should('be.visible').should('have.attr','href','/create-online-experience')

    })                               

    it('should be able to access the Reports api',()=>{

        cy.fixture('reportsLoginDataFIL.json')
        .then(data=>cy.request('POST','api/session/login',data)
        .then((response)=>{
            cy.log(response.body.session.user.altId)
            expect(response.body).to.have.property('success',true)

            if(Cypress.config().baseUrl.includes("dev.feelitlive")){
                cy.request(Cypress.env('adminUrl') + 'api/report/get-places/'+response.body.session.user.altId).then((places)=>{
                    cy.log(places)
                    if(places.body.places.length>0){
                        places.body.places.forEach((place)=>{
                            cy.log(place.altId)
                            cy.request('POST',Cypress.env('adminUrl') + 'api/get/reports',
                            '{"eventAltId":"'+ place.altId +'","userAltId":"'+place.altId+'","eventDetailId":"","currencyTypes":"","fromDate":"2018-01-01","toDate":"2050-12-31"}')
                        })
                    }
               })
            }else if(Cypress.config().baseUrl.includes("www.feelitlive")){
                cy.request(Cypress.env('hostfeelUrl') + 'api/report/get-places/'+response.body.session.user.altId).then((places)=>{
                    //cy.log(places)
                    if(places.body.places.length>0){
                        places.body.places.forEach((place)=>{ 
                          // cy.log(place.altId)
                            cy.request('POST',Cypress.env('hostfeelUrl') + 'api/get/reports',
                            {"eventAltId": place.altId ,"userAltId" :place.altId,"eventDetailId":"","currencyTypes":"","fromDate":"2018-01-01","toDate":"2050-12-31"}).then(($res)=>{
                                expect($res.status).to.equal(200)
                            })
                        })
                    }
               })
            }
 
        
        }))
    })

    it('should be able to verify Host Online link on Home page',()=>{
        cy.visit('/')
        // cy.get(btnClose).parent().parent().then(($res)=>{
        //     cy.log($res)
        //     if($res.attr('style').includes('hidden')){
  
        //     }else{
        //           cy.get(btnClose).should('exist').click()
        //     }
        //   })
          cy.get(lnkHostOnline).should('exist').should('have.attr','href','/create-online-experience')
    })
})