  class CartCtrl {
  constructor(CartService) {
    this.CartService = CartService;
  }
  items() {
    return this.CartService.items;
  }
  cartCount() {
    return this.CartService.items.length;
  }
  subtotal() {
    return this.CartService.subtotal();
  }
  taxes() {
    return this.CartService.taxes();
  }
  total() {
    return this.CartService.total();
  }
  clearCart() {
    return this.CartService.clearCart();
  }
}

CartCtrl.$inject = ['CartService'];

export default CartCtrl;
