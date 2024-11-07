// Add to Cart Test
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');

test.describe('Add to Cart Test', () => {
  let loginPage, productsPage, cartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    await loginPage.navigateTo();
  });

  test('should add product to cart and verify cart contents', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    expect(page.url()).toContain('inventory');
    const product = await productsPage.getProductDetails();
    await productsPage.addToCart();
    await productsPage.goToCart();
    const isCartItemCorrect = await cartPage.verifyCartItem(product.name, product.price);
    expect(isCartItemCorrect).toBeTruthy();
    await cartPage.logout();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
