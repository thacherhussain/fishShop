class CartService {
  constructor() {
    this.items = [];
  }

  addToCart(item) {
    const cartItem = this.getCartItemByItemId(item.id);

    if (cartItem === null) {
      item.quantity = 1;
      this.items.push(item);
      return;
    }
    cartItem.quantity += 1;
  }

  subtotal() {
    let cartSubtotal = 0;
    for (let i = 0; i < this.items.length; i++) {
      cartSubtotal += this.items[i].price * this.items[i].quantity;
    }
    return cartSubtotal;
  }

  taxes() {
    return this.subtotal() * 0.1;
  }

  total() {
    return this.subtotal() + this.taxes();
  }

  getCartItemByItemId(itemId) {
    for (const item of this.items) {
      if (item.id === itemId) {
        return item;
      }
    }
    return null;
  }
  clearCart() {
    this.items = [];
  }
}

export default CartService;
