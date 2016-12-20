class OrdersCtrl {
  constructor(CartService, OrdersService) {
    this.CartService = CartService;
    this.OrdersService = OrdersService;
    this.items = this.CartService.items;
    this.firstName = '';
    this.lastName = '';
    this.address1 = '';
    this.address2 = '';
    this.city = '';
    this.state = '';
    this.zip = '';
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
  checkout(items, firstName, lastName, address1, address2, city, state, zip) {
    this.OrdersService.checkout(this.items, this.firstName, this.lastName, this.address1, this.address2, this.city, this.state, this.zip);
  }
  clearCart() {
    return this.CartService.clearCart();
  }
}

OrdersCtrl.$inject = ['CartService', 'OrdersService'];

export default OrdersCtrl;
