//Web Elements
const btnClose = 'a.close-popup.btn-primary.rounded-circle:contains("X")'
const lnkSignIp = 'a:contains("Log in")'
const footerHeaders = ['FeelitLIVE', 'DISCOVER', 'HOST', 'SUPPORT', 'DOWNLOAD APP']
const lnkAboutUs = 'a[href="/about-us"]'
const lnkBlog = 'a[href="https://feelaplace.wordpress.com"]'
const lnkHelp = 'a[href="https://feelitlive.zendesk.com/"]'
const lnkCareers = 'a[href="/careers"]'
const lnkFeelit =  'a[href="/feel-itineraryplanner"]'
const lnkFeelitLIVE  = 'a[href="/create-online-experience"]'
const lnkInstagram = 'a[href="https://www.instagram.com/feelit_live/"]'
const lnkFacebook = 'a[href="https://www.facebook.com/feelitlivecom/"]'
const lnkTwitter = 'a[href="https://twitter.com/feelit_LIVE"]'
const lnkLinkedIn='a[href="https://www.linkedin.com/company/feelitlive"]'
const lnkFeelForBusiness = 'a[href="/feelforbusiness"]'
// const lnkHostAFeel= 'a[href="/login"]'
const lnkAdvertiseAFeel = 'a[href="/advertiseafeel"]'
const lnkTerms = 'a[href="/terms"]'
const lnkPrivacy = 'a[href="/privacy-policy"]'
const lnkAppStore = 'a[href="https://itunes.apple.com/in/app/feelaplace/id1458680003?mt=8"]'
const lnkPlayStore = 'a[href="https://play.google.com/store/apps/details?id=com.feelaplace.app"]'
const lnkNewsRoom='a[href="/coming-soon"]'
const lnkHostanIRLExp='a[href="/host-a-feel"]'
const lnkFeelGuide='a:contains("FeelGuide")'

//below definitions should be updated once actual links become active
const lnkComingSoon = 'a[href="/coming-soon"]'


describe('Check footer links', () => {

  before(() => {
    cy.visit('/')
    // cy.get(btnClose).parent().parent().then(($res) => {
    //   cy.log($res)
    //   if ($res.attr('style').includes('hidden')) {
    //   } else {
    //     cy.get(btnClose).should('exist').click()
    //   }
    // })
    cy.get(lnkSignIp).should('exist').click()


  })

  it('should change footer link for Host a feel once logged in', () => {

    cy.server()
    cy.route('POST', '/api/session/login').as('login')
    cy.login(Cypress.env('username'), Cypress.env('password'))
    cy.wait('@login')
    // cy.wait(2000)
    // cy.get('dd').children(lnkHostAFeel).contains('Host a feel').click()

    cy.get('dd').children('a').contains('Host an In-Real-Life experience')
      .should('have.attr', 'href')
      .and('contain', '/host-a-feel')

  })

  it('should have all the footer links', () => {

    footerHeaders.forEach((footerHeader) => {
      cy.get('dt').contains(footerHeader).should('exist')

    })
    cy.get(lnkAboutUs).contains('About Us').should('exist')
    cy.get(lnkBlog).contains('Blog').should('exist')
    cy.get(lnkNewsRoom).contains('Newsroom').should('exist')
    cy.get(lnkCareers).contains('Careers').should('exist')
    cy.get(lnkFeelit).contains('Feelit').should('exist')
    cy.get(lnkInstagram).should('exist')
    cy.get(lnkFacebook).should('exist')
    cy.get(lnkTwitter).should('exist')
    cy.get(lnkLinkedIn).should('exist')
    cy.get(lnkComingSoon).contains('Referral Credit').should('exist')
    cy.get(lnkFeelForBusiness).contains('Feel for Business').should('exist')
    cy.get(lnkAdvertiseAFeel).contains('Advertise an experience').should('exist')
    cy.get(lnkHostanIRLExp).contains('Host an In-Real-Life experience').should('exist')
    cy.get(lnkFeelitLIVE).contains('Host an online experience').should('exist')
    cy.get(lnkFeelGuide).should('exist')
    cy.get(lnkHelp).contains("Help Center").should('exist')
    cy.get(lnkTerms).contains('Terms').should('exist')
    cy.get(lnkPrivacy).contains('Privacy').should('exist')
    cy.get('.col-sm-6').contains('© 2020 FeelitLIVE, Inc. All rights reserved').should('exist')

  })



})
