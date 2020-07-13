describe('API Smoke Test',()=>{
    
    it('should successfully give success response with login api',()=>{
     
        cy.fixture('loginData.json')
        .then(data=>cy.request('POST','https://www.feelitlive.com/api/session/login',data)
        .then((response)=>{
            expect(response.body).to.have.property('success',true)
            // console.log(response.body.success)
        }))
    })

    it('should successfully retrieve top cateogeries',()=>{
        cy.request('/api/category/all-top-29')
        .then((response)=>{
            expect(response.body.categoryEvents).to.have.length(8)
        })
    })

    it('should get city info using weather api',()=>{
        cy.request('https://dataservice.accuweather.com/locations/v1/cities/search?q=Hyderabad&apikey=exyLoM9cukVL0nEkBYERPhtNMVY3UF2h')
        .then((response)=>{
            expect(response.body.length).to.be.greaterThan(0)
        })
    })   
    it('should return weather information of country',()=>{
        cy.request('GET','https://dataservice.accuweather.com/locations/v1/cities/search?q=india&apikey=exyLoM9cukVL0nEkBYERPhtNMVY3UF2h')
        .then((response)=>{
            expect(response.status).to.be.equal(200)
        })
    })
   
})