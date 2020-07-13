//WebElements and their properties
const lnkLogin = '.d-none.d-md-block.nav-item dropdown'
const inpEmail = 'input[name="email"]'
const inpPassword = 'input[name="password"]'
const ShowPasswordIcon = '.position-absolute.show-pass.text-purple.fa.fa-eye '
const lnkSignIn = 'a:contains("Log in")'
const btnClose = 'a.close-popup.btn-primary.rounded-circle:contains("X")'
const btnFacebookText = '.btn.btn-primary.btn-block.fb-btn'
const btnGoogleText = '.btn.btn-outline-danger.btn-block.fa-google-cus.mt-2'
const lnkSignUp = 'a.btn-link.ml-2:contains("Sign up")'
const lnkForgotPassword = 'a:contains("Forgot Password?")'
const lnkLoginMobile='button:contains("Log in with Mobile")'
const lnkLoginEmail='button:contains("Log in with Email")'
const selPhoneCode = 'select[name="phoneCode"]'      
const inpPhoneNumber = 'input[name="phoneNumber"]'
const btnLogin='button.btn.btn-primary.btn-block.btn-lg:contains("Log in")'
const alrMessage='div.d-block.invalid-feedback'
const txtOTPPage='p:contains("Expect OTP in")'
const lnkSendagain='a:contains("Send again")'
const txtEnterCode='p:contains("Enter the code just sent to")'
const lnkBack='a.btn-link.mr-2:contains("Back")'

describe("Sign In Functionalities", () => {
   beforeEach(() => {
      cy.visit('/',{timeout:100000})
      // cy.get(btnClose).parent().parent().then(($res) => {
      //    cy.log($res)
      //    if ($res.attr('style').includes('hidden')) {
      //    } else {
      //       cy.get(btnClose).should('exist').click()
      //    }
      // })
      cy.get(lnkSignIn).should('exist').click()

   })

   it('should successfully login with correct credentials', () => {
      cy.server()
      cy.route('POST', '/api/session/login').as('login')
      cy.login(Cypress.env('username'), Cypress.env('password'))
      cy.wait('@login')

   })


   it('should throw error for empty username', () => {
      cy.get(inpPassword).type(Cypress.env('password'))
         .type('{enter}')
      cy.contains('Email is required ').should('exist')
   })

   it('should throw error for empty password', () => {
      cy.get(inpEmail).type(Cypress.env('username'))
         .type('{enter}')
      cy.contains('Password is required').should('exist')

   })
   it('should throw error for incorrect email', () => {
      cy.server()
      cy.route('POST', '/api/session/login').as('login')
      cy.login(Math.floor(Math.random() * 100000) + "@gmail.com", Cypress.env('password'))
      cy.wait('@login')
      cy.contains('Invalid email or password, please try again').should('exist')

   })
   it('should throw error for incorrect password', () => {
      cy.server()
      cy.route('POST', '/api/session/login').as('login')
      cy.login(Cypress.env('username'), "wrong")
      cy.wait('@login')
      cy.contains('Invalid email or password, please try again').should('exist')
   })

   it('should throw error for incorrect email format', () => {
      cy.get(inpEmail).type('randomtext')
      cy.contains('Enter a valid email ').should('exist')

   })
   it('sign in with fecebook should be exist ', () => {
      cy.get(btnFacebookText).parent().should('exist')

   })
   it('sign in with google should be exist ', () => {
      cy.get(btnGoogleText).parent().should('exist')

   })
   it('should be exist signup link on sign in page  ', () => {
      cy.get(lnkSignUp).parent().should('exist')

   })
   it('should be exist signup link on sign in page  ', () => {
      cy.get(lnkForgotPassword).parent().should('exist')

   })
   it('shoud be able to see password', () => {
      cy.get(inpEmail).type(Cypress.env('username'))
      cy.get(inpPassword).type(Cypress.env('password'))
      cy.get(ShowPasswordIcon).click()


   })
   it('should be able to verify the link login with mobile and email',()=>{
      cy.get(lnkLoginMobile).should('exist').click()
      cy.get(selPhoneCode).should('exist').should('be.visible')
      cy.get(inpPhoneNumber).should('exist').should('be.visible')
      cy.get(lnkLoginEmail).should('exist').click()
      cy.get(inpEmail).should('exist').should('be.visible')
      cy.get(inpPassword).should('exist').should('be.visible')

    })

    it('should be able to verify validation messages on login with mobile',()=>{
      cy.get(lnkLoginMobile).should('exist').click()
      cy.get(btnLogin).click()
      cy.get(selPhoneCode).parent().children(alrMessage).should('have.text','Phone Code is required')
      cy.get(inpPhoneNumber).parent().children(alrMessage).should('have.text','Mobile Number is required')
    })

    if(Cypress.config().baseUrl.includes("dev.feelitlive"))
    {
      it('should be able to receive the otp while user login with mobile',()=>{
        cy.server()
        cy.route('POST','/api/otp/send-and-validate').as('otp')
        cy.fixture('signUpData').then((sData)=>{
          cy.get(lnkLoginMobile).should('exist').click()
          cy.get(selPhoneCode).should('exist').should('be.visible').children().should('not.have.length.lessThan',2)
          cy.get(selPhoneCode).select(sData.data[0].phoneCode)
          cy.get(inpPhoneNumber).should('exist').type(sData.data[0].phoneNumber)
          cy.get(btnLogin).should('exist').click()
          cy.contains('Confirm your number').should('exist')
          cy.get(txtOTPPage).should('exist')
          cy.get(txtEnterCode).should('exist')
          cy.get('p:contains("' + sData.data[0].phoneNumber + '")')
          cy.get('input[type="tel"]').then(($fields)=>{
            expect($fields.length,6,"OTP fields are not displayed properly")
          })
          cy.wait('@otp').then(($res)=>{
            expect($res.response.body.isOTPSent).is.eq(true)
          })
          cy.get(lnkBack).should('exist').click()
          cy.get(selPhoneCode).should('exist')
          cy.get(inpPhoneNumber).should('exist')
      })
      })
    }

})