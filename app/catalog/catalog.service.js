class CatalogService {
  constructor($http) {
    this.$http = $http;
    this.fishes = [];

    this.$http({
      url: '/api/fish',
      method: 'GET'
    }).then((res) => {
      this.fishes = res.data;
      this.fishes.forEach((fish) => {
        fish.price = parseFloat(fish.price);
      });
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
