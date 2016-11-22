class OrdersService {
  constructor($http) {
    this.$http = $http;
    this.cart = [];

    this.$http({
      url: '/api/cart',
      method: 'GET'
    }).then((res) => {
      this.cart = res.data;
      console.log(res);
    }).catch((err) => {
      return err;
    });
  }
  getOrders() {
    return this.cart;
  }
}

OrdersService.$inject = ['$http'];

export default OrdersService;
