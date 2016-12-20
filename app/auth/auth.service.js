class AuthService {
  constructor($http, $state) {
    this.$http = $http;
    this.state = $state;
    this.signedIn = false;

    this.$http.get('/api/token')
    .then((res) => {
      this.signedIn = res.data;
    })
    .catch((err) => {
  return err;
    });
  }

  signIn(email, password) {
    return this.$http.post('/api/token', { email, password })
      .then(() => {
        this.signedIn = true;
        this.$state.go('catalog');
      })
      .catch((err) => {
        return err;
      });
  }
  signOut() {
    return this.$http.delete('/api/token')
      .then(() => {
        this.signedIn = false;
        this.$state.go('home');
      })
      .catch((err) => {
        return err;
      });
  }
  userIsSignedIn() {
    return this.signedIn;
  }
}

AuthService.$inject = ['$http', '$state'];

export default AuthService;
