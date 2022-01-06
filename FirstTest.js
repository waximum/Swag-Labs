describe("Autentification", function () {

      it(" Autentification réussie avec un username et un mot passse valide", function() {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('#item_4_title_link > .inventory_item_name').click()
      // assertion photo sac a dos
      cy.get('.inventory_details_img').should('have.attr', 'src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg')
      
     })
  
    
    it(" Autentification refusé avec un mot passse invalide", function() {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_saucise')
      cy.get('[data-test="login-button"]').click()
      
    })
  
      it(" Autentification refusé avec un mot username invalide", function() {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('problemx_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        
      })
     
        it(" Autentification avec un utilisateur bloqué", function() {
          cy.visit('https://www.saucedemo.com/')
          cy.get('[data-test="username"]').type('locked_out_user')
          cy.get('[data-test="password"]').type('secret_sauce')
          cy.get('[data-test="login-button"]').click()
          
          })

          it(" Assertion url", function() {
            cy.visit('https://www.saucedemo.com/')
            cy.url().should('include', 'https://www.saucedemo.com')
            
            })

            it(" Assertion titre", function() {
              cy.visit('https://www.saucedemo.com/')
              cy.title().should('eq', 'Swag Labs')
      })
    })