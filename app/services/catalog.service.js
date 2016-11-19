class CatalogService {
  constructor($http) {
    this.$http = $http;
    this.fishes = [];

    this.$http({
      url: '/api/fishes',
      method: 'GET'
    }).then((res) => {
      this.fishes = res.data;
      console.log(res);
    }).catch((err) => {
      return err;
    });
  }
  getFishes() {
    return this.fishes;
  }
}

CatalogService.$inject = ['$http'];

export default CatalogService;
