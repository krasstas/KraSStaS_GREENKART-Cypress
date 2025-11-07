describe('GREENKART_KraSStaS_Record_Auto_Test', () => {
  it('GREENKART_KraSStaS_Record_Test', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('#root input.search-keyword').click();
    cy.get('#root input.search-keyword').type('ro');
    cy.get('#root div:nth-child(3) input.quantity').click();
    cy.get('#root div:nth-child(3) input.quantity').clear();
    cy.get('#root div:nth-child(3) input.quantity').type('5');
    cy.get('#root div:nth-child(3) div.product-action button').click();
    cy.get('#root div:nth-child(4) div.stepper-input a.increment').click();
    cy.get('#root div:nth-child(4) div.stepper-input a.increment').click();
    cy.get('#root div:nth-child(4) div.product-action button').click();
    cy.get('#root img[alt="Cart"]').click();
    cy.get('#root div.cart-preview li:nth-child(1) a.product-remove').click();
  });
});
