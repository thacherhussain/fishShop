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
        fish.price = parseFloat(fish.price)
      })
      // console.log(res);
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
