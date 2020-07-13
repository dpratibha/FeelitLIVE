//Web Elements
const lnkUserProdile = '.pull-right.rounded.border.border-primary.p-1.bg-light'
const btnTermsCondiatoin = '.btn.text-purple'
const lnkTermsCondiation = '.dropdown-menu.p-1.show'
const lnkFulfillmentForm = '.fa.fa-bookmark.fa-fw'
const lnkFulfillmentFormChildren = 'a[href="/fulfillment-form"]'
const lnkReelplaceManagement = '.fa.fa-map-marker.fa-fw'
const lnkUserManagement = '.menu-icon.fa.fa-money.fa-fw'
const lnkReports = '.menu-icon.fa.fa-bar-chart.fa-fw'
let feelPlaceManagementOptions = ['Add/New','Edit','Approve/Moderate','Site Mapping','Description Upload']
let UserManagementOptions = ['Manage Invites']
let ReportsOptions = ['Transactions','Users']




describe('admin page tests',()=>{

    beforeEach(()=>{
        cy.visit(Cypress.env('adminUrl'))
        cy.server()
        cy.route('POST','/api/session/login').as('adminLogin')
        cy.login(Cypress.env('adminUsername'), Cypress.env('adminPassword'))
        cy.wait('@adminLogin')
        cy.url().should('eq',Cypress.env('adminUrl'))
    })

    it('should login to admin page successfully',()=>{
    
        cy.contains('Welcome to the admin dashboard').should('exist')
    })

    it('should have all menu items',()=>{
        
        cy.contains('Welcome to the admin dashboard').should('exist')
        cy.get(lnkReports).click()
        ReportsOptions.forEach((ReportsOption)=>{
            cy.contains(ReportsOption).should('exist')
        })
        cy.get(lnkUserManagement).click()
         UserManagementOptions.forEach((UserManagementOption)=>{
             cy.contains(UserManagementOption).should('exist')
         })
        cy.get(lnkReelplaceManagement).click()
         feelPlaceManagementOptions.forEach((feelPlaceManagementOption)=>{
            cy.contains(feelPlaceManagementOption).should('exist')
        })
        cy.get(lnkFulfillmentForm).click()
         cy.get(lnkFulfillmentFormChildren).contains('Fulfillment Form').should('exist')


    })
    it('Check user profile',()=>{
        cy.contains('Welcome to the admin dashboard').should('exist')
        cy.get(lnkUserProdile).click()
        cy.get('a').contains('pratibha').should('exist')
        cy.get('a').contains('My Account').should('exist')
        cy.get('a').contains('Switch to "feelitLIVE"').should('exist')
        cy.get('a').contains('Logout').should('exist')
    })
    it('should be open terms & condiaton',()=>{
        cy.contains('Welcome to the admin dashboard').should('exist')
        cy.get(btnTermsCondiatoin).click()
        cy.get('a').contains('Additional Terms & Conditions').should('exist')

        
    })
})