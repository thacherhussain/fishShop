class AuthService {
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
  getAuth() {
    return this.cart;
  }
}

AuthService.$inject = ['$http'];

export default AuthService;
