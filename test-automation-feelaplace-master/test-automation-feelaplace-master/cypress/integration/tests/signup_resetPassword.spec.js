//Web Elements for this test
const inpFirstName = 'input[name="firstName"]'        
const inpLastName = 'input[name="lastName"]'        
const inpEmail = 'input[name="email"]'        
const inpPassword = 'input[name="password"]'        
const inpConfirmPassword = 'input[name="confirmPassword"]'      
const selResidentOf = 'select[name="residentOf"]'        
const selCitizenOf = 'select[name="citizenOf"]'        
const selPhoneCode = 'select[name="phoneCode"]'      
const inpPhoneNumber = 'input[name="phoneNumber"]'  
const inpBirthDate = 'input[name="birthDate"]'  
const btnSubmit = 'button[type="submit"]'   
const alrConfirmation = 'div[class="alert alert-success"]'
const alrError = 'div[class="alert alert-success"]'
const inpInviteCode = 'input[name="inviteCode"]'
const btnSendResetLink = 'button:contains("Send Reset Link")'
const btnResetPassword = 'button:contains("Reset Password")'
const btnClose='a.close-popup.btn-primary.rounded-circle:contains("X")'
const lnkSignUp='a:contains("Sign up")'
const alrMsg='span.ant-alert-message'
const alrDesc='span.ant-alert-description'
const lnkSignUpWithMobile='button:contains("Sign up with Mobile")'
const leftpaneFields='.col-sm-6.signup-form-left'
const btnSignUp='button:contains("Sign up")'
const lnkForgotPwd='a:contains("Forgot Password?")'
const lnkLogin = 'a:contains("Log in")'
const btnSignupMobile='button[class="btn btn-primary btn-block btn-lg"]:contains("Sign up")'
const alrMessage='div.d-block.invalid-feedback'
const txtOTPPage='p:contains("Expect OTP in")'
const lnkSendagain='a:contains("Send again")'
const txtEnterCode='p:contains("Enter the code just sent to")'
const lnkBack='a.btn-link.mr-2:contains("Back")'
const btnSignUpEmail='button:contains("Sign up with Email")'

let mailId = 'test.automation.cypress+'+Math.floor(Math.random()*100000)+'+@gmail.com'
let password = 'Hello123!'


describe('Verify Sign Up process',()=>{

    beforeEach(()=>{

        cy.server()
        cy.route('POST','/api/account/register').as('register')
        cy.route('GET','/api/session').as('session')

        cy.visit('/',{timeout:100000}) //modified by Hima
        // cy.get(btnClose).parent().parent().then(($res)=>{
        //   cy.log($res)
        //   if($res.attr('style').includes('hidden')){

        //   }else{
        //         cy.get(btnClose).should('exist').click()
        //   }
        // })
        cy.get(lnkSignUp).should('exist').click()
        cy.wait('@session')
    })

    it('should throw error if name is not entered',()=>{

      cy.fixture('signUpData').then((sData)=>{
            cy.get(inpLastName).type(sData.data[0].lastName)
            cy.get(inpEmail).type(Cypress.env('username'))
            cy.get(inpPassword).type(password)
            cy.get(inpConfirmPassword).type(password)
            cy.get(selPhoneCode).select(sData.data[0].phoneCode)
            cy.get(inpPhoneNumber).type(sData.data[0].phoneNumber)
            cy.get(btnSubmit).click()
            cy.get(inpFirstName).then(($input) => {
              expect($input[0].validationMessage).to.eq('Please fill out this field.')
            })

        })  
    })

    it('should throw error if email is not entered',()=>{

      cy.fixture('signUpData').then((sData)=>{
            cy.get(inpFirstName).type(sData.data[0].firstName)
            cy.get(inpLastName).type(sData.data[0].lastName)
            cy.get(inpPassword).type(password)
            cy.get(inpConfirmPassword).type(password)
            cy.get(selPhoneCode).select(sData.data[0].phoneCode)
            cy.get(inpPhoneNumber).type(sData.data[0].phoneNumber)
            cy.get(btnSubmit).click()
            cy.get(inpEmail).then(($input) => {
              expect($input[0].validationMessage).to.eq('Please fill out this field.')
            })

        })  
    })

    it('should throw error if phone is not entered',()=>{

      cy.fixture('signUpData').then((sData)=>{
            cy.get(inpFirstName).type(sData.data[0].firstName)
            cy.get(inpLastName).type(sData.data[0].lastName)
            cy.get(inpEmail).type(Cypress.env('username'))
            cy.get(inpPassword).type(password)
            cy.get(inpConfirmPassword).type(password)
            cy.get(selPhoneCode).select(sData.data[0].phoneCode)
            cy.get(btnSubmit).click()
            cy.get(inpPhoneNumber).then(($input) => {
              expect($input[0].validationMessage).to.eq('Please fill out this field.')
            })

        })  
    })

    it('should throw error if password and confirm password do not match',()=>{

      cy.fixture('signUpData').then((sData)=>{
            cy.get(inpFirstName).type(sData.data[0].firstName)
            cy.get(inpLastName).type(sData.data[0].lastName)
            cy.get(inpEmail).type(Cypress.env('username'))
            cy.get(inpPassword).type(password)
            cy.get(inpConfirmPassword).type(password+"123")
            cy.get(selPhoneCode).select(sData.data[0].phoneCode)
            cy.get(inpPhoneNumber).type(sData.data[0].phoneNumber)
            cy.get(btnSubmit).click()
            cy.contains('Password must match').should('exist')

        })  
    })

    it('should throw error if password is not strong',()=>{

      cy.fixture('signUpData').then((sData)=>{
            cy.get(inpFirstName).type(sData.data[0].firstName)
            cy.get(inpLastName).type(sData.data[0].lastName)
            cy.get(inpEmail).type(Cypress.env('username'))
            cy.get(inpPassword).type('123')
            cy.get(inpConfirmPassword).click()
            //Commented By Hima:This text message is modified
            //cy.contains('Password must be 6-15 characters long with numbers, symbols and uppercase and lowercase letters') 
            cy.contains('Atleast 8 characters')
            .should('exist')

        })  
    })

    it('should throw error if email format is not correct',()=>{

      cy.fixture('signUpData').then((sData)=>{
            cy.get(inpFirstName).type(sData.data[0].firstName)
            cy.get(inpLastName).type(sData.data[0].lastName)
            cy.get(inpEmail).type('usernamegmail.com')
            cy.get(inpPassword).click()
            //cy.contains('Email is invalid') Commented By Hima:This text message is modified
            cy.contains('Enter a valid email')
            .should('exist')
            cy.get(inpEmail).clear()
            //cy.contains('Email is required') Commented By Hima:This text message is modified
            cy.contains('Enter a valid email')
            .should('exist')
            cy.get(inpEmail).type('username@gmailcom')
            //cy.contains('Email is invalid') Commented By Hima:This text message is modified
            cy.contains('Enter a valid email')
            .should('exist')

        })  
    })

    it('should throw error if email already exists',()=>{

      cy.fixture('signUpData').then((sData)=>{
            cy.get(inpFirstName).type(sData.data[0].firstName)
            cy.get(inpLastName).type(sData.data[0].lastName)
            cy.get(inpEmail).type(Cypress.env('username'))
            cy.get(inpPassword).type(password)
            cy.get(inpConfirmPassword).type(password)
            cy.get(selPhoneCode).select(sData.data[0].phoneCode)
            cy.get(inpPhoneNumber).type(sData.data[0].phoneNumber)
            cy.get(btnSubmit).click()
            //Commented By Hima: The element is modified
            //cy.contains('This email is already registered with an account. Please use a different email address and try again.')
            cy.get(alrDesc).contains('This email is already registered with an account. Please use a different email address and try again.') 
            .should('exist')

        })  
    })

    it('should be able to fill all fields and sign up',()=>{


        // Gettting the data through fixture file

        cy.fixture('signUpData').then((sData)=>{
          
            cy.get(inpFirstName).type(sData.data[0].firstName)
            cy.get(inpLastName).type(sData.data[0].lastName)
            cy.get(inpEmail).type(mailId)
            cy.get(inpPassword).type(password)
            cy.get(inpConfirmPassword).type(password)
            cy.get(selPhoneCode).select(sData.data[0].phoneCode)
            cy.get(inpPhoneNumber).type(sData.data[0].phoneNumber)
            cy.get(inpInviteCode).should('not.exist')
        })

             // Checking email if its dev environment

            if(Cypress.config().baseUrl.includes("dev.feelaplace"))
            {
            cy.get(btnSubmit).click()
            cy.wait('@register')
            //Added by Hima
            cy.get(alrMsg)
            .should('contain','Success')
            //Commented by Hima - This element doesn't exist
            //cy.get(alrConfirmation)
            cy.get(alrDesc)
            .should('contain','Thank you for registering with us! Please use the account activation link sent to you at '+mailId+' in order to log in')
                       
            cy.log("email is "+mailId)

            cy.task("gmail:check", {
              from: "no-reply@feelaplace.com",
              to: mailId,
              subject: "Welcome to your account!"
            })
            .then(email => {
              assert.isNotNull(email, `Email was not found`)
            })

              cy.task("gmail:get-messages", {
                options: {
                  from: "no-reply@feelaplace.com",
                  to:mailId,
                  subject: "Welcome to your account!",
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
                cy.contains(' Woohoo! Your account has now been created. Have a great experience as you feelaplace and tell us how you feel. You can also refer your friends to feelaplace by sending out invites from your “My account” section. ')
                .should('exist')
                cy.writeFile('./cypress/fixtures/registeredEmails.csv', mailId+'\n', { flag: "a+"})

              })
            }

    })
    it('should be able to verify the link sign up with mobile and email',()=>{
      cy.get(lnkSignUpWithMobile).should('exist').click()
      cy.get(leftpaneFields).children('div').children('div[class="form-group col-sm-12"]').then((len)=>{
        assert.equal(len.length,2,"Sign up with Mobile fields are not displayed properly")
      })
      cy.get(btnSignUpEmail).should('exist').click()
      cy.get(leftpaneFields).children('form').children('div').children('div').children('div').then((len)=>{
        assert.equal(len.length,8,"Sign up with Email fields are not displayed properly")
      })      

    })

    it('should be able to verify validation messages on sign up with mobile',()=>{
      cy.get(lnkSignUpWithMobile).should('exist').click()
      cy.get(btnSignupMobile).click()
      cy.get(selPhoneCode).parent().children(alrMessage).should('have.text','Phone Code is required')
      cy.get(inpPhoneNumber).parent().children(alrMessage).should('have.text','Mobile Number is required')
    })

    if(Cypress.config().baseUrl.includes("dev.feelitlive"))
    {
      it('should be able to receive otp when user sign up with mobile',()=>{
        cy.server()
        cy.route('POST','/api/otp/send-and-validate').as('otp')
        cy.fixture('signUpData').then((sData)=>{
          cy.get(lnkSignUpWithMobile).should('exist').click()
          cy.get(selPhoneCode).should('exist').should('be.visible').children().should('not.have.length.lessThan',2)
          cy.get(selPhoneCode).select(sData.data[0].phoneCode)
          cy.get(inpPhoneNumber).should('exist').type(sData.data[0].phoneNumber)
          cy.get(btnSignupMobile).should('exist').click()
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


  
if(Cypress.config().baseUrl.includes("dev.feelitlive"))
{
describe('Reset Password',()=>{

    // Executing reset password test cases if it is dev environment

    beforeEach(()=>{
      cy.server()
      cy.route('POST','/api/account/forgotpassword').as('forgotPassword')
      //cy.route('GET','/api/session').as('session')
      cy.route('POST','/api/account/resetpassword').as('resetPassword')

      cy.visit('/')
      cy.get(lnkLogin).should('exist').click()
      cy.get(lnkForgotPwd).should('exist').click()
      //cy.wait('@session')

    })

    it("should throw error for reset password if email doesn't exist", function() {
      cy.get(inpEmail).type('test.automation.cypress_123123123123@gmail.com')
      cy.get(btnSendResetLink).click()
      cy.wait('@forgotPassword')
      cy.contains('The email address you have entered is invalid. Please try again.').should('exist')
    })

    it("should look for reset password email", function() {

      cy.readFile('./cypress/fixtures/registeredEmails.csv').then((data)=>{
        let emails = data.split('\n')
        
        let index = Math.floor(Math.random()*emails.length)
        cy.log(emails[index])

        // mailId = 'test.automation.cypress+76517@gmail.com'
      cy.get(inpEmail).type(mailId)

      cy.get(btnSendResetLink).click()
      cy.contains('We have sent a link to reset your password to your email address!').should('exist')
      cy.wait('@forgotPassword')

      cy.task("gmail:check", {
        from: "no-reply@feelaplace.com",
        to: mailId,
        subject: "Reset your password"
      })
      .then(email => {
        assert.isNotNull(email, `Email was not found`)
      })

      cy.task("gmail:get-messages", {
        options: {
          from: "no-reply@feelaplace.com",
          to:mailId,
          subject: "Reset your password",
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
        let body = emails[0].body.html;

        cy.log(Cypress.config().baseUrl+"reset-password?")
      
        assert.isTrue(
          body.indexOf(
            "/reset-password?"
          ) >= 0,
          "Found reset link!"
        )

        cy.visit('/reset-password'+body.split('/reset-password')[1].split('\'><img')[0])
        cy.get(inpPassword).type('test')
        cy.get(inpConfirmPassword).type('test')
        cy.get(btnResetPassword).click()
        cy.contains('Your password must be at least 8 characters long, contain at least one number and have a mixture of uppercase and lowercase letters')
        .should('exist')
        
        let newPass = 'TestCypress!'+Math.floor(Math.random()*1000)

        cy.log(newPass)
        cy.get(inpPassword).type(newPass)
        cy.get(inpConfirmPassword).type(newPass)
        cy.get(btnResetPassword).click()
        cy.wait('@resetPassword')
        cy.contains('Password changed successfully').should('exist')
      })
      })
    })

  })

}