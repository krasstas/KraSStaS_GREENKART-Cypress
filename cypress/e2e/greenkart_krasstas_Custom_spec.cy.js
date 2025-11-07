import { CART, PRODUCT, WEBSITE } from '../pageobjects/selectors.cy.js';

describe('GREENKART_KraSStaS_Custom_Auto_Test', () => {
  it('Add 2 items & remove 1 item', () => {
    cy.visit(WEBSITE);
    cy.url().should('include', 'rahulshettyacademy.com');

    // Фильтруем товары по тексту, добавляем проверки.
    cy.get(PRODUCT.productSearchInput).type('ro');
    cy.contains(PRODUCT.productItem, 'Carrot').should('be.visible');
    cy.contains(PRODUCT.productItem, 'Mushroom').should('be.visible');

    // Очищам поле "количество", вводим необходимое количество, добавляем в корзину.
    cy.contains(PRODUCT.productItem, 'Carrot')
      .find('input.quantity')
      .clear()
      .type('5')
      .should('have.value', '5');
    cy.contains(PRODUCT.productItem, 'Carrot').find('button').click();

    // Добавляем необходимое количество с помощью "+", добавляем в корзину.
    cy.contains(PRODUCT.productItem, 'Mushroom').find('.increment').dblclick();
    cy.contains(PRODUCT.productItem, 'Mushroom').find('input.quantity').should('have.value', '3');
    cy.contains(PRODUCT.productItem, 'Mushroom').find('button').click();

    // Открываем корзину, проверяем что в корзине два товара.
    cy.get(PRODUCT.productCartIcon).click();
    cy.get(CART.cartItem).should('have.length', 2);

    // Удаляем товар, содержащий название "Carrot", проверяем, что такого товара больше нет.
    cy.contains(CART.cartItem, 'Carrot').find(CART.cartRemoveBtn).click();
    cy.contains(CART.cartItem, 'Carrot').should('not.exist');

    // Проверяем, что товар с названием "Mushroom", остался в корзине.
    cy.contains(CART.cartItem, 'Mushroom').should('exist').and('be.visible');

    // Раскомментировать, если необходимо закрыть "cart-preview",
    // чтобы снова увидеть список продуктов
    // cy.get(PRODUCT.productCartIcon).click();
  });
});
