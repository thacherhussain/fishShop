class OrdersService {
  constructor($http) {
    this.$http = $http;
    this.cart = [];
    this.$http({
      url: '/api/cart',
      method: 'GET'
    }).then((res) => {
      this.cart = res.data;

      // console.log(res);
    }).catch((err) => {
      return err;
    });
  }

  checkout(items, firstName, lastName, address1, address2, city, state, zip) {
    return this.$http.post('/orders', { items, firstName, lastName, address1, address2, city, state, zip })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log('fail');
    });
  }
}

OrdersService.$inject = ['$http'];

export default OrdersService;
