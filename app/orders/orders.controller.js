class OrdersCtrl {
  constructor(OrdersService) {
    this.OrdersService = OrdersService;
    this.cart = [];

  }

  getOrders() {
    return this.OrdersService.getOrders();
  }


}

OrdersCtrl.$inject = ['OrdersService'];

export default OrdersCtrl;
