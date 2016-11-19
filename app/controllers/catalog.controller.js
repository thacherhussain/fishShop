class CatalogCtrl {
  constructor(CatalogService) {
    this.CatalogService = CatalogService;
    this.fishOrder = [];
    this.search = '';
    this.sortBy = 'name';
  }

  getFishes() {
    return this.CatalogService.getFishes();
    console.log('added fish');
  }


}

CatalogCtrl.$inject = ['CatalogService'];

export default CatalogCtrl;
