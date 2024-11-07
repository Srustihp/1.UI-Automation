// Cart Page
class CartPage {
    constructor(page) {
      this.page = page;
      this.cartItemName = page.locator('.inventory_item_name');
      this.cartItemPrice = page.locator('.inventory_item_price');
      this.logoutButton = page.locator('#react-burger-menu-btn');
      this.logoutLink = page.locator('#logout_sidebar_link');
    }
  
    async verifyCartItem(name, price) {
      const cartName = await this.cartItemName.textContent();
      const cartPrice = await this.cartItemPrice.textContent();
      return cartName === name && cartPrice === price;
    }
  
    async logout() {
      await this.logoutButton.click();
      await this.logoutLink.click();
    }
  }
  
  module.exports = CartPage;
  