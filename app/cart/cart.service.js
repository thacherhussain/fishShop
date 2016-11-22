class CartService {
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
  getCart() {
    return this.cart;
  }
}

CartService.$inject = ['$http'];

export default CartService;
