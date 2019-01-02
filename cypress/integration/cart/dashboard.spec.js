describe('Shopping Cart Test', function() {
    it('Should open Dashboard Page', function() {
        cy.visit("http://localhost:3000")
    });

    it('Should contain Product List Item', function() {
        cy.visit("http://localhost:3000")
        cy.get(".product_container").find("li").find(".product_name").contains("Apple iPhone X")
    });

    it('Should contain Cart List after add to cart is clicked', function() {
        cy.visit("http://localhost:3000")
        cy.contains("Add To Cart").click()
        cy.get(".cart_container").find("li").find(".cart_item_name").contains("Apple iPhone X")
    });

    it('Product Item in product List should not exists after Add to cart is clicked', function() {
        cy.visit("http://localhost:3000")
        cy.get(".product_container").find("li").find(".product_name").contains("Apple iPhone X")
        cy.contains("Add To Cart").click()
        cy.get(".product_container").find("li").find(".product_name").contains("Apple iPhone X").should('not.exist')
    });
  })