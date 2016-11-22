class SignUpCtrl {
  constructor(SignUpService) {
    this.SignUpService = SignUpService;
    this.cart = [];

  }

  getSignUp() {
    return this.SignUpService.getSignUp();
  }


}

SignUpCtrl.$inject = ['SignUpService'];

export default SignUpCtrl;
