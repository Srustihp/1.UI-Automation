// Products Page
const fs = require('fs');
class ProductsPage {
  constructor(page) {
    this.page = page;
    this.firstProductName = page.locator('.inventory_item_name').first();
    this.firstProductPrice = page.locator('.inventory_item_price').first();
    this.addToCartButton = page.locator('.btn_inventory').first();
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async getProductDetails() {
    const name = await this.firstProductName.textContent();
    const price = await this.firstProductPrice.textContent();
    fs.writeFileSync('productDetails.txt', `Name: ${name}\nPrice: ${price}`);
    return { name, price };
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}

module.exports = ProductsPage;
