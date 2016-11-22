class CatalogCtrl {
  constructor(CatalogService) {
    this.CatalogService = CatalogService;
    this.fishOrder = [];
    this.search = '';
    this.sortBy = 'name';
  }

  getFishes() {
    return this.CatalogService.getFishes();
  }
}

CatalogCtrl.$inject = ['CatalogService'];

export default CatalogCtrl;
