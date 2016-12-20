class AuthCtrl {
  constructor(AuthService) {
    this.AuthService = AuthService;
    this.email = '';
    this.password = '';
  }
  isSignedIn() {
    return this.AuthService.isSignedIn();
  }
  signIn(email, password) {
    return this.AuthService.signIn(this.email, this.password);
  }
  signOut() {
    return this.AuthService.signOut();
  }
}

AuthCtrl.$inject = ['AuthService'];

export default AuthCtrl;
