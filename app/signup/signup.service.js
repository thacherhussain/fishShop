class SignUpService {
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
  getSignUp() {
    return this.cart;
  }
}

SignUpService.$inject = ['$http'];

export default SignUpService;
