import './commands'


            // cypress/support/index.js
            // require('cypress-failed-log')

            // ignore uncaught exceptions
            Cypress.on('uncaught:exception', (err) => {
                return false
            })

            // patch Cypress top.onerror
            // Object.defineProperty(top, 'onerror', {
            //     value: window.onerror,
            // })


            const addContext = require('mochawesome/addContext')

            Cypress.on('test:after:run', (test, runnable) => {
                if (test.state === 'failed') {
                    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`
                    addContext({ test }, `assets/${Cypress.spec.name}/${screenshotFileName}`)

                    // if(runnable.title.includes('should be able to add address')){
                    //     console.log('Address not added')
                    // }
                }
            })
            
            Cypress.on("window:before:load", win => {
                win.fetch = null;
              });