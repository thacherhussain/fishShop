class CartCtrl {
  constructor(cartService) {
    this.cartService = cartService;
  }
  items() {
    return this.cartService.items;
  }
  cartCount() {
    return this.cartService.items.length;
  }
  subtotal() {
    return this.cartService.subtotal();
  }
  taxes() {
    return this.cartService.taxes();
  }
  total() {
    return this.CartService.total();
  }
}

CartCtrl.$inject = ['CartService'];

export default CartCtrl;
