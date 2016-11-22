class CartCtrl {
  constructor(CartService) {
    this.CartService = CartService;
    this.cart = [];
  }

  getCart() {
    return this.CartService.getCart();
  }
}

CartCtrl.$inject = ['CartService'];

export default CartCtrl;
