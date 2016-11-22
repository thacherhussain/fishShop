class AuthCtrl {
  constructor(AuthService) {
    this.AuthService = AuthService;
    this.cart = [];

  }

  getAuth() {
    return this.AuthService.getAuth();
  }


}

AuthCtrl.$inject = ['AuthService'];

export default AuthCtrl;
